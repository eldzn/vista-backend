import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UpdateDataUserDto } from './dtos/update-data-user.dto';
import { UpdatePasswordUserDto } from './dtos/update-password-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateEmailUserDto } from './dtos/update-email.user.dto';
import { Prisma } from '../../generated/prisma';
import { UploadsService } from '../uploads/uploads.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private uploadsService: UploadsService,
  ) {}

  async getById(
    userId: string,
    client?: Prisma.TransactionClient | PrismaService,
  ) {
    const db = client || this.prisma;

    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        backupEmail: true,
        nickname: true,
        about: true,
        birthDate: true,
        passwordChangeAt: true,
        avatarFileName: true,
        avatarUrl: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async getDataUser(userId: string) {
    return this.getById(userId);
  }

  async updateDataUser(userId: string, dto: UpdateDataUserDto) {
    await this.getById(userId);

    if (dto.nickname) {
      const existingNickname = await this.prisma.user.findFirst({
        where: {
          nickname: dto.nickname,
          id: { not: userId },
        },
      });
      if (existingNickname) {
        throw new BadRequestException('Nickname already exists');
      }
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        nickname: dto.nickname,
        birthDate: dto.birthDate,
        about: dto.about,
      },
    });
  }

  async updatePasswordUser(userId: string, dto: UpdatePasswordUserDto) {
    await this.getById(userId);

    const userData = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { passwordHash: true },
    });

    if (!userData) throw new NotFoundException('User not found');

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      userData.passwordHash,
    );
    if (!isPasswordValid)
      throw new UnauthorizedException('Current password is incorrect');

    if (dto.passwordNew !== dto.passwordConfirm) {
      throw new BadRequestException(
        'New password and confirmation do not match',
      );
    }

    const hashedPassword = await bcrypt.hash(dto.passwordNew, 10);

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        passwordHash: hashedPassword,
        passwordChangeAt: new Date(),
      },
    });
  }

  async updateEmailUser(userId: string, dto: UpdateEmailUserDto) {
    await this.getById(userId);

    const userData = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { passwordHash: true },
    });
    if (!userData) throw new NotFoundException('User not found');

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      userData.passwordHash,
    );
    if (!isPasswordValid)
      throw new UnauthorizedException('Current password is incorrect');

    if (dto.emailNew !== dto.emailConfirm) {
      throw new BadRequestException('New email and confirmation do not match');
    }

    const existingEmail = await this.prisma.user.findFirst({
      where: { email: dto.emailNew, id: { not: userId } },
    });
    if (existingEmail) throw new BadRequestException('Email already exists');

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        email: dto.emailNew,
      },
    });
  }

  async addBackupEmail(userId: string, backupEmail: string) {
    await this.getById(userId);

    const existing = await this.prisma.user.findFirst({
      where: { backupEmail },
    });
    if (existing) throw new BadRequestException('Backup email already in use');

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        backupEmail,
      },
    });
  }

  async deleteBackupEmail(userId: string) {
    await this.getById(userId);

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        backupEmail: null,
      },
    });
  }

  async updateAvatar(userId: string, file: Express.Multer.File) {
    await this.getById(userId);
    const uploaded = await this.uploadsService.uploadFile(file, ['avatars']);
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        avatarFileName: uploaded.name,
        avatarUrl: uploaded.url,
      },
      select: {
        id: true,
        nickname: true,
        avatarFileName: true,
        avatarUrl: true,
      },
    });
  }

  async deleteAvatar(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { avatarFileName: true },
    });

    if (!user) throw new NotFoundException('User not found');
    if (!user.avatarFileName) return { message: 'No avatar to delete' };

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        avatarFileName: null,
        avatarUrl: null,
      },
    });
  }

  async followUser(followerId: string, followingId: string) {
    if (followerId === followingId) {
      throw new BadRequestException('You cannot follow yourself');
    }
    const user = await this.prisma.user.findUnique({
      where: { id: followingId },
      select: { id: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const existing = await this.prisma.user.findFirst({
      where: {
        id: followerId,
        following: { some: { id: followingId } },
      },
    });
    if (existing) {
      throw new BadRequestException('Already following this user');
    }
    return this.prisma.user.update({
      where: { id: followerId },
      data: {
        following: {
          connect: { id: followingId },
        },
      },
    });
  }

  async unfollowUser(followerId: string, followingId: string) {
    if (followerId === followingId) {
      throw new BadRequestException('You cannot unfollow yourself');
    }

    return this.prisma.user.update({
      where: { id: followerId },
      data: {
        following: {
          disconnect: { id: followingId },
        },
      },
    });
  }

  async getFollowersCount(userId: string): Promise<number> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        _count: {
          select: {
            followers: true,
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user._count?.followers ?? 0;
  }

  async getFollowingCount(userId: string): Promise<number> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        _count: {
          select: {
            following: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user._count?.following ?? 0;
  }

  async isFollowing(followerId: string, followingId: string): Promise<boolean> {
    const relation = await this.prisma.user.findFirst({
      where: {
        id: followerId,
        following: { some: { id: followingId } },
      },
    });
    return !!relation;
  }

  async getPopularUsers(limit: number = 5) {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        nickname: true,
        avatarFileName: true,
        avatarUrl: true,
        _count: {
          select: { followers: true },
        },
      },
      orderBy: {
        followers: {
          _count: 'desc',
        },
      },
      take: limit,
    });
    return users.map((user) => ({
      id: user.id,
      nickname: user.nickname,
      avatarFileName: user.avatarFileName,
      avatarUrl: user.avatarUrl,
      followersCount: user._count.followers,
    }));
  }

  async getFollowingUsers(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        following: {
          select: {
            id: true,
            nickname: true,
            avatarUrl: true,
            _count: {
              select: {
                followers: true,
              },
            },
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user.following;
  }
  async getUserVideos(authorId: string) {
    await this.getById(authorId);

    return this.prisma.video.findMany({
      where: {
        userId: authorId,
        isPublic: true,
      },
      include: {
        author: {
          select: {
            id: true,
            nickname: true,
            avatarFileName: true,
            avatarUrl: true,
          },
        },
        category: true,
        ageRating: true,
        tags: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}

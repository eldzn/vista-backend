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
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getDataUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        backupEmail: true,
        nickname: true,
        about: true,
        birthDate: true,
        passwordChangeAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateDataUser(userId: string, dto: UpdateDataUserDto) {
    if (dto.nickname) {
      const existingNickname = await this.prisma.user.findFirst({
        where: {
          nickname: dto.nickname,
          id: {
            not: userId,
          },
        },
      });
      if (existingNickname) {
        throw new BadRequestException('Nickname already exists');
      }
    }
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        nickname: dto.nickname,
        birthDate: dto.birthDate,
        about: dto.about,
      },
    });
    return user;
  }

  async updatePasswordUser(userId: string, dto: UpdatePasswordUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        passwordHash: true,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }
    if (dto.passwordNew !== dto.passwordConfirm) {
      throw new BadRequestException(
        'New password and confirmation do not match',
      );
    }
    const hashedPassword = await bcrypt.hash(dto.passwordNew, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        passwordHash: hashedPassword,
        passwordChangeAt: new Date(),
      },
    });
    return { message: 'Password updated successfully' };
  }

  async updateEmailUser(userId: string, dto: UpdateEmailUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        passwordHash: true,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }
    if (dto.emailNew !== dto.emailConfirm) {
      throw new BadRequestException('New email and confirmation do not match');
    }
    const existingEmail = await this.prisma.user.findFirst({
      where: {
        email: dto.emailNew,
        id: { not: userId },
      },
    });
    if (existingEmail) {
      throw new BadRequestException('Email already exists');
    }
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        email: dto.emailNew,
      },
    });
    return { message: 'Email updated successfully' };
  }

  async addBackupEmail(userId: string, backupEmail: string) {
    const existing = await this.prisma.user.findFirst({
      where: { backupEmail },
    });
    if (existing) {
      throw new BadRequestException('Backup email already in use');
    }
    await this.prisma.user.update({
      where: { id: userId },
      data: { backupEmail },
    });
    return { message: 'Backup email added successfully' };
  }

  async deleteBackupEmail(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { backupEmail: null },
    });
    return { message: 'Backup email removed successfully' };
  }

  async updateAvatar(userId: string, fileName: string) {
    const result = await this.prisma.user.update({
      where: { id: userId },
      data: { avatarFileName: fileName },
    });
    return result;
  }

  async deleteAvatar(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        avatarFileName: true
      }
    })
    if(!user) {
      throw new NotFoundException('User not found')
    }
    if(!user.avatarFileName) {
      return { message: 'No avatar to delete'}
    }
    const filePath = path.join(process.cwd(), 'uploads', 'avatars', user.avatarFileName)
    try {
      await fs.promises.unlink(filePath)
    } catch (error) {
      console.log(error)
    }
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        avatarFileName: null
      }
    })
    return { message: 'Avatar delete' }
  }
}

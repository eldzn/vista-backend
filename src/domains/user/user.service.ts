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
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

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

  async updateAvatar(userId: string, fileName: string) {
    await this.getById(userId);

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        avatarFileName: fileName,
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

    const filePath = path.join(
      process.cwd(),
      'uploads',
      'avatars',
      user.avatarFileName,
    );

    try {
      await fs.promises.unlink(filePath);
    } catch (error) {
      console.warn(`Failed to delete file ${filePath}: ${error}`);
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        avatarFileName: null,
      },
    });
  }
}

import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UpdateProfileDto } from '../auth/dtos/update-profile.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';
import * as bcrypt from 'bcrypt';
import { compare } from 'bcrypt';
import { RecoveryPasswordDto } from './dtos/recovery-password.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        nickname: true,
        about: true,
        birthDate: true,
        avatar: true,
      },
    });
    if (!user) throw new UnauthorizedException('Пользователь не найден');
    return user;
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const updateData: Record<string, string> = {};
    if (dto.nickname !== undefined) updateData.nickname = dto.nickname;
    if (dto.birthDate !== undefined) updateData.birthDate = dto.birthDate;
    if (dto.about !== undefined) updateData.about = dto.about;

    if (Object.keys(updateData).length === 0) {
      return this.getProfile(userId);
    }

    if (dto.nickname) {
      const existing = await this.prisma.user.findFirst({
        where: {
          nickname: dto.nickname,
          id: { not: userId },
        },
      });
      if (existing) {
        throw new ConflictException('Никнейм уже занят');
      }
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        email: true,
        nickname: true,
        about: true,
        birthDate: true,
        avatar: true,
      },
    });
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, passwordHash: true },
    })

    if(!user) {
      throw new UnauthorizedException('Пользователь не найден')
    }

    const isPasswordValid = await bcrypt.compare(dto.currentPassword, user.passwordHash);

    if(!isPasswordValid) {
      throw new UnauthorizedException('Неверный текущий пароль')
    }

    if (dto.newPassword !== dto.confirmPassword) {
      throw new BadRequestException('Новые пароли не совпадают')
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(dto.confirmPassword, saltRounds);

    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    })
  }

  async recoveryPassword(userId: string, dto: RecoveryPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true },
    })

    if(!user) {
      throw new UnauthorizedException('Пользователь не найден')
    }

    if(dto.currentEmail !== user.email) {
      throw new BadRequestException('Неверный текущий email')
    }

    if(dto.newPassword !== dto.confirmPassword) {
      throw new BadRequestException('Новые пароли не совпадают');
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(dto.confirmPassword, saltRounds);

    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });
  }
}

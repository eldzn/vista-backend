import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UpdateProfileDto } from '../auth/dtos/update-profile.dto';

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
}

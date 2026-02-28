import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class AvatarService {
  constructor(private prisma: PrismaService) {}

  async uploadAvatar(userId: string, filePath: string) {
    const existing = await this.prisma.avatar.findUnique({
      where: { userId },
    });

    if (existing?.path) {
      try {
        fs.unlinkSync(existing.path);
      } catch (e) {
        console.warn('Не удалось удалить старый файл аватара:', e);
      }
    }

    return this.prisma.avatar.upsert({
      where: { userId },
      update: { path: filePath },
      create: { userId, path: filePath },
    });
  }

  async deleteAvatar(userId: string) {
    const avatar = await this.prisma.avatar.findUnique({
      where: { userId },
    });

    if (!avatar) {
      throw new NotFoundException('Аватар не найден');
    }

    try {
      fs.unlinkSync(avatar.path);
    } catch (e) {
      console.warn('Не удалось удалить файл:', e);
    }

    return this.prisma.avatar.delete({
      where: { userId },
    });
  }

  async getAvatarPath(userId: string): Promise<string | null> {
    const avatar = await this.prisma.avatar.findUnique({
      where: { userId },
      select: { path: true },
    });
    return avatar?.path ?? null;
  }
}
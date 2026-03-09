import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getDataUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        nickname: true,
        about: true,
        birthDate: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateDataUser(userId: string, dto: UpdateUserDto) {
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
}

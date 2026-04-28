import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { SetRoleDto } from './dtos/set-role.dto';
import { GetDayStatsDto } from './dtos/get-day-stats.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        nickname: true,
        avatarUrl: true,
        role: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async removeRole(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.role === 'USER') {
      throw new BadRequestException('User already has USER role');
    }
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        role: 'USER',
      },
      select: {
        id: true,
        nickname: true,
        role: true,
      },
    });
  }

  async setRole(userId: string, dto: SetRoleDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!['ADMIN', 'MODERATOR'].includes(dto.role)) {
      throw new BadRequestException('Invalid role');
    }
    if (user.role === dto.role) {
      throw new BadRequestException('User already has this role');
    }
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        role: dto.role,
      },
      select: {
        id: true,
        nickname: true,
        role: true,
      },
    });
  }

  async blockUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.role === 'ADMIN') {
      throw new BadRequestException('Cannot block ADMIN');
    }
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        role: 'BLOCKED',
      },
      select: {
        id: true,
        nickname: true,
        role: true,
      },
    });
  }

  async unblockUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.role !== 'BLOCKED') {
      throw new BadRequestException('User is not blocked');
    }
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        role: 'USER',
      },
      select: {
        id: true,
        nickname: true,
        role: true,
      },
    });
  }

  async getStatistics() {
    const [videosCount, complaintsCount, usersCount] = await Promise.all([
      this.prisma.video.count(),
      this.prisma.complaint.count(),
      this.prisma.user.count(),
    ]);
    const firstUser = await this.prisma.user.findFirst({
      orderBy: { createdAt: 'asc' },
      select: { createdAt: true },
    });
    const days = firstUser
      ? Math.max(
          1,
          Math.ceil(
            (Date.now() - new Date(firstUser.createdAt).getTime()) /
              (1000 * 60 * 60 * 24),
          ),
        )
      : 1;
    return {
      avgVideosPerDay: videosCount / days,
      avgComplaintsPerDay: complaintsCount / days,
      avgUsersPerDay: usersCount / days,
    };
  }

  async getDayStatistics(dto: GetDayStatsDto) {
    const date = new Date(dto.date);
    if (isNaN(date.getTime())) {
      throw new BadRequestException('Invalid date format');
    }
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    const [videosCount, complaintsCount] = await Promise.all([
      this.prisma.video.count({
        where: {
          createdAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      }),
      this.prisma.complaint.count({
        where: {
          createdAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      }),
    ]);
    return {
      date: dto.date,
      videosCount,
      complaintsCount,
    };
  }
}

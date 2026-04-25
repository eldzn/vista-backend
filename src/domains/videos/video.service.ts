import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UserService } from '../user/user.service';
import * as fs from 'fs';
import * as path from 'path';
import { CreateVideoDto } from './dtos/create-video.dto';
import { Prisma } from '../../generated/prisma';
import { FilterVideoDto } from './dtos/filter-video.dto';
import { SearchVideoDto } from './dtos/search-video.dto';
import { SortVideoDto } from './dtos/sort-video.dto';
import { UploadsService } from '../uploads/uploads.service';

@Injectable()
export class VideoService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private uploadsService: UploadsService,
  ) {}

  private getSortOrder(sortBy?: 'new' | 'old'): Prisma.SortOrder {
    return sortBy === 'old' ? 'asc' : 'desc';
  }

  async getPublicVideos() {
    return this.prisma.video.findMany({
      where: {
        isPublic: true,
        isBlocked: false, // ✅ FIX
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

  async getCategories() {
    return this.prisma.category.findMany({ orderBy: { name: 'desc' } });
  }

  async getAgeRating() {
    return this.prisma.ageRating.findMany({ orderBy: { code: 'desc' } });
  }

  async getFilteredVideos(dto: FilterVideoDto) {
    const whereCondition: Prisma.VideoWhereInput = {
      isPublic: true,
      isBlocked: false, // ✅ FIX
    };

    if (dto.categoryId) {
      whereCondition.categoryId = dto.categoryId;
    }

    if (dto.ageRatingId) {
      whereCondition.ageRatingId = dto.ageRatingId;
    }

    if (dto.tagQuery && dto.tagQuery.trim()) {
      whereCondition.tags = {
        some: {
          name: {
            contains: dto.tagQuery.trim(),
            mode: 'insensitive',
          },
        },
      };
    }

    const sortOrder = this.getSortOrder(dto.sortBy);

    return this.prisma.video.findMany({
      where: whereCondition,
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
      orderBy: { createdAt: sortOrder },
    });
  }

  async searchByTitle(dto: SearchVideoDto) {
    if (!dto.titleQuery || !dto.titleQuery.trim()) {
      return [];
    }

    const sortOrder = this.getSortOrder(dto.sortBy);

    return this.prisma.video.findMany({
      where: {
        isPublic: true,
        isBlocked: false, // ✅ FIX
        title: {
          contains: dto.titleQuery.trim(),
          mode: 'insensitive',
        },
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
      orderBy: { createdAt: sortOrder },
    });
  }

  async getSortedVideos(dto: SortVideoDto) {
    const sortOrder = this.getSortOrder(dto.sortBy);

    return this.prisma.video.findMany({
      where: {
        isPublic: true,
        isBlocked: false, // ✅ FIX
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
      orderBy: {
        createdAt: sortOrder,
      },
    });
  }

  async getVideoById(videoId: string, userId: string) {
    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
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
    });

    if (!video) {
      throw new NotFoundException('Video not found');
    }

    if (video.isBlocked) {
      // ✅ FIX
      throw new ForbiddenException('Video is blocked');
    }

    if (!video.isPublic && video.userId !== userId) {
      throw new ForbiddenException('You do not have access to this video');
    }

    return video;
  }
}

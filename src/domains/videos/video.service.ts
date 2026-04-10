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
      where: { isPublic: true },
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

  private async getCategoryById(
    categoryId: string,
    client?: Prisma.TransactionClient | PrismaService,
  ) {
    const db = client || this.prisma;

    const category = await db.category.findUnique({
      where: { id: categoryId },
      select: { id: true, name: true },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  private async getAgeRatingById(
    ratingId: string,
    client?: Prisma.TransactionClient | PrismaService,
  ) {
    const db = client || this.prisma;

    const rating = await db.ageRating.findUnique({
      where: { id: ratingId },
      select: { id: true, code: true },
    });

    if (!rating) {
      throw new NotFoundException('Age rating not found');
    }
    return rating;
  }

  async uploadVideo(
    userId: string,
    file: Express.Multer.File,
    dto: CreateVideoDto,
  ) {
    const uploadedFile = await this.uploadsService.uploadFile(file, ['videos']);
    return this.prisma.$transaction(async (tx) => {
      await this.userService.getById(userId, tx);
      const category = await this.getCategoryById(dto.categoryId, tx);
      await this.getAgeRatingById(dto.ageRatingId, tx);

      const isOtherCategory = category.name === 'Другое';
      let tagNames: string[] = [];
      if (dto.tags) {
        tagNames = dto.tags
          .split(',')
          .map((t) => t.trim())
          .filter((t) => t.length > 0);
      }

      if (isOtherCategory && tagNames.length === 0) {
        throw new BadRequestException('You must specify at least one tag.');
      }

      const tagsConnect: { id: string }[] = [];
      for (const name of tagNames) {
        const tag = await tx.tag.upsert({
          where: { name },
          update: {},
          create: { name },
        });
        tagsConnect.push({ id: tag.id });
      }

      return tx.video.create({
        data: {
          ...uploadedFile,
          title: dto.title,
          description: dto.description,
          isPublic: dto.isPublic,
          author: { connect: { id: userId } },
          category: { connect: { id: dto.categoryId } },
          ageRating: { connect: { id: dto.ageRatingId } },
          tags: tagsConnect.length > 0 ? { connect: tagsConnect } : undefined,
        },
        include: {
          category: true,
          ageRating: true,
          tags: true,
          author: {
            select: {
              id: true,
              nickname: true,
              avatarFileName: true,
              avatarUrl: true,
            },
          },
        },
      });
    });
  }

  async getUserVideos(userId: string) {
    await this.userService.getById(userId);

    return this.prisma.video.findMany({
      where: { userId },
      include: {
        category: true,
        ageRating: true,
        tags: true,
        author: {
          select: {
            id: true,
            nickname: true,
            avatarFileName: true,
            avatarUrl: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async streamVideo(id: string, userId: string) {
    await this.userService.getById(userId);

    const video = await this.prisma.video.findUnique({
      where: { id },
    });

    if (!video || video.userId !== userId) {
      throw new NotFoundException('Video not found!');
    }

    const filePath = path.join(
      process.cwd(),
      'uploads/videos',
      video.originalName,
    );

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('File not found on disk');
    }

    return {
      stream: fs.createReadStream(filePath),
      mimetype: video.mimetype,
      size: video.size,
    };
  }

  async getFilteredVideos(dto: FilterVideoDto) {
    const whereCondition: Prisma.VideoWhereInput = {
      isPublic: true,
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

  async addFavorites(userId: string, videoId: string) {
    await this.userService.getById(userId);
    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
      select: { id: true },
    });
    if (!video) {
      throw new NotFoundException('Video not found!');
    }
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        favoriteVideos: {
          connect: { id: videoId },
        },
      },
    });
  }

  async removeFavorites(userId: string, videoId: string) {
    await this.userService.getById(userId);
    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
      select: { id: true },
    });
    if (!video) {
      throw new NotFoundException('Video not found!');
    }
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        favoriteVideos: {
          disconnect: {
            id: videoId,
          },
        },
      },
    });
  }

  async getFavoriteVideos(userId: string) {
    await this.userService.getById(userId);
    return this.prisma.video.findMany({
      where: {
        favoritedBy: {
          some: { id: userId },
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
      orderBy: { createdAt: 'desc' },
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
    if (!video.isPublic && video.userId !== userId) {
      throw new ForbiddenException('You do not have access to this video');
    }
    return video;
  }

  async addLikeVideo(userId: string, videoId: string) {
    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
      select: { id: true },
    });
    if (!video) {
      throw new NotFoundException('Video not found!');
    }
    await this.prisma.video.update({
      where: { id: videoId },
      data: {
        likedBy: {
          connect: { id: userId },
        },
      },
    });
  }

  async removeLikeVideo(userId: string, videoId: string) {
    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
      select: { id: true },
    });
    if (!video) {
      throw new NotFoundException('Video not found!');
    }
    await this.prisma.video.update({
      where: {
        id: videoId,
      },
      data: {
        likedBy: {
          disconnect: {
            id: userId,
          },
        },
      },
    });
  }

  async getLikeCount(videoId: string): Promise<number> {
    const video = await this.prisma.video.findUnique({
      where: {
        id: videoId,
      },
      select: {
        _count: {
          select: {
            likedBy: true,
          },
        },
      },
    });
    if (!video) {
      throw new NotFoundException('Video not found');
    }
    return video._count.likedBy;
  }
  async checkUserLike(userId: string, videoId: string): Promise<boolean> {
    const like = await this.prisma.video.findFirst({
      where: {
        id: videoId,
        likedBy: { some: { id: userId } },
      },
    });
    return !!like;
  }

  async checkUserFavorite(userId: string, videoId: string): Promise<boolean> {
    const favorite = await this.prisma.video.findFirst({
      where: {
        id: videoId,
        favoritedBy: { some: { id: userId } },
      },
    });
    return !!favorite;
  }

  async deleteVideo(userId: string, videoId: string) {
    await this.userService.getById(userId);

    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
      select: { id: true, userId: true },
    });

    if (!video) {
      throw new NotFoundException('Video not found');
    }

    if (video.userId !== userId) {
      throw new ForbiddenException('You can only delete your own videos');
    }

    return this.prisma.video.delete({
      where: { id: videoId },
    });
  }
}

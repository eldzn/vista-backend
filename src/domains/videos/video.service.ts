import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import * as fs from 'fs';
import * as path from 'path';
import { CreateVideoDto } from './dtos/create-video.dto';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async getCategories() {
    return this.prisma.category.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async getAgeRating() {
    return this.prisma.ageRating.findMany({
      orderBy: { code: 'asc' },
    });
  }

  async uploadVideo(
    userId: string,
    fileName: string,
    originalName: string,
    mimetype: string,
    size: number,
    dto: CreateVideoDto,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    if (dto.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: {
          id: dto.categoryId,
        },
      });

      if (!category) {
        throw new NotFoundException('Category not found');
      }
    }

    if (dto.ageRatingId) {
      const rating = await this.prisma.ageRating.findUnique({
        where: {
          id: dto.ageRatingId,
        },
      });
      if (!rating) {
        throw new NotFoundException('Age rating not found');
      }
    }

    const video = await this.prisma.video.create({
      data: {
        fileName: fileName,
        originalName: originalName,
        mimetype: mimetype,
        size: size,
        title: dto.title,
        description: dto.description,
        isPublic: dto.isPublic ?? true,
        author: {
          connect: { id: userId },
        },
        category: dto.categoryId
          ? { connect: { id: dto.categoryId } }
          : undefined,
        ageRating: dto.ageRatingId
          ? { connect: { id: dto.ageRatingId } }
          : undefined,
      },
    });

    return video;
  }

  async getUserVideos(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return this.prisma.video.findMany({
      where: { userId },
      include: {
        category: true,
        ageRating: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async streamVideo(id: string, userId: string) {
    const video = await this.prisma.video.findUnique({
      where: { id: id },
    });

    if (!video || video.userId !== userId) {
      throw new NotFoundException('Video not found!');
    }

    const filePath = path.join(process.cwd(), 'uploads/videos', video.fileName);

    const stream = fs.createReadStream(filePath);

    return {
      stream,
      mimetype: video.mimetype,
      size: video.size,
    };
  }
}
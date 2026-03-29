import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UserService } from '../user/user.service';
import * as fs from 'fs';
import * as path from 'path';
import { CreateVideoDto } from './dtos/create-video.dto';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class VideoService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async getPublicVideos() {
    return this.prisma.video.findMany({
      where: { isPublic: true },
      include: {
        author: {
          select: {
            id: true,
            nickname: true,
            avatarFileName: true,
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
    fileName: string,
    originalName: string,
    mimetype: string,
    size: number,
    dto: CreateVideoDto,
  ) {
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
          fileName,
          originalName,
          mimetype,
          size,
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

    const filePath = path.join(process.cwd(), 'uploads/videos', video.fileName);

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('File not found on disk');
    }

    return {
      stream: fs.createReadStream(filePath),
      mimetype: video.mimetype,
      size: video.size,
    };
  }
}
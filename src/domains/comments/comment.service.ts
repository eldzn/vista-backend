import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';
import { Prisma } from '../../generated/prisma';
import { SortVideoDto } from '../videos/dtos/sort-video.dto';
import { SortCommentDto } from './dtos/sort-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  private getSortOrder(sortBy?: 'new' | 'old'): Prisma.SortOrder {
    return sortBy === 'old' ? 'asc' : 'desc';
  }

  async createComment(userId: string, dto: CreateCommentDto) {
    const video = await this.prisma.video.findUnique({
      where: {
        id: dto.videoId,
      },
      select: {
        id: true,
      },
    });
    if (!video) {
      throw new NotFoundException(`Video not found`);
    }
    if (!dto.text || dto.text.trim().length === 0) {
      throw new BadRequestException('Comment text cannot be empty');
    }
    return this.prisma.comment.create({
      data: {
        text: dto.text.trim(),
        author: {
          connect: {
            id: userId,
          },
        },
        video: {
          connect: {
            id: dto.videoId,
          },
        },
      },
      include: {
        author: {
          select: {
            id: true,
            nickname: true,
            avatarFileName: true,
          },
        },
      },
    });
  }

  async getComments(videoId: string) {
    return this.prisma.comment.findMany({
      where: {
        videoId,
      },
      include: {
        author: {
          select: {
            id: true,
            nickname: true,
            avatarFileName: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateComment(
    userId: string,
    commentId: string,
    dto: UpdateCommentDto,
  ) {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });
    if (!comment) {
      throw new NotFoundException(`Comment id not found`);
    }
    if (comment.userId !== userId) {
      throw new ForbiddenException(`You can only edit your own comments`);
    }
    if (dto.text && dto.text.trim().length === 0) {
      throw new BadRequestException('Comment text cannot be empty');
    }
    return this.prisma.comment.update({
      where: { id: commentId },
      data: {
        text: dto.text?.trim(),
      },
      include: {
        author: {
          select: {
            id: true,
            nickname: true,
            avatarFileName: true,
          },
        },
      },
    });
  }

  async deleteComment(userId: string, commentId: string) {
    const comment = await this.prisma.comment.findUnique({
      where: { id: commentId },
    });
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    if (comment.userId !== userId) {
      throw new ForbiddenException('You can only delete your own comments');
    }
    return this.prisma.comment.delete({
      where: { id: commentId },
    });
  }

  async getSortedComments(videoId: string, dto: SortCommentDto) {
    const sortOrder = this.getSortOrder(dto.sortBy);
    return this.prisma.comment.findMany({
      where: {
        videoId,
      },
      include: {
        author: {
          select: {
            id: true,
            nickname: true,
            avatarFileName: true
          }
        },
      },
      orderBy: {
        createdAt: sortOrder,
      },
    });
  }
}

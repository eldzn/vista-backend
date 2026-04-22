import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateComplaintsDto } from './dtos/create-complaints.dto';
import { Prisma } from '../../generated/prisma';
import { BlockComplaintsDto } from './dtos/block-complaints.dto';

@Injectable()
export class ComplaintsService {
  constructor(private prisma: PrismaService) {}

  async createComplaints(
    userId: string,
    videoId: string,
    dto: CreateComplaintsDto,
  ) {
    try {
      return await this.prisma.complaint.create({
        data: {
          reporterId: userId,
          videoId: videoId,
          reason: dto.reason,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2003') {
          throw new NotFoundException('Video not found');
        }
        if (e.code === 'P2002') {
          throw new BadRequestException('Already reported');
        }
      }
      throw e;
    }
  }

  async getListComplaints() {
    return this.prisma.complaint.findMany({
      include: {
        video: {
          select: {
            originalName: true,
          },
        },
        reporter: {
          select: {
            nickname: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async blockVideo(videoId: string, dto: BlockComplaintsDto) {
    const video = await this.prisma.video.findUnique({
      where: {
        id: videoId
      }
    })
    if (!video) {
      throw new NotFoundException('Video not found')
    }
    await this.prisma.$transaction([
      this.prisma.video.update({
        where: {
          id: videoId
        },
        data: {
          isBlocked: true,
          blockReason: dto.blockReason
        }
      }),
      this.prisma.complaint.updateMany({
        where: {
          videoId
        },
        data: {
          blockReason: dto.blockReason
        }
      })
    ])
    return { message: 'Video blocked' };
  }
}

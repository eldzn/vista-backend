import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateComplaintsDto } from './dtos/create-complaints.dto';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class ComplaintsService {
  constructor(private prisma: PrismaService) {}

  async createComplaints(userId: string, videoId: string, dto: CreateComplaintsDto) {
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
          throw new NotFoundException('Video not found')
        }
        if (e.code === 'P2002') {
          throw new BadRequestException('Already reported')
        }
      }
      throw e
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
}

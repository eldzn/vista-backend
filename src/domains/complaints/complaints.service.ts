import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateComplaintsDto } from './dtos/create-complaints.dto';

@Injectable()
export class ComplaintsService {
  constructor(private prisma: PrismaService) {}

  async createComplaints(userId: string, videoId: string, dto: CreateComplaintsDto) {
    return this.prisma.complaint.create({
      data: {
        reporterId: userId,
        videoId: videoId,
        reason: dto.reason
      },
    });
  }
}

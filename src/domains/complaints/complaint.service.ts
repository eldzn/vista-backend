import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateComplaintDto } from './dtos/create-complaint.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ComplaintService {
  constructor(
    private prisma: PrismaService,
    private user: UserService,
  ) {}

  async createComplaint(userId: string, dto: CreateComplaintDto) {
    const user = await this.user.getById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const video = await this.prisma.video.findUnique({
      where: {
        id: dto.videoId,
      },
    });
    if (!video) {
      throw new NotFoundException('Video not found');
    }
    const existingComplaint = await this.prisma.complaint.findFirst({
      where: {
        reporterId: userId,
        videoId: dto.videoId,
        status: {
          code: 'pending',
        },
      },
    });
    if (!existingComplaint) {
      throw new ConflictException('Have you filed a complaint before');
    }
    if (video.userId === userId) {
      throw new ForbiddenException(
        "You can't file a complaint about your video",
      );
    }
    const pendingStatus = await this.prisma.complaintStatus.findFirst({
      where: {
        code: 'pending',
      },
      select: {
        id: true,
      },
    });
    if (!pendingStatus) {
      throw new NotFoundException('Status complaint not found');
    }
    const complaint = await this.prisma.complaint.create({
      data: {
        reporterId: userId,
        videoId: dto.videoId,
        reason: dto.reason,
        statusId: pendingStatus.id,
      },
      include: {
        reporter: {
          select: {
            id: true,
            nickname: true,
          },
        },
        video: {
          select: {
            id: true,
            title: true,
          },
        },
        status: {
          select: {
            code: true,
            name: true,
          },
        },
      },
    });
    return complaint;
  }
}

import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async uploadVideo(
    userId: string,
    fileName: string,
    originalName: string,
    mimetype: string,
    size: number,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const video = await this.prisma.video.create({
      data: {
        fileName: fileName,
        originalName: originalName,
        mimetype: mimetype,
        size: size,
        author: {
          connect: { id: userId },
        },
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

    const videos = await this.prisma.video.findMany({
      where: { userId: userId },
    });

    return videos;
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
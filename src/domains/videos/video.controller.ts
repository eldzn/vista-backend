/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  StreamableFile,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { VideoFileValidator } from './validators/video-file.validator';
import { VideoService } from './video.service';

@Controller('videos')
export class VideoController {
  constructor(private videoService: VideoService) {}
  @Post('upload')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('video'))
  async uploadVideo(
    @Req() req: Request,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 50 * 1024 * 1024 }),
          new VideoFileValidator({
            videoTypePattern: /^video\/(mp4|webm|quicktime)$/,
          }),
        ],
      }),
    )
    video: Express.Multer.File,
  ) {
    const userId = (req as any).user?.id;
    const createVideo = await this.videoService.uploadVideo(
      userId,
      video.filename,
      video.originalname,
      video.mimetype,
      video.size
    )

    return {
      userId,
      video: createVideo,
    }
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getVideos(@Req() req: Request) {
    const userId = (req as any).user?.id;
    const videos = await this.videoService.getUserVideos(userId);
    return videos;
  }

  @Get(':id/stream')
  @UseGuards(AuthGuard('jwt'))
  async getStream(@Req() req: Request, @Res({passthrough: true}) res: Response, @Param('id') id: string) {
    const userId = (req as any).user?.id;
    try {
      const { stream, mimetype, size } = await this.videoService.streamVideo(
        id,
        userId,
      );

      res.set({
        'Content-Type': mimetype,
        'Content-Length': size,
        'Content-Disposition': 'inline',
      });

      return new StreamableFile(stream);
    } catch (error) {
      if (error) {
        throw error;
      }
      throw new NotFoundException('File not found or unreadable');
    }
  }
}
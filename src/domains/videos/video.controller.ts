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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { VideoFileValidator } from './validators/video-file.validator';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dtos/create-video.dto';

@Controller('videos')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Get('categories')
  async getCategories() {
    return this.videoService.getCategories();
  }

  @Get('age-ratings')
  async getAgeRatings() {
    return this.videoService.getAgeRating();
  }

  @Post('upload')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('video'))
  @HttpCode(HttpStatus.CREATED)
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

    const title = req.body.title;
    const description = req.body.description;
    const categoryId = req.body.categoryId;
    const ageRatingId = req.body.ageRatingId;
    const isPublic = req.body.isPublic === 'true';

    if (!title) {
      throw new Error('Title is required');
    }

    const createVideoDto: CreateVideoDto = {
      title,
      description,
      categoryId,
      ageRatingId,
      isPublic,
    };

    const createdVideo = await this.videoService.uploadVideo(
      userId,
      video.filename,
      video.originalname,
      video.mimetype,
      video.size,
      createVideoDto,
    );

    return {
      message: 'Video uploaded successfully',
      video: createdVideo,
    };
  }

  @Get('get-videos')
  @UseGuards(AuthGuard('jwt'))
  async getVideos(@Req() req: Request) {
    const userId = (req as any).user?.id;
    const videos = await this.videoService.getUserVideos(userId);
    return videos;
  }

  @Get(':id/stream')
  @UseGuards(AuthGuard('jwt'))
  async getStream(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: string,
  ) {
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
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException('File not found or unreadable');
    }
  }
}

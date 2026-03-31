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
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { VideoFileValidator } from './validators/video-file.validator';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dtos/create-video.dto';
import { FilterVideoDto } from './dtos/filter-video.dto';
import { SearchVideoDto } from './dtos/search-video.dto';
import { SortVideoDto } from './dtos/sort-video.dto';
import { AuthenticatedRequest } from '../../types/authenticated-request';

@Controller('videos')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Get()
  async getPublicVideos() {
    return this.videoService.getPublicVideos();
  }

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
    file: Express.Multer.File,
    @Body() body: any,
  ) {
    const userId = (req as any).user?.id;
    const dto: CreateVideoDto = {
      title: body.title,
      description: body.description,
      categoryId: body.categoryId,
      ageRatingId: body.ageRatingId,
      tags: body.tags,
      isPublic: body.isPublic === 'true',
    };

    return this.videoService.uploadVideo(
      userId,
      file.filename,
      file.originalname,
      file.mimetype,
      file.size,
      dto,
    );
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
      throw new NotFoundException('File not found or unreadable');
    }
  }

  @Get('filter')
  async getFilteredVideos(@Query() dto: FilterVideoDto) {
    return this.videoService.getFilteredVideos(dto);
  }

  @Get('search')
  async searchByTitle(@Query() dto: SearchVideoDto) {
    return this.videoService.searchByTitle(dto);
  }

  @Get('sorted')
  async getSortedVideos(@Query() dto: SortVideoDto) {
    return this.videoService.getSortedVideos(dto);
  }

  @Post(':id/favorite')
  @UseGuards(AuthGuard('jwt'))
  async addToFavorites(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    const userId = req.user?.id;
    return this.videoService.addFavorites(userId, id);
  }

  @Delete(':id/favorite')
  @UseGuards(AuthGuard('jwt'))
  async removeToFavorites(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    const userId = req.user?.id;
    return this.videoService.removeFavorites(userId, id);
  }

  @Get('favorites')
  @UseGuards(AuthGuard('jwt'))
  async getFavoritesVideos(@Req() req: AuthenticatedRequest) {
    const userId = req.user?.id;
    return this.videoService.getFavoriteVideos(userId);
  }

  @Get(':id')
  async getVideoById(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    const userId = req.user?.id;
    return this.videoService.getVideoById(id, userId);
  }

  @Post(':id/like')
  @UseGuards(AuthGuard('jwt'))
  async addLike(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    const userId = req.user?.id;
    await this.videoService.addLikeVideo(userId, id);
  }

  @Delete(':id/like')
  @UseGuards(AuthGuard('jwt'))
  async removeLike(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    const userId = req.user?.id;
    await this.videoService.removeLikeVideo(userId, id);
  }

  @Get(':id/likes')
  async getLikeCount(@Param('id') id: string) {
    const count = await this.videoService.getLikeCount(id);
    return { count };
  }
  @Get(':id/like/status')
  @UseGuards(AuthGuard('jwt'))
  async getLikeStatus(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    const userId = req.user?.id;
    const isLiked = await this.videoService.checkUserLike(userId, id);
    return { isLiked };
  }
}

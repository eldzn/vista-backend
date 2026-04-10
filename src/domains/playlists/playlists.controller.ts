import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePlaylistDto } from './dtos/create-playlist.dto';
import { AddVideoToPlaylistDto } from './dtos/add-video-to-playlist.dto';
import { AuthenticatedRequest } from '../../types/authenticated-request';
import { PlaylistsService } from './playlists.service';
import { SortPlaylistVideosDto } from './dtos/sort-playlists-video.dto';

@Controller('playlists')
export class PlaylistController {
  constructor(private playlistService: PlaylistsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createPlaylist(
    @Req() req: AuthenticatedRequest,
    @Body() dto: CreatePlaylistDto,
  ) {
    const userId = req.user?.id;
    return this.playlistService.createPlaylist(userId, dto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getUserPlaylists(
    @Req() req: AuthenticatedRequest,
    @Query() sortDto: SortPlaylistVideosDto,
  ) {
    const userId = req.user?.id;
    return this.playlistService.getUserPlaylist(userId, sortDto.sortBy);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getPlaylistById(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Query() sortDto: SortPlaylistVideosDto,
  ) {
    const userId = req.user?.id;
    return this.playlistService.getPlaylistById(id, userId, sortDto.sortBy);
  }

  @Post(':id/videos')
  @UseGuards(AuthGuard('jwt'))
  async addVideoToPlaylist(
    @Req() req: AuthenticatedRequest,
    @Param('id') playlistId: string,
    @Body() dto: AddVideoToPlaylistDto,
  ) {
    const userId = req.user?.id;
    return this.playlistService.addVideoToPlaylist(
      userId,
      playlistId,
      dto.videoId,
    );
  }

  @Delete(':id/videos/:videoId')
  @UseGuards(AuthGuard('jwt'))
  async removeVideoFromPlaylist(
    @Req() req: AuthenticatedRequest,
    @Param('id') playlistId: string,
    @Param('videoId') videoId: string,
  ) {
    const userId = req.user?.id;
    return this.playlistService.removeVideoFromPlaylist(
      userId,
      playlistId,
      videoId,
    );
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deletePlaylist(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    const userId = req.user?.id;
    return this.playlistService.deletePlaylist(userId, id);
  }
}

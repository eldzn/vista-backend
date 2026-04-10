import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreatePlaylistDto } from './dtos/create-playlist.dto';

@Injectable()
export class PlaylistsService {
  constructor(private prisma: PrismaService) {}

  async createPlaylist(userId: string, dto: CreatePlaylistDto) {
    return this.prisma.playList.create({
      data: {
        title: dto.title,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            nickname: true,
          },
        },
        _count: {
          select: {
            playListVideos: true,
          },
        },
      },
    });
  }

  async getPlaylistById(
    playlistId: string,
    userId: string,
    sortBy?: 'new' | 'old',
  ) {
    const playlist = await this.prisma.playList.findUnique({
      where: { id: playlistId },
      include: {
        user: {
          select: {
            id: true,
            nickname: true,
            avatarUrl: true,
          },
        },
        _count: {
          select: {
            playListVideos: true,
          },
        },
        playListVideos: {
          include: {
            video: {
              include: {
                author: {
                  select: {
                    id: true,
                    nickname: true,
                    avatarUrl: true,
                  },
                },
              },
            },
          },
          orderBy: {
            addedAt: sortBy === 'old' ? 'asc' : 'desc',
          },
        },
      },
    });

    if (!playlist) {
      throw new NotFoundException('Playlist not found');
    }
    if (playlist.userId !== userId) {
      throw new ForbiddenException('You can only access your own playlists');
    }

    return playlist;
  }

  async getUserPlaylist(userId: string, sortBy?: 'new' | 'old') {
    return this.prisma.playList.findMany({
      where: {
        userId,
      },
      include: {
        _count: {
          select: {
            playListVideos: true,
          },
        },
        playListVideos: {
          include: {
            video: {
              include: {
                author: {
                  select: {
                    id: true,
                    nickname: true,
                    avatarUrl: true,
                  },
                },
              },
            },
          },
          orderBy: {
            addedAt: 'desc',
          },
        },
      },
      orderBy: {
        createdAt: sortBy === 'old' ? 'asc' : 'desc',
      },
    });
  }
  async addVideoToPlaylist(
    userId: string,
    playlistId: string,
    videoId: string,
  ) {
    const playlist = await this.prisma.playList.findUnique({
      where: { id: playlistId },
      select: { userId: true },
    });
    if (!playlist) {
      throw new NotFoundException('Playlist not found');
    }
    if (playlist.userId !== userId) {
      throw new ForbiddenException('You can only modify your own playlists');
    }
    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
      select: { id: true },
    });
    if (!video) {
      throw new NotFoundException('Video not found');
    }
    return this.prisma.playListVideo.create({
      data: {
        playlistId,
        videoId,
      },
      include: {
        video: {
          include: {
            author: {
              select: {
                id: true,
                nickname: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    });
  }

  async removeVideoFromPlaylist(
    userId: string,
    playlistId: string,
    videoId: string,
  ) {
    const playlist = await this.prisma.playList.findUnique({
      where: { id: playlistId },
      select: { userId: true },
    });
    if (!playlist) {
      throw new NotFoundException('Playlist not found');
    }
    if (playlist.userId !== userId) {
      throw new ForbiddenException('You can only modify your own playlists');
    }
    return this.prisma.playListVideo.deleteMany({
      where: {
        playlistId,
        videoId,
      },
    });
  }

  async deletePlaylist(userId: string, playlistId: string) {
    const playlist = await this.prisma.playList.findUnique({
      where: { id: playlistId },
      select: { userId: true },
    });
    if (!playlist) {
      throw new NotFoundException('Playlist not found');
    }
    if (playlist.userId !== userId) {
      throw new ForbiddenException('You can only delete your own playlists');
    }
    return this.prisma.playList.delete({
      where: { id: playlistId },
    });
  }
}

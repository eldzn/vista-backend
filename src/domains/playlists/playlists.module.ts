import { Module } from '@nestjs/common';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { PlaylistsService } from './playlists.service';
import { PlaylistController } from './playlists.controller';

@Module({
  controllers: [PlaylistController],
  providers: [PlaylistsService],
  imports: [PrismaModule],
  exports: [PlaylistsService],
})
export class PlaylistsModule {}

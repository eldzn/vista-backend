import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './core/prisma/prisma.module';
import { AuthModule } from './domains/auth/auth.module';
import { TokensModule } from './domains/tokens/token.module';
import { UserModule } from './domains/user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { VideoModule } from './domains/videos/video.module';
import { CommentsModule } from './domains/comments/comment.module';
import { PlaylistsModule } from './domains/playlists/playlists.module';
import { UploadsModule } from './domains/uploads/uploads.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    PrismaModule,
    AuthModule,
    TokensModule,
    UserModule,
    VideoModule,
    CommentsModule,
    UploadsModule,
    PlaylistsModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    MulterModule.register({
      dest: './uploads/videos'
    })
  ],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
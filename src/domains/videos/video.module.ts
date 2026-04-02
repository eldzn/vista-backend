import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';
import { UserModule } from '../user/user.module';
import { UploadsModule } from '../uploads/uploads.module';

@Module({
  imports: [
    UserModule,
    UploadsModule
  ],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
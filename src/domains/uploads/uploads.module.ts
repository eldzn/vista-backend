import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, ConfigService],
  exports: [UploadsService]
})
export class UploadsModule {}

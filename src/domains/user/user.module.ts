import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { UploadsModule } from '../uploads/uploads.module';

@Module({
  imports: [
    PrismaModule,
    UploadsModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

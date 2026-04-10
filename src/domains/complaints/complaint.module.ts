import { Module } from '@nestjs/common';
import { ComplaintController } from './complaint.controller';
import { ComplaintService } from './complaint.service';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
],
controllers: [ComplaintController],
  providers: [ComplaintService],
exports: [ComplaintService],
})
export class ComplaintModule {}
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TokensModule } from '../../tokens/tokens.module';
import { PrismaModule } from '../../core/prisma/prisma.module';

@Module({
  imports: [PrismaModule, TokensModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}

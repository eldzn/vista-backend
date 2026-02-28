import { Module } from '@nestjs/common';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { TokensModule } from '../../tokens/tokens.module';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [PrismaModule, TokensModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokensService } from './tokens.service';
import { AccessStrategy } from './strategies/access.strategy';
import { RefreshStrategy } from './strategies/refresh.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RefreshGuard } from './guards/refresh.guard';

@Module({
  imports: [
    JwtModule.register({}),
  ],
  providers: [
    TokensService,
    AccessStrategy,
    RefreshStrategy,
    JwtAuthGuard,
    RefreshGuard,
  ],
  exports: [TokensService, JwtAuthGuard, RefreshGuard],
})
export class TokensModule {}

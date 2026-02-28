import { StaticModule } from './core/static/static.module';
import { TokensModule } from './tokens/tokens.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './core/prisma/prisma.module';
import { AuthModule } from './domains/auth/auth.module';
import { UserModule } from './domains/users/users.module';
import { AvatarModule } from './domains/avatars/avatar.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PrismaModule,
    TokensModule,
    AuthModule,
    UserModule,
    AvatarModule,
    StaticModule,
  ],
})
export class AppModule {}

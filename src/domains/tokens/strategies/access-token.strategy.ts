import { TokenPayload } from '../token.service';
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { PrismaService } from '../../../core/prisma/prisma.service';

type Cookies = { accessToken?: string; };

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request): string | null => {
          if (!request || !request.cookies) return null;
          const cookies = request.cookies as { accessToken?: string };
          return cookies.accessToken ?? null;
        },
      ]),
      secretOrKey: configService.getOrThrow<string>('JWT_ACCESS_SECRET'),
    });
  }
  async validate(payload: TokenPayload) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (user.role === 'BLOCKED') {
      throw new ForbiddenException('User is blocked');
    }
    return {
      id: user.id,
      email: user.email,
      role: user.role,
    };
  }
}

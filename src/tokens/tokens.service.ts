import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './dtos/token-payload.dto';
import { Response } from 'express';

@Injectable()
export class TokensService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async generateAccessToken(payload: TokenPayload) {
    return this.jwtService.signAsync(payload, {
      secret: this.configService.getOrThrow('JWT_ACCESS_SECRET'),
      expiresIn: this.configService.getOrThrow('JWT_ACCESS_EXPIRES_IN'),
    });
  }

  async generateRefreshToken(payload: TokenPayload, rememberMe: boolean) {
    const expiresIn = rememberMe
      ? this.configService.getOrThrow('JWT_REFRESH_REMEMBER_ME_EXPIRES_IN')
      : this.configService.getOrThrow('JWT_REFRESH_EXPIRES_IN');

    return this.jwtService.signAsync(payload, {
      secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
      expiresIn,
    });
  }

  async generateTokenPair(payload: TokenPayload, rememberMe: boolean) {
    const [accessToken, refreshToken] = await Promise.all([
      this.generateAccessToken(payload),
      this.generateRefreshToken(payload, rememberMe),
    ]);
    return { accessToken, refreshToken };
  }

  async validateRefreshToken(token: string) {
    return this.jwtService.verifyAsync(token, {
      secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
    });
  }

  setCookies(res: Response, accessToken: string, refreshToken: string) {
    const isSecure = this.configService.get('COOKIE_SECURE') === 'true';
    const sameSite = (this.configService.get('COOKIE_SAME_SITE') || 'lax') as
      | 'lax'
      | 'strict'
      | 'none';

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: isSecure,
      sameSite,
      maxAge: 15 * 60 * 1000,
      path: '/',
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: isSecure,
      sameSite,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/',
    });
  }

  clearCookies(res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
  }
}

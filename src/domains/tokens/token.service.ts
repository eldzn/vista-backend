import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export type TokenPayload = {
  sub: string;
  email: string;
  role: string;
};

@Injectable()
export class TokenService {
  constructor(
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  generateAccessToken(payload: TokenPayload): string {
    return this.jwt.sign(payload, {
      secret: this.config.get<string>('JWT_ACCESS_SECRET'),
      expiresIn: this.config.get<string>('JWT_ACCESS_EXPIRES_IN'),
    } as any);
  }

  generateRefreshToken(payload: TokenPayload, rememberMe: boolean): string {
    const expiresIn = rememberMe
      ? this.config.getOrThrow<string>('JWT_REFRESH_REMEMBER_ME_EXPIRES_IN')
      : this.config.getOrThrow<string>('JWT_REFRESH_EXPIRES_IN');

    return this.jwt.sign(payload, {
      secret: this.config.getOrThrow<string>('JWT_REFRESH_SECRET'),
      expiresIn,
    } as any);
  }

  verifyRefreshToken(token: string): TokenPayload | null {
    try {
      return this.jwt.verify<TokenPayload>(token, {
        secret: this.config.getOrThrow<string>('JWT_REFRESH_SECRET'),
      });
    } catch {
      return null;
    }
  }

  generateTokenPair(payload: TokenPayload, rememberMe: boolean) {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload, rememberMe),
    };
  }
}

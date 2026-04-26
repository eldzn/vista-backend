import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { TokenPayload, TokenService } from '../tokens/token.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private token: TokenService,
  ) {}

  async signUp(dto: SignUpDto) {
    const existingNickname = await this.prisma.user.findFirst({
      where: { nickname: dto.nickname },
    });

    if (existingNickname) {
      throw new BadRequestException('Nickname already exists');
    }

    const existingEmail = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });

    if (existingEmail) {
      throw new BadRequestException('Email already exists');
    }

    if (dto.password !== dto.passwordConfirm) {
      throw new BadRequestException('Password does not match');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        nickname: dto.nickname,
        email: dto.email,
        passwordHash,
        role: 'USER',
      },
    });

    return {
      message: 'Sign up successfully!',
      user,
    };
  }

  async signIn(dto: SignInDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: dto.email }, { backupEmail: dto.email }],
      },
    });

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload: TokenPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const tokens = this.token.generateTokenPair(
      payload,
      dto.rememberMe ?? false,
    );

    return {
      message: 'Sign in successfully!',
      ...tokens,
      user,
    };
  }

  async refresh(refreshToken: string, rememberMe: boolean) {
    const payload = this.token.verifyRefreshToken(refreshToken);

    if (!payload) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const tokens = this.token.generateTokenPair(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
      },
      rememberMe,
    );

    return {
      message: 'Tokens refreshed successfully!',
      ...tokens,
      user,
    };
  }

  signOut(_userId: string) {
    return { message: 'Signed out successfully!' };
  }
}

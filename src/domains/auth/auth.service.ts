import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../core/prisma/prisma.service';
import { TokensService } from '../../tokens/tokens.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private tokensService: TokensService,
  ) {}

  async register(dto: RegisterDto) {
    if (dto.password !== dto.confirmPassword) {
      throw new BadRequestException('Пароли не совпадают');
    }

    const exists = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: dto.email }, { nickname: dto.nickname }],
      },
    });
    if (exists) {
      throw new ConflictException(
        'Пользователь с таким email или ником уже существует',
      );
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        nickname: dto.nickname,
        passwordHash,
        about: dto.about,
        birthDate: dto.birthDate,
      },
    });

    const tokens = await this.tokensService.generateTokenPair(
      { sub: user.id },
      dto.rememberMe ?? false,
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        about: user.about,
        birthDate: user.birthDate,
      },
      tokens,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    const tokens = await this.tokensService.generateTokenPair(
      { sub: user.id },
      dto.rememberMe ?? false,
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        about: user.about,
        birthDate: user.birthDate,
      },
      tokens,
    };
  }

  async refreshTokens(userId: string) {
    return this.tokensService.generateTokenPair({ sub: userId }, false);
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        nickname: true,
        about: true,
        birthDate: true,
        avatar: true,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }
    return user;
  }
}

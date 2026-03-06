import { BadRequestException, ConflictException, Injectable, } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { SignUpDto } from './dtos/sign-up.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(dto: SignUpDto) {
    const existingNickname = await this.prisma.user.findFirst({
      where: {
        nickname: dto.nickname,
      },
    });

    if (existingNickname) {
      throw new BadRequestException('Nickname already exists');
    }

    const existingEmail = await this.prisma.user.findFirst({
      where: {
        email: dto.email,
      },
    });

    if (existingEmail) {
      throw new BadRequestException('Email already exists');
    }

    if (dto.password !== dto.passwordConfirm) {
      throw new BadRequestException('Password does not match');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          nickname: dto.nickname,
          email: dto.email,
          passwordHash,
        },
      });

      const { id, nickname, email, about, birthDate, createdAt, updatedAt } = user

      return {
        message: 'Sign up successfully!',
        user: { id, nickname, email, about, birthDate, createdAt, updatedAt },
      };
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}

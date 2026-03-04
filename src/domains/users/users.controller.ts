import {
  Controller,
  Get,
  UseGuards,
  Req,
  UnauthorizedException,
  Patch,
  Body, Post,
} from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './users.service';
import { JwtAuthGuard } from '../../tokens/guards/jwt-auth.guard';
import { UpdateProfileDto } from '../auth/dtos/update-profile.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: Request) {
    const userId = (req as any).user?.userId;
    if (!userId) throw new UnauthorizedException('Не авторизован');
    return this.userService.getProfile(userId);
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard)
  async updateProfile(@Body() dto: UpdateProfileDto, @Req() req: Request) {
    const userId = (req as any).user?.userId;
    if (!userId) throw new UnauthorizedException('Не авторизован');

    return this.userService.updateProfile(userId, dto);
  }

  @Patch('change-password')
  @UseGuards(JwtAuthGuard)
  async changePassword(@Body() dto: ChangePasswordDto, @Req() req: Request) {
    const userId = (req as any).user?.userId;
    if (!userId) throw new UnauthorizedException('Не авторизован')

    return this.userService.changePassword(userId, dto);
  }
}

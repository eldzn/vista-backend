import {
  Controller,
  Get,
  UseGuards,
  Patch,
  Body,
} from '@nestjs/common';
import { UserService } from './users.service';
import { JwtAuthGuard } from '../../tokens/guards/jwt-auth.guard';
import { UpdateProfileDto } from '../auth/dtos/update-profile.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { CurrentUser, JwtPayload } from '../../common/decorators/current-user.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@CurrentUser() user: JwtPayload) {
    return this.userService.getProfile(user.sub);
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard)
  async updateProfile(@Body() dto: UpdateProfileDto, @CurrentUser('sub') userId: string) {
    return this.userService.updateProfile(userId, dto);
  }

  @Patch('change-password')
  @UseGuards(JwtAuthGuard)
  async changePassword(@Body() dto: ChangePasswordDto, @CurrentUser('sub') userId: string) {
    return this.userService.changePassword(userId, dto);
  }

  @Get('last-password-change')
  @UseGuards(JwtAuthGuard)
  async getLastChangePassword(@CurrentUser('sub') userId: string) {
    const date = await this.userService.getLastPasswordChange(userId)
    return { lastChange: date }
  }
}

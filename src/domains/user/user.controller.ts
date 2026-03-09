/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Get, Patch, Req,  UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async getMe(@Req() req: Request) {
    const userId = (req as any).user?.id;

    const user = await this.userService.getDataUser(userId);
    return { message: 'User retrieved', user };
  }

  @Patch('me')
  @UseGuards(AuthGuard('jwt'))
  async updateMe(@Req() req: Request, @Body() dto: UpdateUserDto) {
    const userId = (req as any).user?.id;

    const user = await this.userService.updateDataUser(userId, dto);
    return { message: 'User updated', user };
  }
}

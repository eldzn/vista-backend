import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../types/roles-decorator';
import { GetDayStatsDto } from './dtos/get-day-stats.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('users')
  @UseGuards(AuthGuard('jwt'))
  @Roles('ADMIN')
  async getAllUsers() {
    const users = await this.adminService.getAllUsers();
    return {
      message: 'Users retrieved',
      users,
    };
  }

  @Patch('users/:id/remove-role')
  @UseGuards(AuthGuard('jwt'))
  @Roles('ADMIN')
  async removeRole(@Param('id') userId: string) {
    const user = await this.adminService.removeRole(userId);
    return {
      message: 'Role removed',
      user,
    };
  }

  @Patch('users/:id/set-role')
  @UseGuards(AuthGuard('jwt'))
  @Roles('ADMIN')
  async setRole(@Param('id') userId: string) {
    const user = await this.adminService.setRole(userId);
    return {
      message: 'Role updated',
      user,
    };
  }

  @Patch('users/:id/block')
  @UseGuards(AuthGuard('jwt'))
  @Roles('ADMIN', 'MODERATOR')
  async blockUser(@Param('id') userId: string) {
    const user = await this.adminService.blockUser(userId);
    return {
      message: 'User blocked',
      user,
    };
  }

  @Patch('users/:id/unblock')
  @UseGuards(AuthGuard('jwt'))
  @Roles('ADMIN', 'MODERATOR')
  async unblockUser(@Param('id') userId: string) {
    const user = await this.adminService.unblockUser(userId);
    return {
      message: 'User unblocked',
      user,
    };
  }

  @Get('statistics')
  @UseGuards(AuthGuard('jwt'))
  @Roles('ADMIN')
  async getStatistics() {
    const stats = await this.adminService.getStatistics();

    return {
      message: 'Statistics retrieved',
      stats,
    };
  }

  @Post('statistics/day')
  @UseGuards(AuthGuard('jwt'))
  @Roles('ADMIN')
  async getDayStatistics(@Body() dto: GetDayStatsDto) {
    const stats = await this.adminService.getDayStatistics(dto);

    return {
      message: 'Day statistics retrieved',
      stats,
    };
  }
}

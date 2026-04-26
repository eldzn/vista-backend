import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from '../../types/authenticated-request';
import { CreateComplaintsDto } from './dtos/create-complaints.dto';
import { BlockComplaintsDto } from './dtos/block-complaints.dto';
import { Roles } from '../../types/roles-decorator';
import { RolesGuard } from '../tokens/guards/roles.guard';

@Controller('complaints')
export class ComplaintsController {
  constructor(private complaintsService: ComplaintsService) {}

  @Get('hidden')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('MODERATOR', 'ADMIN')
  async getHiddenVideos() {
    return this.complaintsService.getHiddenVideos();
  }

  @Post(':videoId')
  @UseGuards(AuthGuard('jwt'))
  async createComplaint(
    @Req() req: AuthenticatedRequest,
    @Body() dto: CreateComplaintsDto,
    @Param('videoId') videoId: string,
  ) {
    const userId = req.user.id;
    return this.complaintsService.createComplaints(userId, videoId, dto);
  }

  @Post(':videoId/decline')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('MODERATOR', 'ADMIN')
  async declineComplaints(@Param('videoId') videoId: string) {
    return this.complaintsService.declineComplaints(videoId);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('MODERATOR', 'ADMIN')
  async getListComplaints() {
    return this.complaintsService.getListComplaints();
  }

  @Post(':videoId/block')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('MODERATOR', 'ADMIN')
  async blockVideo(
    @Body() dto: BlockComplaintsDto,
    @Param('videoId') videoId: string,
  ) {
    return this.complaintsService.blockVideo(videoId, dto);
  }

  @Post(':videoId/unblock')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('MODERATOR', 'ADMIN')
  async unblockVideo(@Param('videoId') videoId: string) {
    return this.complaintsService.unblockVideo(videoId);
  }
}
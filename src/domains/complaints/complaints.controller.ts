import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from '../../types/authenticated-request';
import { CreateComplaintsDto } from './dtos/create-complaints.dto';
import { BlockComplaintsDto } from './dtos/block-complaints.dto';

@Controller('complaints')
export class ComplaintsController {
  constructor(private complaintsService: ComplaintsService) {}

  @Post(':videoId')
  @UseGuards(AuthGuard('jwt'))
  async createComplaint(@Req() req: AuthenticatedRequest, @Body() dto: CreateComplaintsDto, @Param('videoId') videoId: string) {
    const userId = req?.user.id
    return this.complaintsService.createComplaints(userId, videoId, dto)
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getListComplaints() {
    return this.complaintsService.getListComplaints()
  }

  @Post(':videoId/block')
  @UseGuards(AuthGuard('jwt'))
  async blockVideo(@Body() dto: BlockComplaintsDto, @Param('videoId') videoId: string) {
    return this.complaintsService.blockVideo(videoId, dto)
  }
}
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from '../../types/authenticated-request';
import { CreateComplaintsDto } from './dtos/create-complaints.dto';

@Controller('complaints')
export class ComplaintsController {
  constructor(private complaintsService: ComplaintsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createComplaint(@Req() req: AuthenticatedRequest, @Body() dto: CreateComplaintsDto, videoId: string) {
    const userId = req?.user.id
    return this.complaintsService.createComplaints(userId, videoId, dto)
  }
}
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from '../../types/authenticated-request';
import { CreateComplaintDto } from './dtos/create-complaint.dto';

@Controller('complaints')
export class ComplaintController {
  constructor(private complaintService: ComplaintService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createComplaint(@Req() req: AuthenticatedRequest, @Body() dto: CreateComplaintDto) {
    const userId = req.user?.id
    return this.complaintService.createComplaint(userId, dto)
  }
}
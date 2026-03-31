import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';
import { AuthenticatedRequest } from '../../types/authenticated-request';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createComment(@Req() req: AuthenticatedRequest, @Body() dto: CreateCommentDto) {
    const userId = req.user?.id;
    return this.commentService.createComment(userId, dto);
  }

  @Get('video/:videoId')
  async getComments(@Param('videoId') videoId: string) {
    return this.commentService.getComments(videoId);
  }

  @Get('video/:videoId/count')
  async getCommentCount(@Param('videoId') videoId: string) {
    const count = await this.commentService.getCommentCount(videoId);
    return { count };
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateComment(@Req() req: AuthenticatedRequest, @Param('id') id: string, @Body() dto: UpdateCommentDto) {
    const userId = req.user?.id;
    return this.commentService.updateComment(userId, id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteComment(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    const userId = req.user?.id;
    await this.commentService.deleteComment(userId, id);
    return { message: 'Comment deleted success' };
  }
}
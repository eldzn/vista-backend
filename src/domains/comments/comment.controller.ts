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
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';
import { AuthenticatedRequest } from '../../types/authenticated-request';
import { SortCommentDto } from './dtos/sort-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createComment(
    @Req() req: AuthenticatedRequest,
    @Body() dto: CreateCommentDto,
  ) {
    const userId = req.user?.id;
    return this.commentService.createComment(userId, dto);
  }

  @Get('video/:videoId')
  async getComments(@Param('videoId') videoId: string) {
    return this.commentService.getComments(videoId);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateComment(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() dto: UpdateCommentDto,
  ) {
    const userId = req.user?.id;
    return this.commentService.updateComment(userId, id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteComment(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    const userId = req.user?.id;
    await this.commentService.deleteComment(userId, id);
    return { message: 'Comment deleted success' };
  }

  @Get('video/:videoId/sorted')
  async getSortedComments(
    @Param('videoId') videoId: string,
    @Query() dto: SortCommentDto,
  ) {
    return this.commentService.getSortedComments(videoId, dto);
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateDataUserDto } from './dtos/update-data-user.dto';
import { UpdatePasswordUserDto } from './dtos/update-password-user.dto';
import { UpdateEmailUserDto } from './dtos/update-email.user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageFileValidator } from './validators/image-file.validator';
import { AuthenticatedRequest } from '../../types/authenticated-request';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, private')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getMe(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const userId = (req as any).user?.id;
    const user = await this.userService.getDataUser(userId);
    return { message: 'User retrieved', user };
  }

  @Patch('me')
  @UseGuards(AuthGuard('jwt'))
  async updateMe(@Req() req: Request, @Body() dto: UpdateDataUserDto) {
    const userId = (req as any).user?.id;
    const user = await this.userService.updateDataUser(userId, dto);
    return { message: 'User updated', user };
  }

  @Patch('password')
  @UseGuards(AuthGuard('jwt'))
  async updatePassword(
    @Req() req: Request,
    @Body() dto: UpdatePasswordUserDto,
  ) {
    const userId = (req as any).user?.id;
    const password = await this.userService.updatePasswordUser(userId, dto);
    return { message: 'Password updated', password };
  }

  @Patch('email')
  @UseGuards(AuthGuard('jwt'))
  async updateEmail(@Req() req: Request, @Body() dto: UpdateEmailUserDto) {
    const userId = (req as any).user?.id;
    const email = await this.userService.updateEmailUser(userId, dto);
    return { message: 'Email updated', email };
  }

  @Patch('backup-email')
  @UseGuards(AuthGuard('jwt'))
  async addBackupEmail(
    @Req() req: Request,
    @Body() dto: { backupEmail: string },
  ) {
    const userId = (req as any).user?.id;
    const result = await this.userService.addBackupEmail(
      userId,
      dto.backupEmail,
    );
    return result;
  }

  @Delete('backup-email')
  @UseGuards(AuthGuard('jwt'))
  async removeBackupEmail(@Req() req: Request) {
    const userId = (req as any).user?.id;
    const result = await this.userService.deleteBackupEmail(userId);
    return result;
  }

  @Post('avatar')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('avatar'))
  async uploadAvatar(
    @Req() req: Request,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addValidator(
          new ImageFileValidator({
            fileTypePattern: /^image\/(png|jpeg|gif)$/,
          }),
        )
        .addMaxSizeValidator({
          maxSize: 5 * 1024 * 1024,
        })
        .build({
          errorHttpStatusCode: HttpStatus.BAD_REQUEST,
        }),
    )
    file: Express.Multer.File,
  ) {
    const userId = (req as any).user?.id;
    const updatedUser = await this.userService.updateAvatar(
      userId,
      file.filename,
    );
    const avatarUrl = `http://localhost:3000/uploads/avatars/${file.filename}`;

    return {
      message: 'Avatar uploaded',
      filename: file.filename,
      mimeType: file.mimetype,
      avatarFileName: updatedUser.avatarFileName,
      avatarUrl,
      userId,
    };
  }

  @Delete('avatar')
  @UseGuards(AuthGuard('jwt'))
  async deleteAvatar(@Req() req: Request) {
    const userId = (req as any).user?.id;
    const updateUser = await this.userService.deleteAvatar(userId);
    return { user: updateUser };
  }

  @Post(':id/follow')
  @UseGuards(AuthGuard('jwt'))
  async followUser(@Req() req: AuthenticatedRequest, @Param('id') followingId: string) {
    const followerId = req.user?.id;
    await this.userService.followUser(followerId, followingId);
    return { message: 'Successfully followed' };
  }

  @Delete(':id/follow')
  @UseGuards(AuthGuard('jwt'))
  async unfollowUser(@Req() req: AuthenticatedRequest, @Param('id') followingId: string) {
    const followerId = req.user?.id;
    await this.userService.unfollowUser(followerId, followingId);
    return { message: 'Successfully unfollowed' };
  }

  @Get(':id/followers/count')
  async getFollowersCount(@Param('id') id: string) {
    const count = await this.userService.getFollowersCount(id);
    return { count };
  }

  @Get(':id/following/count')
  async getFollowingCount(@Param('id') id: string) {
    const count = await this.userService.getFollowingCount(id);
    return { count };
  }

  @Get(':id/following/check')
  @UseGuards(AuthGuard('jwt'))
  async checkFollowing(@Req() req: AuthenticatedRequest, @Param('id') followingId: string) {
    const followerId = req.user?.id;
    const isFollowing = await this.userService.isFollowing(followerId, followingId);
    return { isFollowing };
  }

  @Get('popular')
  async getPopularUsers(@Query('limit') limit?: string) {
    const limitNum = limit ? parseInt(limit, 10) : 5;
    const users = await this.userService.getPopularUsers(limitNum);
    return { users };
  }
}

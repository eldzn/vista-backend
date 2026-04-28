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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateDataUserDto } from './dtos/update-data-user.dto';
import { UpdatePasswordUserDto } from './dtos/update-password-user.dto';
import { UpdateEmailUserDto } from './dtos/update-email.user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageFileValidator } from './validators/image-file.validator';
import { AuthenticatedRequest } from '../../types/authenticated-request';
import { memoryStorage } from 'Multer';
import { AddBackupEmailDto } from './dtos/add-backup-email.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, private')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getMe(@Req() req: AuthenticatedRequest) {
    const userId = req.user?.id;
    const user = await this.userService.getDataUser(userId);
    return { message: 'User retrieved', user };
  }

  @Patch('me')
  @UseGuards(AuthGuard('jwt'))
  async updateMe(
    @Req() req: AuthenticatedRequest,
    @Body() dto: UpdateDataUserDto,
  ) {
    const userId = req.user?.id;
    const user = await this.userService.updateDataUser(userId, dto);
    return { message: 'User updated', user };
  }

  @Patch('password')
  @UseGuards(AuthGuard('jwt'))
  async updatePassword(
    @Req() req: AuthenticatedRequest,
    @Body() dto: UpdatePasswordUserDto,
  ) {
    const userId = req.user?.id;
    const password = await this.userService.updatePasswordUser(userId, dto);
    return { message: 'Password updated', password };
  }

  @Patch('email')
  @UseGuards(AuthGuard('jwt'))
  async updateEmail(
    @Req() req: AuthenticatedRequest,
    @Body() dto: UpdateEmailUserDto,
  ) {
    const userId = req.user?.id;
    const email = await this.userService.updateEmailUser(userId, dto);
    return { message: 'Email updated', email };
  }

  @Patch('backup-email')
  @UseGuards(AuthGuard('jwt'))
  async addBackupEmail(
    @Req() req: AuthenticatedRequest,
    @Body() dto: AddBackupEmailDto,
  ) {
    const userId = req.user?.id;
    return await this.userService.addBackupEmail(userId, dto);
  }

  @Delete('backup-email')
  @UseGuards(AuthGuard('jwt'))
  async removeBackupEmail(@Req() req: AuthenticatedRequest) {
    const userId = req.user?.id;
    return await this.userService.deleteBackupEmail(userId);
  }

  @Post('avatar')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('avatar', { storage: memoryStorage() }))
  async uploadAvatar(
    @Req() req: AuthenticatedRequest,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addValidator(
          new ImageFileValidator({
            fileTypePattern: /^image\/(png|jpeg|gif|webp)$/,
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
    const userId = req.user?.id;
    const updatedUser = await this.userService.updateAvatar(userId, file);

    return {
      message: 'Avatar uploaded',
      avatarUrl: updatedUser.avatarUrl,
      avatarFileName: updatedUser.avatarFileName,
      userId,
    };
  }

  @Delete('avatar')
  @UseGuards(AuthGuard('jwt'))
  async deleteAvatar(@Req() req: AuthenticatedRequest) {
    const userId = req.user?.id;
    const updatedUser = await this.userService.deleteAvatar(userId);
    return { user: updatedUser };
  }

  @Post(':id/follow')
  @UseGuards(AuthGuard('jwt'))
  async followUser(
    @Req() req: AuthenticatedRequest,
    @Param('id') followingId: string,
  ) {
    const followerId = req.user?.id;
    await this.userService.followUser(followerId, followingId);
    return { message: 'Successfully followed' };
  }

  @Delete(':id/follow')
  @UseGuards(AuthGuard('jwt'))
  async unfollowUser(
    @Req() req: AuthenticatedRequest,
    @Param('id') followingId: string,
  ) {
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
  async checkFollowing(
    @Req() req: AuthenticatedRequest,
    @Param('id') followingId: string,
  ) {
    const followerId = req.user?.id;
    const isFollowing = await this.userService.isFollowing(
      followerId,
      followingId,
    );
    return { isFollowing };
  }

  @Get('popular')
  async getPopularUsers(@Query('limit') limit?: string) {
    const limitNum = limit ? parseInt(limit, 10) : 5;
    const users = await this.userService.getPopularUsers(limitNum);
    return { users };
  }

  @Get('following')
  @UseGuards(AuthGuard('jwt'))
  async getFollowingUsers(@Req() req: AuthenticatedRequest) {
    const userId = req.user?.id;
    return this.userService.getFollowingUsers(userId);
  }

  @Get(':id/videos')
  async getUserVideos(@Param('id') authorId: string) {
    return this.userService.getUserVideos(authorId);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getById(id);
  }
}
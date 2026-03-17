/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  ParseFilePipeBuilder,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateDataUserDto } from './dtos/update-data-user.dto';
import {UpdatePasswordUserDto} from "./dtos/update-password-user.dto";
import { UpdateEmailUserDto } from './dtos/update-email.user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageFileValidator } from './validators/image-file.validator';

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
    return {
      message: 'Avatar uploaded',
      filename: file.filename,
      mimeType: file.mimetype,
      avatarFileName: updatedUser.avatarFileName,
      userId,
    };
  }
}
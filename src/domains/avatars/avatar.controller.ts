import {
  Controller,
  Post,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Req,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AvatarService } from './avatar.service';
import type { Request } from 'express';
import { JwtAuthGuard } from '../../tokens/guards/jwt-auth.guard';

@Controller('avatar')
export class AvatarController {
  constructor(private avatarService: AvatarService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('avatar'))
  async upload(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    const userId = (req as any).user?.userId;
    if (!userId) throw new UnauthorizedException('Не авторизован');
    if (!file) throw new BadRequestException('Файл не передан');

    return this.avatarService.uploadAvatar(userId, file.path);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Req() req: Request) {
    const userId = (req as any).user?.userId;
    if (!userId) throw new UnauthorizedException('Не авторизован');

    await this.avatarService.deleteAvatar(userId);
    return { message: 'Аватар удалён' };
  }
}

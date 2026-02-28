import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { AvatarController } from './avatar.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { mkdirSync } from 'fs';
import { TokensModule } from '../../tokens/tokens.module';
import { PrismaModule } from '../../core/prisma/prisma.module';

const uploadDir = 'src/uploads/avatars';
mkdirSync(uploadDir, { recursive: true });

@Module({
  imports: [
    PrismaModule,
    TokensModule,
    MulterModule.register({
      limits: { fileSize: 5 * 1024 * 1024 },
      storage: diskStorage({
        destination: uploadDir,
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
      fileFilter: (req, file, cb) => {
        const allowed = /jpeg|jpg|png|webp|gif/;
        const isValid = allowed.test(file.mimetype);
        cb(
          isValid
            ? null
            : new Error('Только изображения (jpg, png, webp, gif)'),
          isValid,
        );
      },
    }),
  ],
  controllers: [AvatarController],
  providers: [AvatarService],
  exports: [AvatarService],
})
export class AvatarModule {}

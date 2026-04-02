import { Injectable } from '@nestjs/common';
import path from 'node:path';
import { Upload } from '@aws-sdk/lib-storage';
import { ConfigService } from '@nestjs/config';
import { s3Client } from '../../utils/s3-client';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UploadsService {
  constructor(private configService: ConfigService) {}
  async uploadFile(
    file: Express.Multer.File,
    folders: string[] = [],
  ) {
    const originalName = file.originalname.split(".")[0]
    const size = file.size
    const mimetype = file.mimetype
    const name = this.generateFileName(file)

    const ext = path.extname(file.originalname);

    const contentType = this.mimeTypeForExtension(ext) ?? file.mimetype;

    const parts = ['uploads', ...folders, this.generateFileName(file)];
    const key = parts.join('/');

    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: this.configService.getOrThrow<string>('MINIO_BUCKET_NAME'),
        Key: key,
        Body: file.buffer,
        ContentType: contentType,
      },
    });
    await upload.done();

    const endpoint = this.configService.getOrThrow<string>('MINIO_ENDPOINT');
    const bucketName =
      this.configService.getOrThrow<string>('MINIO_BUCKET_NAME');
    const url = `${endpoint}/${bucketName}/${key}`
    return {
      originalName,
      name,
      size,
      mimetype,
      url
    };
  }

  private mimeTypeForExtension(ext: string): string | undefined {
    const mimeTypes: Record<string, string> = {
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.webp': 'image/webp',
      '.mp4': 'video/mp4',
      '.xlsx':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      '.pdf': 'application/pdf',
      '.docx':
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      // '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      // '.ppt': 'application/vnd.ms-powerpoint',
      // '.zip': 'application/zip',
      // '.doc': 'application/msword',
      // '.txt': 'text/plain',
    };
    return mimeTypes[ext];
  }

  private generateFileName(file: Express.Multer.File): string {
    const ext = path.extname(file.originalname);
    return `${uuidv4()}${ext}`;
  }
}

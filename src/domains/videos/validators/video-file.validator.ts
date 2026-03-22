import { FileValidator } from '@nestjs/common';

export class VideoFileValidator extends FileValidator<{videoTypePattern: RegExp}> {
  private readonly pattern: RegExp;

  constructor(options: {videoTypePattern: RegExp}) {
    super(options);
    this.pattern = options.videoTypePattern;
  }

  isValid(video?: Express.Multer.File): boolean | Promise<boolean> {
    if (!video || !video.mimetype) {
      return false;
    }

    return this.pattern.test(video.mimetype)
  }

  buildErrorMessage(video: Express.Multer.File): string {
    return `Validation failed (current file type is ${video.mimetype}, expected video/mp4, video/webm or video/quicktime)`;
  }
}
import { FileValidator } from '@nestjs/common'

export class ImageFileValidator extends FileValidator<{
  fileTypePattern: RegExp;
}> {
  private readonly pattern: RegExp;

  constructor(options: { fileTypePattern: RegExp }) {
    super(options);
    this.pattern = options.fileTypePattern;
  }

  isValid(file?: Express.Multer.File): boolean | Promise<boolean> {
    if (!file || !file.mimetype) {
      return false;
    }

    return this.pattern.test(file.mimetype);
  }

  buildErrorMessage(file: Express.Multer.File): string {
    return `Validation failed (current file type is ${file.mimetype}, expected type matching pattern ${this.pattern})`;
  }
}

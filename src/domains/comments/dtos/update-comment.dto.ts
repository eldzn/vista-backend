import { IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(1000)
  text?: string;
}

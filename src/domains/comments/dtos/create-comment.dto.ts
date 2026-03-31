import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1000)
  text: string;

  @IsString()
  @IsNotEmpty()
  videoId: string;
}

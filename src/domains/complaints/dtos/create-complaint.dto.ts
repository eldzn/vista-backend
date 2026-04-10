import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateComplaintDto {
  @IsString()
  @IsNotEmpty()
  videoId: string

  @IsString()
  @MinLength(50)
  @MaxLength(500)
  @IsNotEmpty()
  reason: string
}
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateComplaintsDto {
  @IsString()
  @MinLength(25)
  @MaxLength(250)
  @IsNotEmpty()
  reason: string
}




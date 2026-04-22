import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class BlockComplaintsDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(25)
  @MaxLength(250)
  blockReason: string
}
import { IsString } from 'class-validator';

export class BlockComplaintsDto {
  @IsString()
  blockReason: string
}
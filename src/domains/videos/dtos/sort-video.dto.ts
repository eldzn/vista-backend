import { IsIn, IsOptional } from 'class-validator';

export class SortVideoDto {
  @IsOptional()
  @IsIn(['new', 'old'])
  sortBy?: 'new' | 'old';
}
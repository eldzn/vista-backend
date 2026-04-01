import { IsIn, IsOptional } from 'class-validator';

export class SortCommentDto {
  @IsOptional()
  @IsIn(['new', 'old'])
  sortBy?: 'new' | 'old';
}

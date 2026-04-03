import { IsIn, IsOptional } from 'class-validator';

export class SortPlaylistVideosDto {
  @IsOptional()
  @IsIn(['new', 'old'])
  sortBy?: 'new' | 'old';
}

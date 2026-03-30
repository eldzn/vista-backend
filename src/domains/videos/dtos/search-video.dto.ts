import { IsIn, IsOptional, IsString } from 'class-validator';

export class SearchVideoDto {
  @IsOptional()
  @IsString()
  titleQuery?: string;

  @IsOptional()
  @IsIn(['new', 'old'])
  sortBy?: 'new' | 'old';
}

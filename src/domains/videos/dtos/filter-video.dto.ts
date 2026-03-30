import { IsIn, IsOptional, IsString, IsUUID } from 'class-validator';

export class FilterVideoDto {
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @IsOptional()
  @IsUUID()
  ageRatingId?: string;

  @IsOptional()
  @IsString()
  tagQuery?: string;

  @IsOptional()
  @IsIn(['new', 'old'])
  sortBy?: 'new' | 'old';
}

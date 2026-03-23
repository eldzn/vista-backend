import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateVideoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsOptional()
  @IsUUID()
  categoryId: string;

  @IsNotEmpty()
  @IsUUID()
  ageRatingId: string;

  @IsNotEmpty()
  @IsBoolean()
  isPublic: boolean;
}

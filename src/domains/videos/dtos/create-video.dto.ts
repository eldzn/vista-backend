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
  @MaxLength(50)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;

  @IsNotEmpty()
  @IsUUID()
  ageRatingId: string;

  @IsNotEmpty()
  @IsBoolean()
  isPublic: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  tags?: string;
}

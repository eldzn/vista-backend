import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateDataUserDto {
  @IsNotEmpty({ message: 'Nickname is required' })
  @IsString({ message: 'Nickname is a string' })
  @MinLength(5, { message: 'Nickname must be at least 5 characters long' })
  @MaxLength(20, { message: 'Nickname must be at most 20 characters long' })
  nickname: string;

  @IsOptional()
  @IsString({ message: 'Birth date is a string' })
  birthDate?: string;

  @IsOptional()
  @IsString({ message: 'About is a string' })
  @MaxLength(250)
  about?: string;
}
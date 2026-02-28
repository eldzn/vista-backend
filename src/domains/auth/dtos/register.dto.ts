import {
  IsString,
  IsEmail,
  IsOptional,
  MinLength,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  nickname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  confirmPassword: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  about?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  birthDate?: string;

  @IsBoolean()
  @IsOptional()
  rememberMe?: boolean = false;
}

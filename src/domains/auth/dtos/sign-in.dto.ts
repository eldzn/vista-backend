import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsOptional()
  @IsEmail()
  backupEmail: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password is a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsOptional()
  @IsBoolean()
  rememberMe: boolean;
}
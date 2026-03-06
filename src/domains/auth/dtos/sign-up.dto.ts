import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'Nickname is required' })
  @IsString({ message: 'Nickname is a string' })
  @MinLength(5, { message: 'Nickname must be at least 5 characters long' })
  @MaxLength(20, { message: 'Nickname must be at most 20 characters long' })
  nickname: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password is a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsNotEmpty({ message: 'PasswordConfirm is required' })
  @IsString({ message: 'PasswordConfirm is a string' })
  @MinLength(8, { message: 'PasswordConfirm must be at least 8 characters long' })
  passwordConfirm: string;
}
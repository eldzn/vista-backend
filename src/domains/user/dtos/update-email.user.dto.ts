import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateEmailUserDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  emailNew: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
    emailConfirm: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password is a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
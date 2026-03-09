import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordUserDto {
  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password is a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsNotEmpty({ message: 'PasswordNew is required' })
  @IsString({ message: 'PasswordNew is a string' })
  @MinLength(8, { message: 'PasswordNew must be at least 8 characters long' })
  passwordNew: string;

  @IsNotEmpty({ message: 'PasswordConfirm is required' })
  @IsString({ message: 'PasswordConfirm is a string' })
  @MinLength(8, {
    message: 'PasswordConfirm must be at least 8 characters long',
  })
  passwordConfirm: string;
}
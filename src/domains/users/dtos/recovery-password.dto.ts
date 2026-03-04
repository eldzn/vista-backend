import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RecoveryPasswordDto {
  @IsEmail()
  @IsNotEmpty()
  currentEmail: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  confirmPassword: string;
}
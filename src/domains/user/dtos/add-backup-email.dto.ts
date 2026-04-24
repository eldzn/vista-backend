import { IsEmail, IsNotEmpty } from 'class-validator';

export class AddBackupEmailDto {
  @IsEmail()
  @IsNotEmpty()
  backupEmail: string
}
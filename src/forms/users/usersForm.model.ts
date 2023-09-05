import { IsEmail, IsNotEmpty, IsString, Max } from "class-validator";

export class UsersFormModel {
  @IsNotEmpty()
  @IsString()
  @Max(16)
  nickname: string;

  @IsNotEmpty()
  @IsString()
  @Max(16)
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}

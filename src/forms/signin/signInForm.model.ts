import { IsEmail, IsNotEmpty, IsString, IsBoolean } from "class-validator";

export class SignInFormModel {
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsBoolean()
  rememberMe: boolean;
}

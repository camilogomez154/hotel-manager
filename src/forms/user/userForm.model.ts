import { IsEmail, IsNotEmpty, IsString, IsPhoneNumber } from "class-validator";

export class UserFormModel {
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @IsString()
  phone: string;
}

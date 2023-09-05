import { IsNotEmpty, IsString } from "class-validator";

export class HotelFormModel {
  @IsNotEmpty()
  @IsString()
  name: string;
}

import { IsNotEmpty, IsString } from "class-validator";

export class RoomFormModel {
  @IsNotEmpty()
  @IsString()
  name: string;
}

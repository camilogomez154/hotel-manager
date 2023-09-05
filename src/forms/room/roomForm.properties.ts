import { RoomFormModel } from "./roomForm.model";

export interface RoomFormProperties {
  onSubmit: (data: RoomFormModel) => void;
  buttonText: string;
  name: string;
}

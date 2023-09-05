import { HotelFormModel } from "./hotelForm.model";

export interface HotelFormProperties {
  onSubmit: (data: HotelFormModel) => void;
  buttonText: string;
  name: string;
}

import { UserFormModel } from "./userForm.model";

export interface UserFormProperties {
  onSubmit: (data: UserFormModel) => void;
  buttonText: string;
  name: string;
}

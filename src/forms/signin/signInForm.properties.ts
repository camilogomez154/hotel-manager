import { SignInFormModel } from "./signInForm.model";

export interface SignInFormProperties {
  onSubmit: (data: SignInFormModel) => void;
}

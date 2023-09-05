import { createSupabaseClient } from "../../utilities/supabase";
import { CreateNewUserType } from "./users.properties";

export async function CreateNewUser({
  password,
  phone,
  email,
  ...rest
}: CreateNewUserType) {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    options: { data: rest },
    password,
    email,
    phone,
  });

  if (error) {
    throw error;
  }

  return data;
}

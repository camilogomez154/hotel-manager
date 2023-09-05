import { createSupabaseClient } from "../../utilities/supabase";

export async function CreateNewHotel(name: string, admin: string) {
  const supabase = createSupabaseClient();
  const { error, data, count } = await supabase
    .from("hotel")
    .insert({ name, active: true, status: "NEW", admin })
    .select();

  if (error) throw error;

  return [data, count];
}

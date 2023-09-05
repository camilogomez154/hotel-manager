import { createSupabaseClient } from "../../utilities/supabase";

export async function createNewRoom(name: string, admin: string) {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("room")
    .insert({ name, active: true, status: "UNNASIGNED", admin })
    .select();

  if (error) throw error;

  return data;
}

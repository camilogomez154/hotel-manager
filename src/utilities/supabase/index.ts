import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

  return createClient(supabaseUrl, supabaseKey);
}

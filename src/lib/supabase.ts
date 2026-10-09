console.log("Supabase env diagnostic:", {
  urlPresent: Boolean(import.meta.env.VITE_SUPABASE_URL),
  keyPresent: Boolean(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY),
  mode: import.meta.env.MODE
});
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error("Supabase environment variables are missing.");
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);


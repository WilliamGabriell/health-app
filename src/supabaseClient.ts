import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://brxvxjpyfiaxedoollsj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeHZ4anB5ZmlheGVkb29sbHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MzE0NDMsImV4cCI6MjA1OTMwNzQ0M30.34x9mfmnWMjPiZJwTPIhDTy2Fp4bUoQ8mBp-uO_LrU4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
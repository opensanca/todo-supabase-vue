const { createClient } = supabase;
// SUPABASE
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTYyNTM3NCwiZXhwIjoxOTM1MjAxMzc0fQ.t8S4NG11PShRKWXlce79u9wdI-Z7XjTrGZiEevyiXyw";
const SUPABASE_URL = "https://vizznmgnqrvrjpnotjuw.supabase.co";

supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

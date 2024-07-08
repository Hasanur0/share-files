import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ocjpdeixflntcizjppeb.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9janBkZWl4ZmxudGNpempwcGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5OTY3MjgsImV4cCI6MjAzNDU3MjcyOH0.DX-U9p2bKJNaXHIBGGsx-ja-meTgHpyFrZt6MNBD_6U'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

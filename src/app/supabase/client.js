import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://ipqpkujlnftjevoliduq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcXBrdWpsbmZ0amV2b2xpZHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4OTI3MDgsImV4cCI6MjA2OTQ2ODcwOH0.1SuD-CV5wtTsEnRhLiXUiL8glyihoPQttA-RQQCPL74'; // Public anon key from API settings

export const supabase = createClient(supabaseUrl, supabaseKey);

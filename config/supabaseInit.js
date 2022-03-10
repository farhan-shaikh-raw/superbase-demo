// import { createClient } from '@supabase/supabase-js';
const { createClient } = require('@supabase/supabase-js');

const options = {
    schema: 'public',
    headers: { 'x-my-custom-header': process.env.SUPABASE_PROJECT_NAME },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_KEY, options)

function checkUserIsloggedInOrNot() {
    const user = supabase.auth.user
    if (user) {
        return true;
    } else {
        return false;
    }
}

module.exports = supabase
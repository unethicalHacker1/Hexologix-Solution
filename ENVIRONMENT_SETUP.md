# Environment Setup Guide

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

## Important Notes

1. **Never commit `.env.local` to version control** - it's already in `.gitignore`
2. The `SUPABASE_SERVICE_ROLE_KEY` should NOT have the `NEXT_PUBLIC_` prefix as it's used server-side only
3. The `NEXT_PUBLIC_SUPABASE_URL` can be public as it's just the project URL

## Getting Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the Project URL and Service Role Key
4. Paste them in your `.env.local` file

## Verification

After setting up the environment variables:
1. Run `npm run dev` to start development server
2. Test the contact form to ensure it works
3. Check the browser console for any errors 
# CyberSathi — Supabase Setup

This package contains the CyberSathi frontend, admin panel, Supabase schema, seed data, and shared frontend-safe Supabase configuration.

## 1. Create a Supabase project
Create a project at https://supabase.com/.

## 2. Create the database tables
Open **SQL Editor → New query** in Supabase.
Open `supabase/schema.sql` from this project, copy the entire file, paste it into the SQL Editor, and click **Run**.

## 3. Add demo/verified educational seed data
After the schema runs successfully, open `supabase/seed.sql`, copy the entire file, paste it into a new SQL Editor query, and click **Run** once.

## 4. Configure the frontend
Open `supabase-config.js` and replace the empty values with your Supabase **Project URL** and **publishable/anon key**.

Do NOT put a `service_role` or secret key in this file.

Example:

```js
window.SUPABASE_CONFIG = {
  url: 'https://YOUR-PROJECT.supabase.co',
  anonKey: 'YOUR-PUBLISHABLE-OR-ANON-KEY'
};
```

## 5. Admin account
Create an admin user in Supabase Authentication, then create/update the matching row in `public.profiles` so its `role` is `admin`.

Keep the admin account credentials private. Never place them in the website source code.

## 6. Test
Open `index.html` through a local web server when possible. Submit a volunteer/contact/scam/call form and confirm the row appears in the corresponding Supabase table.

Open `admin.html`, sign in with the configured Supabase Auth account, and verify the dashboard can read the protected counts.

## Important
CyberSathi is a college-project educational prototype, not an official government or law-enforcement portal. For a real cybercrime complaint in India, use the official cybercrime reporting portal and helpline 1930.

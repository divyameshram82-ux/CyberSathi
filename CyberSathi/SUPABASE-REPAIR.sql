-- Run once in Supabase SQL Editor for the existing CyberSathi project.
-- This repairs INSERT permissions without exposing submitted records to public SELECT.

grant usage on schema public to anon, authenticated;
grant insert on public.volunteers, public.contact_messages, public.scam_reports, public.voice_call_requests to anon, authenticated;

alter table public.volunteers enable row level security;
alter table public.contact_messages enable row level security;
alter table public.scam_reports enable row level security;
alter table public.voice_call_requests enable row level security;

drop policy if exists "public volunteer insert" on public.volunteers;
create policy "public volunteer insert" on public.volunteers
for insert to anon, authenticated with check (consent = true);

drop policy if exists "public contact insert" on public.contact_messages;
create policy "public contact insert" on public.contact_messages
for insert to anon, authenticated with check (true);

drop policy if exists "public scam insert" on public.scam_reports;
create policy "public scam insert" on public.scam_reports
for insert to anon, authenticated with check (consent = true);

drop policy if exists "public call insert" on public.voice_call_requests;
create policy "public call insert" on public.voice_call_requests
for insert to anon, authenticated with check (consent = true);

notify pgrst, 'reload schema';

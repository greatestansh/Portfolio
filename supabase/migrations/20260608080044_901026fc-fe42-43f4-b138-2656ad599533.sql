CREATE TABLE public.devlog_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT ON public.devlog_entries TO anon;
GRANT SELECT, INSERT, DELETE ON public.devlog_entries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.devlog_entries TO authenticated;
GRANT ALL ON public.devlog_entries TO service_role;
ALTER TABLE public.devlog_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read devlog entries" ON public.devlog_entries FOR SELECT USING (true);
CREATE POLICY "Anyone can insert devlog entries" ON public.devlog_entries FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can delete devlog entries" ON public.devlog_entries FOR DELETE USING (true);
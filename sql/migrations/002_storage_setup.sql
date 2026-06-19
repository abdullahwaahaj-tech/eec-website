-- Enable Storage
INSERT INTO storage.buckets (id, name, public) 
VALUES ('internship-resumes', 'internship-resumes', true)
ON CONFLICT (id) DO NOTHING;

-- RLS Policy for storage
CREATE POLICY "Enable public access to internship-resumes" ON storage.objects FOR SELECT USING (bucket_id = 'internship-resumes');
CREATE POLICY "Enable insert on internship-resumes" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'internship-resumes');

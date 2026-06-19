-- Extend contact_submissions with admin notes
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS admin_notes TEXT;
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS responded_at TIMESTAMP WITH TIME ZONE;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_internship_applications_status ON internship_applications(status);

-- Add volunteer projects junction table
CREATE TABLE IF NOT EXISTS volunteer_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  volunteer_id UUID REFERENCES volunteers(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  hours_contributed INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(volunteer_id, project_id)
);

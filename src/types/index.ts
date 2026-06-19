export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  status: 'new' | 'read' | 'responded';
}

export interface InternshipApplication {
  id: string;
  name: string;
  email: string;
  country: string;
  education: string;
  position: string;
  motivation: string;
  resume_url: string;
  created_at: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
}

export interface NewsletterSignup {
  id: string;
  email: string;
  created_at: string;
  verified: boolean;
}

export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface Member {
  id: string;
  user_id: string;
  name: string;
  bio: string;
  avatar_url: string;
  joined_date: string;
}

export interface Volunteer {
  id: string;
  user_id: string;
  hours: number;
  projects: string[];
  joined_date: string;
}

export interface Certificate {
  id: string;
  user_id: string;
  course_id: string;
  issued_date: string;
  certificate_url: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  status: 'planning' | 'active' | 'completed';
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
  created_at: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image_url: string;
  author: string;
  created_at: string;
}

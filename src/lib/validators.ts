import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export const internshipSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  country: z.string().min(2, 'Country is required'),
  education: z.string().min(5, 'Education details are required'),
  position: z.string().min(3, 'Position is required'),
  motivation: z.string().min(20, 'Motivation must be at least 20 characters').max(2000),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type InternshipFormData = z.infer<typeof internshipSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;

import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { internshipSchema } from '@/lib/validators';
import { sendInternshipConfirmation, notifyAdmin } from '@/lib/email';
import { validateFileSize, validateFileType } from '@/lib/utils';

const MAX_FILE_SIZE = 5; // MB
const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Extract fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const country = formData.get('country') as string;
    const education = formData.get('education') as string;
    const position = formData.get('position') as string;
    const motivation = formData.get('motivation') as string;

    // Validate with schema
    const validatedData = internshipSchema.parse({
      name,
      email,
      country,
      education,
      position,
      motivation,
    });

    let resumeUrl = null;
    const resume = formData.get('resume') as File | null;

    // Handle resume upload if provided
    if (resume) {
      // Validate file
      if (!validateFileSize(resume, MAX_FILE_SIZE)) {
        return NextResponse.json(
          { error: 'Resume file too large. Max 5MB allowed.' },
          { status: 400 }
        );
      }

      if (!validateFileType(resume, ALLOWED_FILE_TYPES)) {
        return NextResponse.json(
          { error: 'Invalid file type. Please upload PDF, DOC, or DOCX.' },
          { status: 400 }
        );
      }

      // Upload to Supabase Storage
      const fileName = `${Date.now()}-${resume.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('internship-resumes')
        .upload(`resumes/${fileName}`, resume);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('internship-resumes')
        .getPublicUrl(`resumes/${fileName}`);

      resumeUrl = urlData.publicUrl;
    }

    // Store application in Supabase
    const { data, error } = await supabase
      .from('internship_applications')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          country: validatedData.country,
          education: validatedData.education,
          position: validatedData.position,
          motivation: validatedData.motivation,
          resume_url: resumeUrl,
          status: 'pending',
        },
      ])
      .select();

    if (error) throw error;

    // Send confirmation email
    await sendInternshipConfirmation(validatedData.email, validatedData.name);

    // Notify admin
    await notifyAdmin(
      `New Internship Application: ${validatedData.name}`,
      `<p><strong>${validatedData.name}</strong> applied for <strong>${validatedData.position}</strong></p><p>Email: ${validatedData.email}</p><p>Country: ${validatedData.country}</p><p>Education: ${validatedData.education}</p><p>Motivation: ${validatedData.motivation}</p>${resumeUrl ? `<p><a href="${resumeUrl}">View Resume</a></p>` : ''}`
    );

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Internship form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}

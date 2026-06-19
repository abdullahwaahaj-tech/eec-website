import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { contactSchema } from '@/lib/validators';
import { sendContactConfirmation, notifyAdmin } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // Store in Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
          status: 'new',
        },
      ])
      .select();

    if (error) throw error;

    // Send confirmation email
    await sendContactConfirmation(validatedData.email, validatedData.name);

    // Notify admin
    await notifyAdmin(
      `New Contact: ${validatedData.subject}`,
      `<p><strong>${validatedData.name}</strong> (${validatedData.email}) wrote:</p><p>${validatedData.message}</p>`
    );

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

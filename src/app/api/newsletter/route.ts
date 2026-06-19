import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { newsletterSchema } from '@/lib/validators';
import { sendNewsletterWelcome } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = newsletterSchema.parse(body);

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_signups')
      .select('id')
      .eq('email', validatedData.email)
      .single();

    if (existing) {
      return NextResponse.json(
        { message: 'Already subscribed' },
        { status: 200 }
      );
    }

    // Store in Supabase
    const { error } = await supabase
      .from('newsletter_signups')
      .insert([
        {
          email: validatedData.email,
          verified: false,
        },
      ]);

    if (error) throw error;

    // Send welcome email
    await sendNewsletterWelcome(validatedData.email);

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

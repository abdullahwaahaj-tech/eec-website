import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactConfirmation = async (email: string, name: string) => {
  try {
    await resend.emails.send({
      from: 'no-reply@eeccouncil.org',
      to: email,
      subject: 'We received your message - Echoes of Earth Council',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0F5132;">Thank you for reaching out</h1>
          <p>Hi ${name},</p>
          <p>We received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you shortly.</p>
          <p>In the meantime, learn more about our work at <a href="${process.env.NEXT_PUBLIC_SITE_URL}">eeccouncil.org</a></p>
          <p style="color: #666; margin-top: 40px; font-size: 12px;">Echoes of Earth Council | Empowering Humanity. Protecting Nature. Shaping Tomorrow.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send contact confirmation:', error);
    throw error;
  }
};

export const sendInternshipConfirmation = async (email: string, name: string) => {
  try {
    await resend.emails.send({
      from: 'no-reply@eeccouncil.org',
      to: email,
      subject: 'Application Received - Echoes of Earth Council',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0F5132;">Application Received</h1>
          <p>Hi ${name},</p>
          <p>Thank you for applying to Echoes of Earth Council. We've received your application and will review it carefully.</p>
          <p>We'll be in touch within 2-3 weeks with updates on your application status.</p>
          <p style="color: #666; margin-top: 40px; font-size: 12px;">Echoes of Earth Council | Empowering Humanity. Protecting Nature. Shaping Tomorrow.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send internship confirmation:', error);
    throw error;
  }
};

export const sendNewsletterWelcome = async (email: string) => {
  try {
    await resend.emails.send({
      from: 'no-reply@eeccouncil.org',
      to: email,
      subject: 'Welcome to Echoes of Earth Council',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0F5132;">Welcome!</h1>
          <p>You're now subscribed to our newsletter and will receive updates about our work in environmental protection, education, and community development.</p>
          <p>Thank you for joining our global movement.</p>
          <p style="color: #666; margin-top: 40px; font-size: 12px;">Echoes of Earth Council | Empowering Humanity. Protecting Nature. Shaping Tomorrow.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send newsletter welcome:', error);
    throw error;
  }
};

export const notifyAdmin = async (subject: string, content: string) => {
  try {
    await resend.emails.send({
      from: 'no-reply@eeccouncil.org',
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@eeccouncil.org',
      subject: `[EEC Admin] ${subject}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>${subject}</h2>
          ${content}
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    throw error;
  }
};

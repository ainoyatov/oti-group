import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { address, city, state, zipcode, name, email, phone, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <vince@otinvestmentsgroup.com>',
      to: ['info@othomebuyers.com'], // Replace with your actual email
      subject: 'New Client for Home Buyers',
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Client Form Submission</h2>
          <p><strong>Property Address:</strong> ${address}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>ZipCode:</strong> ${zipcode}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, message: 'There was a problem sending your message.' }, { status: 500 });
  }
}
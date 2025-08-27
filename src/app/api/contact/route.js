/* /app/api/contact/route.js */
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force Node runtime (Nodemailer needs Node APIs)
export const runtime = 'nodejs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Secure true for 465, false for 587, but allow SMTP_SECURE override
const resolvedSecure =
  typeof process.env.SMTP_SECURE === 'string'
    ? process.env.SMTP_SECURE === 'true'
    : Number(process.env.SMTP_PORT) === 465;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,               // server72.web-hosting.com
  port: Number(process.env.SMTP_PORT),       // 465 or 587
  secure: resolvedSecure,                    // true for 465
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export async function POST(req) {
  try {
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // 1 — insert (projectType key)
    const { error: dbErr } = await supabase.from('projects').insert([
      { name, email, company, projectType: service, message },
    ]);

    if (dbErr) {
      console.error(dbErr);
      return NextResponse.json({ error: 'DB insert failed' }, { status: 500 });
    }

    // 2 — email notification (aligned with env: MAIL_FROM / MAIL_TO)
    await transporter.sendMail({
      from: process.env.MAIL_FROM || `Hexologix <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,               // use MAIL_TO from .env
      replyTo: email,
      subject: `📬 New inquiry from ${name}`,
      text: `
New enquiry from Hexologix contact form
--------------------------------------
Name:    ${name}
Email:   ${email}
Company: ${company || '-'}
Project: ${service || '-'}
Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/* /app/api/contact/route.js */

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

export async function POST(req) {
  try {
    /* grab “service” from the JSON body */
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    /* 1 — insert, but save it as projectType */
    const { error: dbErr } = await supabase.from('projects').insert([
      { name, email, company, projectType: service, message }  // ← key change
    ]);

    if (dbErr) {
      console.error(dbErr);
      return NextResponse.json({ error: 'DB insert failed' }, { status: 500 });
    }

    /* 2 — email notification (unchanged) */
    await transporter.sendMail({
      from: `"Hexologix Website" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      replyTo: email,
      subject: `📬 New inquiry from ${name}`,
      text: `
New enquiry from Hexologix contact form
--------------------------------------
Name:    ${name}
Email:   ${email}
Company: ${company || '-'}
Project: ${service}
Message:
${message}
      `.trim()
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

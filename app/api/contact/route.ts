import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeUrl(value: string): string | null {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.toString() : null;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const company = (body.company as string) || '';
    const name = (body.name as string) || '';
    const email = (body.email as string) || '';
    const phone = (body.phone as string) || '';
    const industry = (body.industry as string) || '';
    const message = (body.message as string) || '';

    if (!name || !email || !company || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const recipientEmail = process.env.CONTACT_EMAIL || process.env.SMTP_FROM;
    if (!recipientEmail) {
      console.error('[contact] CONTACT_EMAIL not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safePhone = escapeHtml(phone);
    const safeIndustry = escapeHtml(industry);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"WATHIQ Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Contact Form Submission — ${safeName} (${safeCompany})`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;color:#0f172a;">
          <div style="background:#071130;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;font-size:20px;margin:0;">New Contact Form Submission</h1>
            <p style="color:#94a3b8;font-size:13px;margin:4px 0 0;">Received via wathiq.digital/contact</p>
          </div>
          <div style="background:#f8fafc;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 0;color:#64748b;font-size:13px;width:110px;vertical-align:top;font-weight:600;">Full Name</td>
                <td style="padding:10px 0;font-size:14px;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;font-weight:600;">Email</td>
                <td style="padding:10px 0;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;font-weight:600;">Company</td>
                <td style="padding:10px 0;font-size:14px;">${safeCompany}</td>
              </tr>
              ${safePhone ? `<tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;font-weight:600;">Phone</td><td style="padding:10px 0;font-size:14px;">${safePhone}</td></tr>` : ''}
              ${safeIndustry ? `<tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;font-weight:600;">Industry</td><td style="padding:10px 0;font-size:14px;">${safeIndustry}</td></tr>` : ''}
            </table>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
              <p style="font-weight:600;font-size:13px;color:#071130;margin:0 0 8px;">Message</p>
              <p style="color:#475569;font-size:14px;line-height:1.75;margin:0;">${safeMessage}</p>
            </div>
            <p style="color:#94a3b8;font-size:12px;margin:0;">
              <strong style="color:#64748b;">Time:</strong> ${new Date().toISOString()}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact]', err);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

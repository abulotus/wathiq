import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

/** Escape HTML special characters to prevent markup/script injection in the email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Only allow http(s) URLs as link targets; reject javascript:, data:, etc. */
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
    const formData = await req.formData();

    const name     = (formData.get('name')    as string) || '';
    const email    = (formData.get('email')   as string) || '';
    const phone    = (formData.get('phone')   as string) || '';
    const website  = (formData.get('website') as string) || '';
    const message  = (formData.get('message') as string) || '';
    const cv       = formData.get('cv') as File | null;

    if (!name || !email || !cv) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const cvBuffer = Buffer.from(await cv.arrayBuffer());

    // Escape all user-supplied values before embedding them in the HTML email.
    const safeName    = escapeHtml(name);
    const safeEmail   = escapeHtml(email);
    const safePhone   = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
    const safeCvName  = escapeHtml(cv.name);
    const websiteUrl  = website ? safeUrl(website) : null;
    const safeWebsite = websiteUrl ? escapeHtml(websiteUrl) : '';

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:    `"WATHIQ Careers" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to:      'career@wathiq.digital',
      replyTo: email,
      subject: `Job Application — ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;color:#0f172a;">
          <div style="background:#071130;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;font-size:20px;margin:0;">New Job Application</h1>
            <p style="color:#94a3b8;font-size:13px;margin:4px 0 0;">Received via wathiq.digital/careers</p>
          </div>
          <div style="background:#f8fafc;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 0;color:#64748b;font-size:13px;width:110px;vertical-align:top;">Full Name</td>
                <td style="padding:10px 0;font-weight:600;font-size:14px;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Email</td>
                <td style="padding:10px 0;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a></td>
              </tr>
              ${safePhone ? `<tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Phone</td><td style="padding:10px 0;font-size:14px;">${safePhone}</td></tr>` : ''}
              ${safeWebsite ? `<tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Website</td><td style="padding:10px 0;font-size:14px;"><a href="${safeWebsite}" style="color:#2563eb;">${safeWebsite}</a></td></tr>` : ''}
            </table>
            ${safeMessage ? `
              <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
                <p style="font-weight:600;font-size:13px;color:#071130;margin:0 0 8px;">Cover Letter</p>
                <p style="color:#475569;font-size:14px;line-height:1.75;margin:0;">${safeMessage}</p>
              </div>
            ` : ''}
            <p style="color:#94a3b8;font-size:12px;margin:0;">CV attached: <strong style="color:#475569;">${safeCvName}</strong></p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename:    cv.name,
          content:     cvBuffer,
          contentType: cv.type || 'application/octet-stream',
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[apply]', err);
    return NextResponse.json({ error: 'Failed to send application' }, { status: 500 });
  }
}

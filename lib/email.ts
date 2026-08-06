/**
 * Sends mail via Resend's HTTP API instead of raw SMTP sockets.
 *
 * Raw SMTP (port 587/465) is commonly blocked or silently dropped outbound on
 * PaaS hosts (Railway included) for anti-abuse reasons — that shows up as a
 * request that hangs for minutes before failing, not a clean connection error.
 * The HTTP API runs over plain HTTPS/443, which is never blocked, so this is
 * also Resend's own recommended integration path, not a workaround.
 *
 * Reads the API key from RESEND_API_KEY, falling back to SMTP_PASS since an
 * existing Resend SMTP setup already has the API key sitting in that var.
 */
interface SendEmailInput {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  attachments?: { filename: string; content: string }[]; // content = base64
}

export async function sendEmail(input: SendEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY || process.env.SMTP_PASS;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY (or SMTP_PASS) is not configured');
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: input.from,
      to: [input.to],
      reply_to: input.replyTo,
      subject: input.subject,
      html: input.html,
      attachments: input.attachments,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Resend API error ${res.status}: ${body}`);
  }
}

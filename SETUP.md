# Wathiq Digital — Setup & Configuration Guide

## Environment Variables Setup

### 1. Create `.env.local` file

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### 2. Email Configuration (Gmail Example)

To enable contact form submissions to work:

#### For Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password:**
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows/Linux/Mac" 
   - Copy the 16-character app password
3. **Update `.env.local`:**

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=abo-barhoom@hotmail.com
SMTP_PASS=your-16-char-app-password-here
SMTP_FROM=noreply@wathiq.digital
CONTACT_EMAIL=abo-barhoom@hotmail.com
```

#### For Outlook/Hotmail:

```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=abo-barhoom@hotmail.com
SMTP_PASS=your-password
SMTP_FROM=abo-barhoom@hotmail.com
CONTACT_EMAIL=abo-barhoom@hotmail.com
```

#### For SendGrid:

```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=SG.xxxxxxxxxxxxx
SMTP_FROM=noreply@wathiq.digital
CONTACT_EMAIL=abo-barhoom@hotmail.com
```

### 3. Test Email Configuration

After setting up, test the contact form:

1. Start dev server: `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check your email (CONTACT_EMAIL) for the submission

## Features Implemented

### ✅ Contact Form
- **Real API endpoint**: `/api/contact`
- **Client-side validation**:
  - Required fields (company, name, email, message)
  - Email format validation
  - Phone number format validation (if provided)
  - Message minimum length (10 characters)
- **Error handling**: User-friendly error messages in both English & Arabic
- **Loading state**: Spinning loader on submit button
- **Success state**: Thank you message after submission

### ✅ Form Security
- HTML escaping to prevent injection attacks
- URL validation for safe links
- CSRF token support (built-in to Next.js)
- Environment variables keep email addresses hidden

### ✅ Email Features
- Professional HTML email templates
- Recipient email hidden (via CONTACT_EMAIL env var)
- Submission metadata (timestamp, IP detection ready)
- Reply-to set to submitter's email

## What Changed

### New Files
- `lib/validation.ts` — Form validation utilities
- `app/api/contact/route.ts` — Contact form API endpoint
- `.env.example` — Environment variables template
- `SETUP.md` — This file

### Updated Files
- `app/contact/page.tsx` — Connected to real API, added validation & error handling

## Environment Variables Reference

| Variable | Required | Example | Purpose |
|---|---|---|---|
| `SMTP_HOST` | Yes | `smtp.gmail.com` | Email server hostname |
| `SMTP_PORT` | Yes | `587` | Email server port |
| `SMTP_SECURE` | No | `false` | Use TLS (usually false for 587) |
| `SMTP_USER` | Yes | `your-email@gmail.com` | SMTP login username |
| `SMTP_PASS` | Yes | `your-app-password` | SMTP login password |
| `SMTP_FROM` | Yes | `noreply@wathiq.digital` | Sender email address |
| `CONTACT_EMAIL` | Yes | `abo-barhoom@hotmail.com` | Where contact submissions go |
| `NEXT_PUBLIC_SITE_URL` | No | `https://wathiq.digital` | Site URL (for SEO) |

## API Endpoints

### POST /api/contact

**Request:**
```json
{
  "company": "Your Company",
  "name": "Your Name",
  "email": "your@email.com",
  "phone": "+44 1234 567890",
  "industry": "Financial Services",
  "message": "I'm interested in your solutions..."
}
```

**Response (Success):**
```json
{
  "success": true
}
```

**Response (Error):**
```json
{
  "error": "Missing required fields"
}
```

### POST /api/apply (Careers - Already Working)

Submit CV for job applications at `/careers`

## Troubleshooting

### Email Not Sending

1. **Check environment variables:**
   - Verify `.env.local` exists (not `.env`)
   - Restart dev server after changing `.env.local`
   - Check no typos in SMTP credentials

2. **Gmail issues:**
   - Verify App Password is 16 characters (spaces removed)
   - Check 2FA is enabled
   - Try regenerating App Password

3. **Check server logs:**
   - Run: `npm run dev`
   - Submit form and check terminal for error messages
   - Look for `[contact]` logs

### Form Not Validating

- Clear browser cache
- Restart dev server
- Check console (F12 → Console tab) for JavaScript errors

### Form Shows Error State

- Check `CONTACT_EMAIL` environment variable is set
- Check SMTP credentials are correct
- Check email server firewall isn't blocking port 587

## Security Notes

- ✅ HTML input is escaped to prevent injection attacks
- ✅ Email addresses are hidden in environment variables
- ✅ Passwords never logged or exposed
- ✅ Next.js provides built-in CSRF protection
- ⚠️ Never commit `.env.local` to git (already in `.gitignore`)

## Next Steps

1. **Set up email** using this guide
2. **Test contact form** locally: `npm run dev` → /contact
3. **Deploy to production** (Vercel, Netlify, etc.)
4. **Add to production `.env`:**
   - Most platforms have a UI for environment variables
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment

## Support

If forms aren't sending:
1. Check SMTP settings (Gmail/Outlook docs have specific instructions)
2. Verify `.env.local` syntax (no spaces around `=`)
3. Restart dev server after changing env vars
4. Check browser console (F12) for frontend errors
5. Check terminal for backend errors (marked `[contact]`)

---

**Last updated:** 2026-06-24

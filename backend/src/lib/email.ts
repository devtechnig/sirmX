import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM = 'SIRMx <noreply@sirmx.com>',
  FRONTEND_URL = 'https://sirm-x.vercel.app',
  VERIFICATION_URL = 'https://sirm-x.vercel.app/api/verify/', // Optional override: e.g. https://sirmx.onrender.com/api/auth/verify
} = process.env;

/** Returns true if SMTP credentials are fully configured */
const hasSmtp = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

const transporter = hasSmtp
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT ?? 587) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

// Verify SMTP connection on startup (only if configured)
if (transporter) {
  transporter.verify((err) => {
    if (err) {
      console.error('❌ SMTP connection failed:', err.message);
    } else {
      console.log('✅ SMTP ready — emails will be sent via', SMTP_HOST);
    }
  });
}

export async function sendVerificationEmail(to: string, token: string): Promise<void> {
  // Prefer the direct VERIFICATION_URL if provided, otherwise use the frontend proxy
  const verifyUrl = VERIFICATION_URL
    ? `${VERIFICATION_URL}${VERIFICATION_URL.includes('?') ? '&' : '?'}token=${token}`
    : `${FRONTEND_URL}/api/verify?token=${token}`;

  if (!hasSmtp || !transporter) {
    // ── Dev fallback: print a clickable link to the console ──────────────────
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧  [DEV MODE — no SMTP configured]');
    console.log('    Verification link for:', to);
    console.log('    ↳', verifyUrl);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    return;
  }

  await transporter.sendMail({
    from: EMAIL_FROM,
    to,
    subject: 'Verify your SIRMx account',
    html: buildVerificationEmail(verifyUrl),
  });

  console.log(`📬 Verification email sent to ${to}`);
}

function buildVerificationEmail(verifyUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify your SIRMx account</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">

          <!-- Header gradient band -->
          <tr>
            <td style="background:linear-gradient(135deg,#1D6AFF,#6366f1);padding:32px 40px;">
              <img src="${FRONTEND_URL}/logo.png" alt="SIRMx" width="48" style="display:block;margin-bottom:16px;border-radius:10px;" />
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;line-height:1.3;">
                Verify your email address
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#94a3b8;">
                Thanks for signing up to <strong style="color:#e2e8f0;">SIRMx</strong>. 
                Click the button below to verify your email and activate your account. 
                This link expires in <strong style="color:#e2e8f0;">24 hours</strong>.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#1D6AFF;border-radius:12px;">
                    <a href="${verifyUrl}"
                       style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:-0.01em;">
                      Verify Email Address →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="border-top:1px solid rgba(255,255,255,0.08);font-size:0;">&nbsp;</td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:12px;color:#475569;">
                Or copy and paste this URL into your browser:
              </p>
              <p style="margin:0;font-size:12px;color:#1D6AFF;word-break:break-all;">
                ${verifyUrl}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
                If you didn't create a SIRMx account, you can safely ignore this email.
                This message was sent to you because someone signed up with this email address.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

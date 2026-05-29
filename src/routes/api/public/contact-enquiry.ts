import { createFileRoute } from '@tanstack/react-router';
import { WorkerMailer } from 'worker-mailer';
import { z } from 'zod';

const Schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  phone: z.string().min(1).max(50),
  location: z.string().max(200).optional().default(''),
  setup: z.string().max(200).optional().default(''),
  message: z.string().max(5000).optional().default(''),
});

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export const Route = createFileRoute('/api/public/contact-enquiry')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ZOHO_EMAIL = process.env.ZOHO_EMAIL;
        const ZOHO_APP_PASSWORD = process.env.ZOHO_APP_PASSWORD;
        if (!ZOHO_EMAIL || !ZOHO_APP_PASSWORD) {
          return Response.json({ error: 'Email service is not configured' }, { status: 500 });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 });
        }

        const parsed = Schema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 });
        }
        const d = parsed.data;

        const html = `
          <div style="font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a;line-height:1.6">
            <h2 style="color:#0B1426;margin:0 0 16px">New Enquiry from ${escape(d.name)}</h2>
            <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse">
              <tr><td><strong>Name:</strong></td><td>${escape(d.name)}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${escape(d.email)}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${escape(d.phone)}</td></tr>
              <tr><td><strong>Property Location:</strong></td><td>${escape(d.location) || '-'}</td></tr>
              <tr><td><strong>Situation:</strong></td><td>${escape(d.setup) || '-'}</td></tr>
            </table>
            <h3 style="margin:20px 0 8px;color:#0B1426">Message</h3>
            <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px">${escape(d.message) || '-'}</p>
            <hr style="margin:24px 0;border:none;border-top:1px solid #ddd">
            <p style="font-size:12px;color:#888">Sent from abodooproperties.co.uk contact form</p>
          </div>`;

        const text = [
          `New Enquiry from ${d.name}`,
          ``,
          `Name: ${d.name}`,
          `Email: ${d.email}`,
          `Phone: ${d.phone}`,
          `Property Location: ${d.location || '-'}`,
          `Situation: ${d.setup || '-'}`,
          ``,
          `Message:`,
          d.message || '-',
        ].join('\n');

        try {
          const mailer = await WorkerMailer.connect({
            credentials: { username: ZOHO_EMAIL, password: ZOHO_APP_PASSWORD },
            authType: 'login',
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
          });

          await mailer.send({
            from: { name: 'Abodoo Properties Website', email: ZOHO_EMAIL },
            to: { email: 'Info@abodooproperties.co.uk' },
            reply: { name: d.name, email: d.email },
            subject: `New Enquiry from ${d.name}`,
            html,
            text,
          });

          await mailer.close();
          return Response.json({ success: true });
        } catch (err) {
          console.error('Zoho SMTP send failed:', err);
          return Response.json(
            { error: 'Failed to send email', detail: err instanceof Error ? err.message : String(err) },
            { status: 502 },
          );
        }
      },
    },
  },
});

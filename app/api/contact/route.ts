import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // In production: send via nodemailer / Resend / SendGrid
    // For now, log and return success so the form works end-to-end
    console.log('[STRATA Contact]', data);

    // Optional: real email sending
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({ ... });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', issues: err.issues }, { status: 422 });
    }
    console.error('[STRATA Contact Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

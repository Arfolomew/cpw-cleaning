export const dynamic = "force-static";

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, phone, email, address, service, message } = body;

  // Basic validation
  if (!name || !phone || !email || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "CPW Website <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Estimate Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1FC6C7; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Estimate Request</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0;">Clear Point Window Cleaning</p>
          </div>
          <div style="background: #f9f9f9; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #1A1E32; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #444;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #1A1E32;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #444;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #1A1E32;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #444;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #1A1E32;">Address</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #444;">${address || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #1A1E32;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #444;">
                  <span style="background: #1FC6C7; color: white; padding: 3px 10px; border-radius: 20px; font-size: 13px;">${service}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #1A1E32; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #444;">${message || "No additional message"}</td>
              </tr>
            </table>
          </div>
          <div style="background: #1A1E32; padding: 16px; text-align: center;">
            <p style="color: rgba(255,255,255,0.5); margin: 0; font-size: 12px;">
              Sent from cpwcleaning.com | Clear Point Window Cleaning
            </p>
          </div>
        </div>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

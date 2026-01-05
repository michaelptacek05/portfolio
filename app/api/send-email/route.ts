import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, recaptchaToken } = body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: "Chybí serverový klíč" },
        { status: 500 }
      );
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.log("Recaptcha blocked:", recaptchaData);
      return NextResponse.json(
        { success: false, message: "Podezření na robota" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "mptacek005@gmail.com",
      replyTo: email,
      subject: `Nová zpráva z portfolia: ${name}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">Nová zpráva z webu</h2>
          <p><strong>Od:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email odeslán" });
  } catch (error) {
    console.error("Chyba serveru:", error);
    return NextResponse.json(
      { success: false, message: "Chyba při odesílání" },
      { status: 500 }
    );
  }
}

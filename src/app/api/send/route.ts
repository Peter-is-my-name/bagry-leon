import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, location, serviceType, description, termPreset, term } = body;

    if (!name || !phone || !location) {
      return NextResponse.json({ error: "Chybí povinné pole." }, { status: 400 });
    }

    const toEmail = process.env.RESEND_TO_EMAIL;
    if (!toEmail) {
      return NextResponse.json({ error: "Server není správně nastaven." }, { status: 500 });
    }

    const termLabel = term
      ? `Konkrétní datum: ${term}`
      : termPreset === "asap"
      ? "Co nejdříve"
      : termPreset === "2weeks"
      ? "Do 14 dní"
      : termPreset === "month"
      ? "Do měsíce"
      : termPreset === "flexible"
      ? "Flexibilně"
      : termPreset ?? "Neuvedeno";

    const { data, error } = await resend.emails.send({
      from: "Bagry Leon Formulář <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email || undefined,
      subject: `Nová poptávka od ${name} — ${serviceType ?? "Bagry Leon"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9;">
          <div style="background: #0D0F0F; padding: 20px 24px; margin-bottom: 24px;">
            <h1 style="color: #F5C451; font-size: 20px; margin: 0; text-transform: uppercase; letter-spacing: 2px;">
              Bagry Leon — Nová poptávka
            </h1>
          </div>

          <div style="background: #ffffff; border: 1px solid #e0e0e0; padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; width: 40%; font-weight: bold;">Jméno</td>
                <td style="padding: 10px 0; color: #111;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-weight: bold;">Telefon</td>
                <td style="padding: 10px 0; color: #111;"><a href="tel:${phone}" style="color: #D4A017; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-weight: bold;">E-mail</td>
                <td style="padding: 10px 0; color: #111;">${email ? `<a href="mailto:${email}" style="color: #D4A017;">${email}</a>` : "Neuvedeno"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-weight: bold;">Lokalita</td>
                <td style="padding: 10px 0; color: #111;">${location}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-weight: bold;">Typ služby</td>
                <td style="padding: 10px 0; color: #111;">${serviceType ?? "Neuvedeno"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-weight: bold;">Preferovaný termín</td>
                <td style="padding: 10px 0; color: #111;">${termLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-weight: bold; vertical-align: top;">Popis zakázky</td>
                <td style="padding: 10px 0; color: #111; white-space: pre-wrap;">${description || "Neuvedeno"}</td>
              </tr>
            </table>
          </div>

          <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 24px;">
            Odesláno přes formulář na bagryleon.cz
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Chyba při odesílání." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ error: "Interní chyba serveru." }, { status: 500 });
  }
}

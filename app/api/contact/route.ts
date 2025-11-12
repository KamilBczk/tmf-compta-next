import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, company, email, message } = body;
    const now = new Date();
    const formattedDate = now.toLocaleDateString("fr-BE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("La clé API Resend n'est pas configurée");
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "TMF Compta <tmfcompta@kago-group.com>",
      to: [process.env.CONTACT_EMAIL!],
      bcc: ["admin@kago-group.com"],
      subject: "Nouveau message depuis le formulaire de contact",
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Nom:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || "Non spécifié"}</p>
        <p><strong>Entreprise:</strong> ${company || "Non spécifié"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Date: ${formattedDate}</small></p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}

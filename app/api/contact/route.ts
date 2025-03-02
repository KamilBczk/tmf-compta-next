import { NextResponse } from "next/server";

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

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      throw new Error("La clé API Brevo n'est pas configurée");
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "tmfcompta.be - Formulaire de contact",
          email: "tmfcompta@kago-group.com",
        },
        to: [{ email: process.env.CONTACT_EMAIL }],
        bcc: [{ email: "admin@kago-group.com" }],
        subject: "Nouveau message depuis le formulaire de contact",
        templateId: 3,
        params: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
          PHONE: phone,
          COMPANY: company || "Non spécifié",
          EMAIL: email,
          MESSAGE: message,
          MOREINFO: "Date: " + formattedDate,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi du message");
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

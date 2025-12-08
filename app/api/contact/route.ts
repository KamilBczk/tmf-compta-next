import { NextResponse } from "next/server";
import { Resend } from "resend";

// Helper function to escape HTML and prevent XSS
function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validation function
function validateInput(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}): { valid: boolean; error?: string } {
  // Check required fields
  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    return { valid: false, error: "Champs requis manquants" };
  }

  // Validate lengths
  if (data.firstName.length > 100 || data.lastName.length > 100) {
    return { valid: false, error: "Nom trop long" };
  }

  if (data.message.length > 5000) {
    return { valid: false, error: "Message trop long" };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: "Email invalide" };
  }

  return { valid: true };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, company, email, message } = body;

    // Validate input
    const validation = validateInput({
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    });

    if (!validation.valid) {
      return NextResponse.json(
        { message: validation.error },
        { status: 400 }
      );
    }
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

    // Escape all user inputs to prevent XSS
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "");
    const safeCompany = escapeHtml(company || "");
    const safeMessage = escapeHtml(message);

    const { error } = await resend.emails.send({
      from: "TMF Compta <tmfcompta@kago-group.com>",
      to: [process.env.CONTACT_EMAIL!],
      bcc: ["admin@kago-group.com"],
      subject: "Nouveau message depuis le formulaire de contact",
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Prénom:</strong> ${safeFirstName}</p>
        <p><strong>Nom:</strong> ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Téléphone:</strong> ${safePhone || "Non spécifié"}</p>
        <p><strong>Entreprise:</strong> ${safeCompany || "Non spécifié"}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
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

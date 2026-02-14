"use server";

import { redirect } from "next/navigation";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_PATTERN = /(https?:\/\/|www\.)/i;

function toSafeText(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}

async function sendWithResend(options: {
  name: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return "not_configured" as const;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: options.email,
        subject: `Portfolio contact from ${options.name}`,
        text: [
          `Name: ${options.name}`,
          `Email: ${options.email}`,
          "",
          "Message:",
          options.message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return "send_failed" as const;
    }

    return "sent" as const;
  } catch {
    return "send_failed" as const;
  }
}

export async function submitContactForm(formData: FormData) {
  const name = toSafeText(formData.get("name"));
  const email = toSafeText(formData.get("email")).toLowerCase();
  const message = toSafeText(formData.get("message"));
  const company = toSafeText(formData.get("company"));
  const formStartedAt = Number(toSafeText(formData.get("formStartedAt")));

  const isTooFast = Number.isFinite(formStartedAt) && Date.now() - formStartedAt < 1500;
  const hasSuspiciousLink = URL_PATTERN.test(message) && message.length < 40;

  if (company || isTooFast || hasSuspiciousLink) {
    redirect("/contact?status=error&code=spam");
  }

  if (!name || !email || !message) {
    redirect("/contact?status=error&code=missing");
  }

  if (!EMAIL_PATTERN.test(email)) {
    redirect("/contact?status=error&code=email");
  }

  if (message.length < 10 || message.length > 3000) {
    redirect("/contact?status=error&code=message");
  }

  const sendResult = await sendWithResend({ name, email, message });

  if (sendResult === "sent") {
    redirect("/contact?status=sent");
  }

  if (sendResult === "not_configured") {
    redirect("/contact?status=queued");
  }

  redirect("/contact?status=error&code=delivery");
}
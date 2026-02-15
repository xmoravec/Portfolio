"use server";

import { redirect } from "next/navigation";
import { contactMailConfig } from "./config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_PATTERN = /(https?:\/\/|www\.)/i;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

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

  if (!apiKey) {
    return "not_configured" as const;
  }

  const escapedName = escapeHtml(options.name);
  const escapedEmail = escapeHtml(options.email);
  const escapedMessage = escapeHtml(options.message).replaceAll("\n", "<br />");
  const submittedAt = new Date().toISOString();

  const html = `
    <div style="background:#f8fafc;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:#0f172a;color:#ffffff;padding:16px 20px;">
          <h1 style="margin:0;font-size:18px;line-height:1.3;">New website contact submission</h1>
          <p style="margin:8px 0 0;font-size:13px;line-height:1.5;color:#cbd5e1;">You were contacted through your personal website contact form.</p>
        </div>
        <div style="padding:20px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;">
            <tbody>
              <tr>
                <td style="width:180px;padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;color:#0f172a;">From Name</td>
                <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#1e293b;">${escapedName}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;color:#0f172a;">From Email</td>
                <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#1e293b;">${escapedEmail}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;color:#0f172a;">Submitted At (UTC)</td>
                <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#1e293b;">${submittedAt}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;color:#0f172a;vertical-align:top;">Message</td>
                <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#1e293b;line-height:1.6;">${escapedMessage}</td>
              </tr>
            </tbody>
          </table>
          <p style="margin:14px 0 0;font-size:12px;line-height:1.5;color:#64748b;">Tip: You can reply directly to this email and the response will go to the sender via the configured reply-to address.</p>
        </div>
      </div>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactMailConfig.fromEmail,
        to: [contactMailConfig.toEmail],
        reply_to: options.email,
        subject: `Portfolio contact from ${options.name}`,
        text: [
          `Name: ${options.name}`,
          `Email: ${options.email}`,
          `Submitted At (UTC): ${submittedAt}`,
          "",
          "Message:",
          options.message,
        ].join("\n"),
        html,
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
  const formStartedAt = Number.parseInt(toSafeText(formData.get("formStartedAt")), 10);

  const isTooFast = Number.isFinite(formStartedAt) && formStartedAt > 0 && Date.now() - formStartedAt < 1500;
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
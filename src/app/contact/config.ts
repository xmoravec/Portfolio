const DEFAULT_TO_EMAIL = "trane128@gmail.com";
const DEFAULT_FROM_EMAIL = "XMoravec Contact <contact@xmoravec.com>";

export const contactMailConfig = {
  toEmail: process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO_EMAIL,
  fromEmail: process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL,
};

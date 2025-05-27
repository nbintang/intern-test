import "server-only";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
interface MailProps {
  to: string;
  subject: string;
  text: string;
}

const transportOptions: SMTPTransport.Options = {
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};
async function sendEmail({ to, subject, text }: MailProps): Promise<void> {
  try {
    const transporter = await nodemailer.createTransport(transportOptions);
    await transporter.sendMail({
      from: transportOptions.auth?.user || "",
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

export default sendEmail;

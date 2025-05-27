"use server";
import sendEmail from "@/lib/mail";
import * as crypto from "crypto";
import * as z from "zod";
const form = z.object({ email: z.string().email() });
const otp = () => crypto.randomInt(100000, 999999).toString();
type ExpectedOutput = {
  success: boolean;
  data?: {
    message: string;
    otpCode: string;
  };
  error?: string;
};
export default async function loginAction(
  _: any,
  formData: FormData
): Promise<ExpectedOutput> {
  const parsedData = form.safeParse(Object.fromEntries(formData));
  if (!parsedData.success) {
    const error =
      parsedData.error.flatten().fieldErrors.email?.[0] || "Invalid email format";
    return {
      success: false,
      error,
    };
  }
  const userEmail = parsedData.data.email;
  const otpCode = otp();
  await sendEmail({
    to: userEmail,
    subject: "Your One Time Password Code",
    text: `Your OTP Code is: ${otpCode}. Use it to log in.`,
  });
  return {
    success: true,
    data: {
      message: "OTP sent successfully. Please check your email.",
      otpCode,
    },
  };
}

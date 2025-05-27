"use server";
export default async function otpAction(
  prevData: any,
  formData: FormData
): Promise<{ success?: boolean; error?: string; message?: string }> {
  const otp = formData.get("otp") as string;
  if (!otp || otp.length !== 6) {
    return { error: "Invalid OTP. Please enter a valid 6-digit OTP." };
  }
  console.log("Received OTP:", otp);
  // If OTP is valid, proceed with the next steps (e.g., redirecting to a dashboard)
  return { success: true, message: "OTP verified successfully!" };
}

"use client";
import otpAction from "@/action/otpAction";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useActionState } from "react";
import { Label } from "../ui/label";
import useGetStoredOtp from "@/hooks/useGetOtp";
import { Button } from "../ui/button";

export function OtpForm() {
  const [state, formAction, isPending] = useActionState(otpAction, null);
  const { otp } = useGetStoredOtp();

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 border rounded-xl p-3"
    >
      <Label className="text-2xl  font-bold text-secondary">Enter OTP</Label>
      <p className="text-sm text-muted-foreground mb-4">Enter your OTP</p>
      <InputOTP maxLength={6}>
        <InputOTPGroup className="text-input">
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator className="text-input" />
        <InputOTPGroup className="text-input">
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button type="submit" variant={"secondary"} disabled={isPending}>
        Submit
      </Button>
    </form>
  );
}

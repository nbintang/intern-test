"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useActionState, useEffect } from "react";
import loginAction from "@/action/loginAction";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      localStorage.setItem("otp-email", state.data?.otpCode || "");
      router.push("/otp");
    }
  }, [state, router]);
  return (
    <form action={formAction} noValidate>
      <Label className="text-2xl  font-bold text-secondary">Login</Label>
      <p className="text-sm text-muted-foreground mb-4">
        Enter your email to receive a magic link
      </p>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        className="input text-input"
      />
      <Button
        variant={"secondary"}
        type="submit"
        disabled={isPending}
        className="btn"
      >
        {isPending ? "Sending..." : "Send Magic Link"}
      </Button>
      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
    </form>
  );
}

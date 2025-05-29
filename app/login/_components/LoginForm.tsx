"use client";

import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import useHandleForm from "../_hooks/useHandleForm";
import { cn } from "@/lib/utils";import { useRouter } from "next/navigation";
import useUserProfile from "@/hooks/useUserProfile";
import { useEffect } from 'react';
;

export default function LoginForm({ className }: { className?: string }) {
  const { handleSubmit, handleChange, conditions, formData } = useHandleForm();
  const router = useRouter();
  const { userProfile, loading } = useUserProfile();

  useEffect(() => {
    if (!loading && userProfile) {
      router.push("/start-quiz");
    }
  }, [userProfile, loading, router]);
  return (
    <form
      className={cn("space-y-6   ", className)}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-1 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Welcome!</h2>
        <p className="text-sm text-muted-foreground">
          Please enter your email and password to sign in
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            onChange={handleChange}
            value={formData.email}
            disabled={conditions.loading}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="********"
            onChange={handleChange}
            value={formData.password}
            disabled={conditions.loading}
          />
        </div>
      </div>

      {conditions.error.filter(Boolean).length > 0 && (
        <ul className="space-y-1 ml-3 list-disc">
          {conditions.error.map((msg, index) =>
            msg ? (
              <li key={index} className="text-destructive text-sm">
                {msg}
              </li>
            ) : null
          )}
        </ul>
      )}

      <Button type="submit" className="w-full" disabled={conditions.loading}>
        {conditions.loading ? (
          <div className="w-5 h-5 mx-auto border-2 border-muted-foreground rounded-full animate-spin border-t-transparent" />
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
}

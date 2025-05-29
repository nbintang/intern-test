"use client";

import { Button } from "@/components/ui/button";
import useUserProfile from "@/hooks/useUserProfile";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function StartQuiz() {
  const router = useRouter();
  const { userProfile, loading } = useUserProfile();

  useEffect(() => {
    if (!loading && !userProfile) {
      router.push("/login");
    }
  }, [userProfile, loading, router]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-3xl font-bold">Are you Ready?</h1>
      <Button asChild>
        <Link href={"quiz"}>Take Quiz</Link>
      </Button>
    </>
  );
}

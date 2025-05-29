
import LoginForm from "@/app/login/_components/LoginForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {

  return (
    <main className="grid min-h-screen relative  grid-cols-1  md:grid-cols-2">
      <section className="grid place-items-center ">
        <LoginForm className="mx-auto  min-w-0 max-w-sm" />
      </section>
      <Button
        variant={"link"}
        className="absolute left-2 top-0 text-muted-foreground"
        asChild
      >
        <Link href="/">{"<"}Back to home Page</Link>
      </Button>
      <section className="bg-primary hidden md:inline"></section>
    </main>
  );
}

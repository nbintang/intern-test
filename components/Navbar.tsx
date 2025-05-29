"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import useUserProfile from "@/hooks/useUserProfile";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const { userProfile, loading } = useUserProfile();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("quizProgress");
    router.push("/");
  };
  return (
    <header className="sticky top-0  z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container ml-0 md:ml-3 flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">QuizMaster</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="#features"
            className="transition-colors hover:text-primary"
          >
            Features
          </Link>
        </nav>

        <div className="ml-auto hidden md:flex items-center space-x-4">
          {!loading && (
            <>
              {!userProfile && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href={"/login"}>Login</Link>
                </Button>
              )}
              {userProfile && (
                <>
                  <Button className="justify-start" asChild>
                    <Link href={"/start-quiz"}>Start Quiz</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              )}
            </>
          )}
        </div>

        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <Brain className="h-6 w-6 text-primary" />
                  <span className="font-bold text-xl">QuizMaster</span>
                </Link>

                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Home
                  </Link>

                  <Link
                    href="#features"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Features
                  </Link>
                </nav>

                <div className="flex flex-col space-y-3 pt-6 border-t">
                  {!loading && (
                    <>
                      {!userProfile && (
                        <Button
                          variant="outline"
                          className="justify-start"
                          asChild
                        >
                          <Link href={"/login"}>Login</Link>
                        </Button>
                      )}
                      {userProfile && (
                        <>
                          <Button className="justify-start" asChild>
                            <Link href={"/start-quiz"}>Get Started</Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="justify-start"
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

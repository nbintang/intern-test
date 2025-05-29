"use client";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";

import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";

export default function QuizLanding() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6  ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  🎉 Next Generation of Quiz
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master Any Subject with
                  <span className="text-primary"> Interactive Quizzes</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Take quizzes on any topic. Perfect for students, teachers, and
                  lifelong learners. Track your progress and compete with
                  friends!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href={"/start-quiz"}>Start Quiz Now</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8"
                  asChild
                >
                  <Link href={"#get-started"}> About</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Lets Get Started
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              QuizMaster is the ultimate platform for interactive learning
              through quizzes. Whether you're a student preparing for exams, a
              teacher creating assessments, or someone who loves to learn new
              things, we've got you covered.
            </p>
          </div>
        </div>
        <div className="grid place-items-center mt-4">
          <Button asChild>
            <Link href={"/start-quiz"}>Start Quiz Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

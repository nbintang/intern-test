import React from "react";
import { Card, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import { Brain, Clock, Users } from "lucide-react";
export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose QuizMaster?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the features that make learning fun and effective
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <Brain className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Test Knowledge</CardTitle>
              <CardDescription>
                Challenge yourself with carefully crafted questions across
                various topics.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Real-time Results</CardTitle>
              <CardDescription>
                Get instant feedback and detailed analytics. Track your progress
                and identify areas for improvement.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Compete</CardTitle>
              <CardDescription>
                Compete quizzes with friends, create study groups, and compete
                Rewards
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

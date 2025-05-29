import React from "react";
import { QuizProgressProps } from "../_types/quizTypes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function DetailResult({
  quizProgress,
}: {
  quizProgress: QuizProgressProps;
}) {
  return (
    <section className="space-y-6 ">
      {quizProgress.questions.map((q, index) => {
        const userAnswer = quizProgress.selectedAnswers[index];
        const shuffledAnswers = quizProgress.shuffledAnswers[index];
        return (
          <Card key={index}>
            <CardHeader>
              <h2 className="text-lg font-semibold">{q.question}</h2>
            </CardHeader>
            <CardContent>
              <ul className="mt-2 space-y-1">
                {shuffledAnswers.map((ans, i) => {
                  const isCorrect = ans === q.correct_answer;
                  const isSelected = ans === userAnswer;
                  return (
                    <li
                      key={i}
                      className={`p-2 rounded ${
                        isCorrect
                          ? "bg-green-200"
                          : isSelected
                          ? "bg-red-200"
                          : "bg-gray-100"
                      }`}
                    >
                      {ans}
                    </li>
                  );
                })}
              </ul>
            </CardContent>
            <CardFooter className="flex items-center text-sm gap-x-4 flex-wrap  justify-between">
              <p>
                <strong>Your answer:</strong> {userAnswer}
              </p>
              <p>
                <strong>Correct answer:</strong> {q.correct_answer}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
}

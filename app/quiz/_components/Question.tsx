import React from "react";
import { QuestionProps, QuizProgressProps } from "../_types/quizTypes";
import { Badge } from "@/components/ui/badge";
import { formatTime } from "../_helper/formatTime";

export default function Question({
  quizProgress,
  currentQuestion,
}: {
  quizProgress: QuizProgressProps;
  currentQuestion: QuestionProps;
}) {
  return (
    <>
      <div className="flex justify-between">
        <p className="mb-2 text-black  font-bold">
          Time left: {formatTime(quizProgress.timeLeft)}
        </p>
        <Badge className="text-xs" variant={"secondary"}>
          Question {quizProgress.currentIndex + 1} of{" "}
          {quizProgress.questions.length}
        </Badge>
      </div>
      <div className="">
        <h2 className="text-lg font-semibold mb-4">
          {currentQuestion.question}
        </h2>
      </div>
    </>
  );
}

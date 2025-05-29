"use client";
import React from "react";
import Result from "./Result";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoaderCircleIcon } from "lucide-react";
import useQuiz from "../_hooks/useQuiz";

export default function Quiz() {
  const {
    quizProgress,
    currentQuestion,
    answers,
    loading,
    handleAnswer,
    handleRetakeQuiz,
  } = useQuiz();

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="flex gap-x-2 items-center">
          <p className="text-lg md:text-xl">Loading...</p>
          <LoaderCircleIcon className="animate-spin h-5 w-5 md:w-8 md:h-8" />
        </div>
      </div>
    );
  if (!currentQuestion || quizProgress.shuffledAnswers.length === 0) {
    return (
      <div className="flex justify-center font-bold text-3xl items-center h-64">
        No questions found...
      </div>
    );
  }

  return (
    <>
      {!quizProgress.isQuizDone && (
        <>
          <Card className="w-full max-w-80 md:max-w-96 mx-3 md:mx-0">
            <CardHeader>
              <Question
                currentQuestion={currentQuestion}
                quizProgress={quizProgress}
              />
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <AnswerOptions answers={answers} handleAnswer={handleAnswer} />
              </ul>
            </CardContent>
          </Card>
        </>
      )}
      {quizProgress.isQuizDone && (
        <Result
          handleRetakeQuiz={handleRetakeQuiz}
          quizProgress={quizProgress}
        />
      )}
    </>
  );
}

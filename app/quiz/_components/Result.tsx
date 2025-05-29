import React from "react";
import { QuizProgressProps } from "../_types/quizTypes";
import { Button } from "@/components/ui/button";
import DetailResult from "./DetailResult";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Image from "next/image";
const Result = ({
  quizProgress,
  handleRetakeQuiz,
}: {
  quizProgress: QuizProgressProps;
  handleRetakeQuiz: () => Promise<void>;
}) => {
  const { width, height } = useWindowSize();
  const correctCount = quizProgress.selectedAnswers.filter(
    (ans, idx) => ans === quizProgress.questions[idx]?.correct_answer
  ).length;
  const answeredCount = quizProgress.selectedAnswers.filter(
    (ans) => ans !== ""
  ).length;
  const wrongCount = answeredCount - correctCount;
  const totalQuestions = quizProgress.questions.length;

  return (
    <div className="space-y-4 mx-4 md:mx-0">
        <div className="w-full flex justify-center">
            
      <Image src={"/result.svg"} alt={"result"} className="" width={300} height={300} />
        </div>
      <Confetti className="w-full" height={height} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-700">
            {correctCount}
          </div>
          <div className="text-sm text-green-600">Right Answer</div>
        </div>

        <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{wrongCount}</div>
          <div className="text-sm text-red-600">Wrong Answers</div>
        </div>

        <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">
            {quizProgress.questions.length}
          </div>
          <div className="text-sm text-blue-600">Total Questions</div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-4">
        <div className="text-lg font-semibold text-gray-700 mb-2">
          Result: {correctCount} of {totalQuestions} Questions
        </div>
      </div>
      <DetailResult quizProgress={quizProgress} />
      <Button className="w-full my-4" onClick={handleRetakeQuiz}>
        Retake Quiz
      </Button>
    </div>
  );
};

export default Result;

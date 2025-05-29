import { Button } from "@/components/ui/button";
import React from "react";

const AnswerOptions = ({
  answers,
  handleAnswer,
}: {
  answers: string[];
  handleAnswer: (answer: string) => void;
}) =>
  answers.map((ans, index) => (
    <li key={index}>
      <Button
        onClick={() => handleAnswer(ans)}
        variant={"ghost"}
        className="text-left w-full px-4 py-2 rounded"
      >
        {ans}
      </Button>
    </li>
  ));

export default AnswerOptions;

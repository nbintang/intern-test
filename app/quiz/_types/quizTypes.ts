export type QuestionProps = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export type QuizAPIResponse = {
  response_code: number;
  results: QuestionProps[];
};
export  type QuizProgressProps = {
  questions: QuestionProps[];
  currentIndex: number;
  selectedAnswers: string[];
  timeLeft: number;
  isQuizDone: boolean;
  shuffledAnswers: string[][];
};
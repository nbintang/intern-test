"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { QuizAPIResponse, QuizProgressProps } from "../_types/quizTypes";

const API_URL = `https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`;
const useQuiz = () => {
  const [quizProgress, setQuizProgress] = useState<QuizProgressProps>({
    questions: [],
    currentIndex: 0,
    selectedAnswers: [],
    timeLeft: 300,
    isQuizDone: false,
    shuffledAnswers: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const fetchQuizApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      const data: QuizAPIResponse = response.data;
      const shuffledAnswers = data.results.map((question) => {
        const answers = [
          ...question.incorrect_answers,
          question.correct_answer,
        ];
        return answers.sort(() => Math.random() - 0.5);
      });
      setQuizProgress({
        questions: data.results,
        shuffledAnswers,
        currentIndex: 0,
        selectedAnswers: [""],
        timeLeft: 300,
        isQuizDone: false,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedQuizStatus = localStorage.getItem("quizProgress");
    if (savedQuizStatus) {
      const data: QuizProgressProps = JSON.parse(savedQuizStatus);
      if (data.questions?.length && data.shuffledAnswers?.length) {
        setQuizProgress(data);
        return;
      }
    } else {
      localStorage.removeItem("quizProgress");
    }
    fetchQuizApi();
  }, []);

  useEffect(() => {
    if (quizProgress.questions.length > 0) {
      localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
    }
  }, [quizProgress]);

  useEffect(() => {
    if (quizProgress.isQuizDone || quizProgress.questions.length === 0) return;
    const timer = setInterval(() => {
      setQuizProgress((prev) => {
        if (prev.timeLeft <= 1) {
          return {
            ...prev,
            timeLeft: 0,
            isQuizDone: true,
          };
        }
        return {
          ...prev,
          timeLeft: prev.timeLeft - 1,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [quizProgress.isQuizDone, quizProgress.questions.length]);

  const currentQuestion = quizProgress.questions[quizProgress.currentIndex];

  const handleAnswer = (answer: string) => {
    if (quizProgress.isQuizDone) return;
    const updatedAnswers = [...quizProgress.selectedAnswers];
    updatedAnswers[quizProgress.currentIndex] = answer;
    if (quizProgress.currentIndex === quizProgress.questions.length - 1) {
      setQuizProgress((prev) => ({
        ...prev,
        selectedAnswers: updatedAnswers,
        isQuizDone: true,
      }));
    } else {
      setQuizProgress((prev) => ({
        ...prev,
        selectedAnswers: updatedAnswers,
        currentIndex: prev.currentIndex + 1,
      }));
    }
  };

  const handleRetakeQuiz = async () => {
    localStorage.removeItem("quizProgress");
    await fetchQuizApi();
  };

  return {
    quizProgress,
    currentQuestion: quizProgress.questions[quizProgress.currentIndex],
    answers: quizProgress.shuffledAnswers[quizProgress.currentIndex] || [],
    loading,
    handleAnswer,
    handleRetakeQuiz,
  };
};

export default useQuiz;

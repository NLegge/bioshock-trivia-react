import React, { useState, useEffect } from 'react';
import { questions } from '../utils/triviaQuestions';

export const TriviaBox = ({ onTriviaEnd, onCorrectClick, onIncorrectClick, onTimeout }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(20);

  const updateInterval = () => {
    if (questions.length > (currentQuestionIndex + 1)) setCurrentQuestionIndex(currentQuestionIndex + 1);
    else onTriviaEnd();
    setSecondsLeft(20);
  }

  const handleClick = (isCorrect) => {
    if (isCorrect) onCorrectClick();
    else onIncorrectClick();
    updateInterval();
  };

  const currentQuestion = questions[currentQuestionIndex];
  const { question, answers } = currentQuestion;

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft > 0) setSecondsLeft(secondsLeft - 1);
      else {
        onTimeout();
        updateInterval();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  return (
  <div className="trivia-box">
    <p>Time Remaining: {secondsLeft} seconds</p>
    <h3>{question}</h3>
    {answers.map(answer => (
      <button onClick={() => handleClick(answer.isCorrect)} key={answer.answer}>
        {answer.answer}
      </button>
    ))}
  </div>
);
};

export default TriviaBox;

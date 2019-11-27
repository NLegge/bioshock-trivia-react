import React, { useState } from 'react';
import { questions } from '../utils/triviaQuestions';

export const TriviaBox = ({ onTriviaEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleClick = () => {
    if (questions.length > (currentQuestionIndex + 1)) setCurrentQuestionIndex(currentQuestionIndex + 1);
    else onTriviaEnd();
  };
  const currentQuestion = questions[currentQuestionIndex];
  const { question, answers, correctAnswer } = currentQuestion;

  return (
  <div className="trivia-box">
    <h3>{question}</h3>
    {answers.map(answer => (
      <button onClick={handleClick} key={answer}>
        {answer}
      </button>
    ))}
  </div>
);
};

export default TriviaBox;

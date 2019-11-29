import React, { useState } from 'react';
import { questions } from '../utils/triviaQuestions';

export const TriviaBox = ({ onTriviaEnd, onCorrectClick, onIncorrectClick }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleClick = (isCorrect) => {
    console.log(isCorrect);
    if (isCorrect) onCorrectClick();
    else onIncorrectClick();
    if (questions.length > (currentQuestionIndex + 1)) setCurrentQuestionIndex(currentQuestionIndex + 1);
    else onTriviaEnd();
  };
  const currentQuestion = questions[currentQuestionIndex];
  const { question, answers } = currentQuestion;

  return (
  <div className="trivia-box">
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

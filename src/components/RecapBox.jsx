import React from 'react';

export const RecapBox = ({ onClick, correctCount, incorrectCount, timeoutCount  }) => (
  <div className="trivia-box">
    <h3>All done. Here's how you did!</h3>
    <p>Correct Answers: {correctCount}</p>
    <p>Incorrect Answers: {incorrectCount}</p>
    <p>Unanswered: {timeoutCount}</p>
    <button onClick={onClick}>Return to Start</button>
  </div>
);

export default RecapBox;

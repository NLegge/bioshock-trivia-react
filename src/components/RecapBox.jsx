import React from 'react';

export const RecapBox = ({ onClick }) => (
  <div className="trivia-box">
    <button onClick={onClick}>Return to Start</button>
  </div>
);

export default RecapBox;

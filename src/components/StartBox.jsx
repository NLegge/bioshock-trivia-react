import React from 'react';

export const StartBox = ({ onClick }) => (
  <div className="trivia-box">
    <button onClick={onClick}>start</button>
  </div>
);

export default StartBox;

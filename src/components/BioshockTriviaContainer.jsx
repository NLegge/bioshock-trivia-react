import React, { useState } from 'react';
import Bioshock from '../assets/images/bioshock.png';
import TriviaBox from './TriviaBox';
import StartBox from './StartBox';
import RecapBox from './RecapBox';

export const BioshockTriviaContainer = () => {
  console.log('container');
  const [boxView, setBoxView] = useState('start');
  const handleStartClick = () => setBoxView('trivia');
  const handleTriviaEnd = () => setBoxView('recap');
  const handleRecapOnClick = () => setBoxView('start');

  const renderBox = () => {
    let box = <StartBox onClick={handleStartClick} />
    switch (boxView) {
      case 'trivia':
        box = <TriviaBox onTriviaEnd={handleTriviaEnd} />
        break;
      case 'recap':
        box = <RecapBox onClick={handleRecapOnClick} />
      default:
        break;
    }
    return box;
  }
  return (
    <div className="bioshock-trivia-container">
      <img src={Bioshock} alt="bioshock" />
      <h4>Trivia Game</h4>
      {renderBox()}
    </div>
  );
};

export default BioshockTriviaContainer;

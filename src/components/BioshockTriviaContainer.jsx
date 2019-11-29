import React, { useReducer} from 'react';
import Bioshock from '../assets/images/bioshock.png';
import TriviaBox from './TriviaBox';
import StartBox from './StartBox';
import RecapBox from './RecapBox';

const initialState = {
  boxView: 'start',
  correctCount: 0,
  incorrectCount: 0,
  timeoutCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, boxView: 'trivia' };
    case 'RESTART_GAME':
      return { ...state, boxView: 'start', correctCount: 0, incorrectCount: 0, timeoutCount: 0 };
    case 'END_GAME':
      return { ...state, boxView: 'recap' };
    case 'CORRECT_ANSWER':
      return { ...state, correctCount: state.correctCount + 1 };
    case 'INCORRECT_ANSWER':
      return { ...state, incorrectCount: state.incorrectCount + 1 }
    case 'TIMEOUT':
      return { ...state, timeoutCount: state.timeoutCount + 1 }
    default:
      throw new Error();
  }
};

export const BioshockTriviaContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const {
    boxView,
    correctCount,
    incorrectCount,
    timeoutCount,
  } = state;

  const handleStartClick = () => dispatch({ type: 'START_GAME' });
  const handleTriviaEnd = () => dispatch({ type: 'END_GAME' });
  const handleRecapOnClick = () => dispatch({ type: 'RESTART_GAME' });
  const handleCorrectClick = () => dispatch({ type: 'CORRECT_ANSWER' });
  const handleIncorrectClick = () => dispatch({ type: 'INCORRECT_ANSWER' });
  const handleTimeout = () => dispatch({ type: 'TIMEOUT' });

  const renderBox = () => {
    let box = <StartBox onClick={handleStartClick} />;
    switch (boxView) {
      case 'trivia':
        box = (
          <TriviaBox
            onTriviaEnd={handleTriviaEnd}
            onCorrectClick={handleCorrectClick}
            onIncorrectClick={handleIncorrectClick}
          />
        );
        break;
      case 'recap':
        box = (
          <RecapBox
            onClick={handleRecapOnClick}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            timeoutCount={timeoutCount}
          />
        );
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

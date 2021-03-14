import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../context/GameContext';
import Choice from './Choice';
import ChoicesDisplay from './ChoicesDisplay';
import ResultsDisplay from './ResultsDisplay';
const Game = (props: any) => {
  const initialSeconds = 3;
  const [roundOver, setRoundOver] = useState(false);
  const [seconds, setSeconds] = useState(initialSeconds);

  const {
    updateScore,
    userChoice,
    updateUserChoice,
    computerChoice,
    updateComputerChoice,
  } = useContext(GameContext);
  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds !== 0) {
        setSeconds((t) => t - 1);
      }
    }, 1000);
    // times up and user didnt choose
    if (seconds === 0 && userChoice.id === -1) {
      // choose random
      let randomId = getRandomId();
      updateUserChoice(userChoice, randomId);
    }

    if (seconds === 0 && computerChoice.id === -1) {
      let randomId = getRandomId();
      updateComputerChoice(computerChoice, randomId);
    }

    if (userChoice.id !== -1 && computerChoice.id !== -1) {
      setRoundOver(true);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      {!roundOver ? (
        <div>
          <h1>You must choose in</h1>
          <h1> {seconds}</h1>

          <ChoicesDisplay></ChoicesDisplay>
        </div>
      ) : (
        <ResultsDisplay></ResultsDisplay>
      )}
    </div>
  );
};

const getRandomId = (): number => {
  return Math.floor(Math.random() * 3) + 1;
};

export default Game;

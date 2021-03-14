import React, { createContext, useState } from 'react';
import { ChoiceType, setChoice } from '../types/Choice';

export type GameContextType = {
  score: number;
  userChoice: ChoiceType;
  computerChoice: ChoiceType;
  updateScore: (score: number) => void;
  updateUserChoice: (userChoice: ChoiceType, choiceId: number) => void;
  updateComputerChoice: (computerChoice: ChoiceType, choiceId: number) => void;
};

const initialState: GameContextType = {
  score: 0,
  userChoice: { id: -1, name: '', icon: '' },
  computerChoice: { id: -1, name: '', icon: '' },
  updateScore: () => {},
  updateUserChoice: () => {},
  updateComputerChoice: () => {},
};

const GameContext = createContext<GameContextType>(initialState);

const GameProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState(initialState.score);
  const [userChoice, setUserChoice] = useState(initialState.userChoice);
  const [computerChoice, setComputerChoice] = useState(
    initialState.computerChoice
  );

  const updateScore = (newScore: number) =>
    setScore((score) => score + newScore);

  const updateUserChoice = (userChoice: ChoiceType, choiceId: number) => {
    setUserChoice(() => {
      return setChoice(userChoice, choiceId);
    });
  };

  const updateComputerChoice = (
    computerChoice: ChoiceType,
    choiceId: number
  ) => {
    setComputerChoice(() => {
      return setChoice(computerChoice, choiceId);
    });
  };

  return (
    <GameContext.Provider
      value={{
        score,
        updateScore,
        userChoice,
        updateUserChoice,
        computerChoice,
        updateComputerChoice,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

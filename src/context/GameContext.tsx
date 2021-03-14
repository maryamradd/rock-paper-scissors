import React, { createContext, useState } from 'react';
import { ChoiceType, setChoice } from '../types/Choice';

export type GameContextType = {
  playing: boolean;
  score: number;
  userChoice: ChoiceType;
  computerChoice: ChoiceType;
  updatePlaying: (playing: boolean) => void;
  updateScore: (score: number) => void;
  updateUserChoice: (userChoice: ChoiceType, choiceId: number) => void;
  updateComputerChoice: (computerChoice: ChoiceType, choiceId: number) => void;
};

const initialState: GameContextType = {
  playing: false,
  score: 0,
  userChoice: { id: -1, name: '', icon: '' },
  computerChoice: { id: -1, name: '', icon: '' },
  updatePlaying: () => {},
  updateScore: () => {},
  updateUserChoice: () => {},
  updateComputerChoice: () => {},
};

const GameContext = createContext<GameContextType>(initialState);

const GameProvider: React.FC = ({ children }) => {
  const [playing, setPlaying] = useState(initialState.playing);
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
  const updatePlaying = (playing: boolean) => {
    updateUserChoice(initialState.userChoice, initialState.userChoice.id);
    updateComputerChoice(
      initialState.computerChoice,
      initialState.computerChoice.id
    );
    setPlaying(!playing);
  };
  return (
    <GameContext.Provider
      value={{
        playing,
        updatePlaying,
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

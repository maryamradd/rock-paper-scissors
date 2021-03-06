import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import '../styles/components/choice.scss';
import { ChoiceType } from '../types/Choice';

export interface Props {
  choice: ChoiceType;
  size: string;
}

function Choice({ choice, size }: Props) {
  const { score, setScore, userChoice, updateUserChoice } = useContext(
    GameContext
  );
  const updateChoice = () => {
    updateUserChoice(userChoice, choice.id);
  };
  return (
    <div className={size}>
      <button
        className={`button-circle ${choice.name}-button`}
        onClick={() => updateChoice()}
      >
        <div className="button-inside">
          <img src={choice.icon} alt={choice.name} className="icon" />
        </div>
      </button>
    </div>
  );
}

export default Choice;

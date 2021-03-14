import React, { useContext } from 'react';
import '../styles/score-board.scss';
import { GameContext } from '../context/GameContext';

export default function ScoreBoard() {
  const { score, userChoice } = useContext(GameContext);

  return (
    <div className="score-container">
      <h4>SCORE</h4>
      <h1 className="score">{score}</h1>
    </div>
  );
}

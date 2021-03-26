import React, { useContext } from 'react';
import '../styles/components/score-board.scss';
import { GameContext } from '../context/GameContext';

export default function ScoreBoard() {
  const { score } = useContext(GameContext);

  return (
    <div className="score-container">
      <h4>SCORE</h4>
      <h1>{score}</h1>
    </div>
  );
}

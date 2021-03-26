import React, { useContext, useEffect } from 'react';
import Choice from './Choice';
import '../styles/results-display.scss';
import { GameContext } from '../context/GameContext';

export default function ResultsDisplay({ winner }: any) {
  const {
    playing,
    updatePlaying,
    score,
    setScore,
    userChoice,
    computerChoice,
  } = useContext(GameContext);

  const playAgainHandler = () => {
    updatePlaying(playing);
    console.log('again');
  };

  useEffect(() => {
    if (winner === userChoice) {
      setScore(score + 1);
    } else if (winner === computerChoice) {
      setScore(score - 1);
    }
  }, []);

  return (
    <>
      <div className="containter">
        <div id="col-player" className="column">
          <h4 className="player-title">YOU PICKED</h4>
          <Choice choice={userChoice} size="big-size"></Choice>
        </div>
        <div className="column again">
          {winner === userChoice ? (
            <h1>YOU WIN</h1>
          ) : winner.id === -1 ? (
            <h1>TIE</h1>
          ) : (
            <h1>YOU LOSE</h1>
          )}
          <button onClick={() => playAgainHandler()}>PLAY AGAIN</button>
        </div>
        <div id="col-comp" className="column">
          <h4 className="player-title">COMPUTER PICKED</h4>
          <Choice choice={computerChoice} size="big-size"></Choice>
        </div>
      </div>
    </>
  );
}

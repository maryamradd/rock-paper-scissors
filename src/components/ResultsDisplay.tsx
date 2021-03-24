import React, { useContext, useEffect } from 'react';
import Choice from './Choice';
import '../styles/results-display.scss';
import { GameContext } from '../context/GameContext';
import { getWinner } from '../types/Choice';
import { escapeLeadingUnderscores } from 'typescript';

export default function ResultsDisplay({ winner }: any) {
  const cStyle = { width: '120px', height: '120px' };

  const {
    playing,
    updatePlaying,
    setScore,
    userChoice,
    updateUserChoice,
    computerChoice,
    updateComputerChoice,
  } = useContext(GameContext);

  const playAgainHandler = () => {
    updatePlaying(playing);
    console.log('again');
  };

  useEffect(() => {
    if (winner === userChoice) {
      setScore(1);
    } else if (winner === computerChoice) {
      setScore(-1);
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
          <button className="again-button" onClick={() => playAgainHandler()}>
            PLAY AGAIN
          </button>
        </div>
        <div id="col-comp" className="column">
          <h4 className="player-title">COMPUTER PICKED</h4>
          <Choice choice={computerChoice} size="big-size"></Choice>
        </div>
      </div>
    </>
  );
}

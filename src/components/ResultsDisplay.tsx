import React, { useContext } from 'react';
import Choice from './Choice';
import '../styles/results-display.scss';
import { GameContext } from '../context/GameContext';
import { getWinner } from '../types/Choice';

export default function ResultsDisplay() {
  const cStyle = { width: '120px', height: '120px' };

  const {
    playing,
    updatePlaying,
    updateScore,
    userChoice,
    updateUserChoice,
    computerChoice,
    updateComputerChoice,
  } = useContext(GameContext);

  const winner = getWinner(userChoice, computerChoice);
  //update score

  return (
    <>
      {playing ? (
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
            <button
              className="again-button"
              onClick={() => updatePlaying(playing)}
            >
              PLAY AGAIN
            </button>
          </div>
          <div id="col-comp" className="column">
            <h4 className="player-title">COMPUTER PICKED</h4>
            <Choice choice={computerChoice} size="big-size"></Choice>
          </div>
        </div>
      ) : null}
    </>
  );
}

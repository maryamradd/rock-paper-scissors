import React, { useContext } from 'react';
import '../styles/components/results-display.scss';
import Game from './Game';
import { GameContext } from '../context/GameContext';

const Playground = () => {
  const { playing, updatePlaying } = useContext(GameContext);
  console.log(playing);
  const startGame = () => {
    updatePlaying(playing);
  };
  return (
    <>
      {!playing ? (
        <div className="containter">
          <div className="column again">
            <h1>Play rock paper sicciorss against the computer</h1>
            <button className="again-button" onClick={() => startGame()}>
              PLAY
            </button>
          </div>
        </div>
      ) : (
        <div className="containter">
          <Game />
        </div>
      )}
    </>
  );
};

export default Playground;

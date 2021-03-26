import React, { useRef, useState } from 'react';
import './styles/global.scss';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Playground from './components/Playground';
import { GameProvider } from './context/GameContext';
import RulesCard from './components/RulesCard';

function App() {
  const rulesModal = useRef(null);

  return (
    <GameProvider>
      <Header>
        <ScoreBoard></ScoreBoard>
      </Header>
      <Playground></Playground>
      <button
        className="rules-button"
        // @ts-ignore: Object is possibly 'null'.
        onClick={() => rulesModal.current!.open()}
      >
        RULES
      </button>
      <RulesCard ref={rulesModal}></RulesCard>
      <div className="footer">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="#" target="_blank">
          @maryamradd
        </a>
        .
      </div>
    </GameProvider>
  );
}

export default App;

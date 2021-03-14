import * as React from 'react';
import './styles/global.scss';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Playground from './components/Playground';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <Header>
        <ScoreBoard></ScoreBoard>
      </Header>
      <Playground></Playground>
      <button className="rules-button">RULES</button>

      <div className="footer">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">@maryamradd</a>.
      </div>
    </GameProvider>
  );
}

export default App;

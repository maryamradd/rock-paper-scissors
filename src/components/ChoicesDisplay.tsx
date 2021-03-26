import React from 'react';
import Choice from './Choice';
import '../styles/components/choices-display.scss';
import { Rock, Paper, Scissors } from '../types/Choice';

const ChoicesDisplay = () => {
  return (
    <>
      <div className="container">
        <Choice choice={Paper} size="big-size"></Choice>
        <Choice choice={Scissors} size="big-size"></Choice>
      </div>
      <div className="bottom-choice">
        <Choice choice={Rock} size="big-size"></Choice>
      </div>
      <div className="triangle">
        <svg xmlns="http://www.w3.org/2000/svg" width="305" height="277">
          <path
            fill="none"
            stroke="#000"
            strokeWidth="15"
            d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z"
            opacity=".2"
          />
        </svg>
      </div>
    </>
  );
};

export default ChoicesDisplay;

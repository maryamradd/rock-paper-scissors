import React from 'react';
import Choice from './Choice';
import '../styles/choices-display.scss';
import { Rock, Paper, Scissors } from '../types/Choice';

const ChoicesDisplay = () => {
  return (
    <>
      <div className="container">
        <Choice choice={Paper} size="big-size"></Choice>
        <Choice choice={Scissors} size="big-size"></Choice>{' '}
      </div>
      <div className="bottom-choice">
        <Choice choice={Rock} size="big-size"></Choice>
      </div>
    </>
  );
};

export default ChoicesDisplay;

import Iconrock from '../images/icon-rock.svg';
import Iconpaper from '../images/icon-paper.svg';
import Iconscissors from '../images/icon-scissors.svg';

export type ChoiceType = {
  id: number;
  name: string;
  icon: string;
};

export const Rock: ChoiceType = {
  id: 1,
  name: 'rock',
  icon: Iconrock,
};

export const Paper: ChoiceType = {
  id: 2,
  name: 'paper',
  icon: Iconpaper,
};

export const Scissors: ChoiceType = {
  id: 3,
  name: 'scissors',
  icon: Iconscissors,
};

type result = {
  win: number;
  lose: number;
};

const logic: { [key: number]: result } = {
  1: { win: 3, lose: 2 }, // rock {wins against: 'scissor', loses to: 'paper'}
  2: { win: 1, lose: 3 }, // paper {wins against: 'rock', loses to: 'scissor'}
  3: { win: 2, lose: 1 }, // scissor {wins against: 'paper', loses to: 'rock'}
};

export const setChoice = (choice: ChoiceType, choiceId: number): ChoiceType => {
  if (choiceId === 1) {
    choice = Rock;
  } else if (choiceId === 2) {
    choice = Paper;
  } else {
    choice = Scissors;
  }
  return choice;
};

// returns choice object of the winner and an empty object if tie
export const getWinner = (
  userChoice: ChoiceType,
  computerChoice: ChoiceType
): ChoiceType => {
  // tie
  if (userChoice.id === computerChoice.id) {
    return { id: -1, name: '', icon: '' };
  }
  // user won
  if (logic[userChoice.id].win === computerChoice.id) {
    return userChoice;
  } else {
    // computer won
    return computerChoice;
  }
};

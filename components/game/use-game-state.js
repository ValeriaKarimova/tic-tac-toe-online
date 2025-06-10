import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "../constants";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c])
      return [a, b, c];
  }
};

export function useGameState() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [curStep, setCurStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? winnerSequence[0] : undefined;
  const isDraw = !winnerSequence && cells.filter((val) => val).length === 9;
  const getWinnerCell = (idx) => winnerSequence?.includes(idx);

  const toggleCell = (idx) => {
    if (cells[idx] || winnerSequence) {
      return;
    }

    const copy = cells.slice();
    copy[idx] = curStep;
    const winner = computeWinner(copy);

    setCells(copy);
    setCurStep(curStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const resetGame = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setCurStep(SYMBOL_X);
    setWinnerSequence(undefined);
  };

  return {
    cells,
    curStep,
    winnerSymbol,
    isDraw,
    getWinnerCell,
    toggleCell,
    resetGame,
  };
}

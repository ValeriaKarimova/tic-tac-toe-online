import { useState } from "react";
import { GAME_SYMBOLS, MOVES_ORDER } from "./constants";
import { checkIfWinner } from "./check-winner";

export function UseGameState() {
  const [{ cells, currentMove, winnerSequance }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.ZERO,
    }),
  );
  const nextMove = getNextMove(currentMove);

  const handleCellClick = (idx) => {
    if (cells[idx]) return;
    const isWinnerSequance = checkIfWinner(idx, cells, currentMove);
    setGameState((lastGameState) => ({
      ...lastGameState,
      currentMove: getNextMove(lastGameState.currentMove),
      winnerSequance: isWinnerSequance ?? [],
      cells: lastGameState.cells.map((cell, i) =>
        idx === i ? lastGameState.currentMove : cell,
      ),
    }));
  };

  function getNextMove(cur) {
    const nextIdx = MOVES_ORDER.indexOf(cur) + 1;
    return MOVES_ORDER[nextIdx] ?? MOVES_ORDER[0];
  }

  return { handleCellClick, cells, currentMove, nextMove, winnerSequance };
}

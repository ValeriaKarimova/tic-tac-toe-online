import { useState } from "react";
import { GAME_SYMBOLS, MOVES_ORDER } from "./constants";
import { checkIfWinner } from "./check-winner";
import { GAME_SIZE } from "./constants";

export function UseGameState() {
  const [
    { cells, currentMove, winnerSequance, playersTimeover },
    setGameState,
  ] = useState(() => ({
    cells: new Array(GAME_SIZE * GAME_SIZE).fill(null),
    currentMove: GAME_SYMBOLS.ZERO,
    playersTimeover: [],
  }));
  const nextMove = getNextMove(currentMove);

  const winnerSymbol =
    currentMove === nextMove ? currentMove : cells[winnerSequance?.[0]];

  const handleCellClick = (idx) => {
    if (cells[idx]) return;
    const isWinnerSequance = checkIfWinner(idx, cells, currentMove);

    setGameState((lastGameState) => ({
      ...lastGameState,
      currentMove: getNextMove(lastGameState.currentMove),
      winnerSequance: isWinnerSequance ?? undefined,
      cells: lastGameState.cells.map((cell, i) =>
        idx === i ? lastGameState.currentMove : cell,
      ),
    }));
  };

  const handleTimeover = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeover: [...lastGameState.playersTimeover, symbol],
        currentMove: getNextMove(lastGameState.currentMove),
      };
    });
  };

  function getNextMove(cur) {
    const slicedMovesOrder = MOVES_ORDER.filter(
      (el) => !playersTimeover.includes(el),
    );
    const nextIdx = slicedMovesOrder.indexOf(cur) + 1;
    return slicedMovesOrder[nextIdx] ?? slicedMovesOrder[0];
  }

  return {
    handleCellClick,
    cells,
    currentMove,
    nextMove,
    winnerSequance,
    handleTimeover,
    winnerSymbol,
  };
}

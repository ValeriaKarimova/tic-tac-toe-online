import { GameInfo } from "./game-info";
import { useGameState } from "./use-game-state";
import { GameCell } from "./game-cell";

export function Game() {
  const {
    cells,
    curStep,
    winnerSymbol,
    isDraw,
    getWinnerCell,
    toggleCell,
    resetGame,
  } = useGameState();

  return (
    <div className="flex flex-col justify-center items-center w-1/2 mx-auto my-24 border border-black p-5 rounded-sm">
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} curStep={curStep} />
      <div className="grid grid-cols-3 grid-rows-3 gap-7">
        {cells.map((sym, idx) => (
          <GameCell
            key={idx}
            symbol={sym}
            isWinner={getWinnerCell(idx)}
            onClick={() => toggleCell(idx)}
          />
        ))}
      </div>
      <button
        className="hover:bg-sky-100 border-4 border-purple-500 rounded-sm px-8 py-3 cursor-pointer mt-8"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
}

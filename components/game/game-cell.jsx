import { GameSymbol } from "./game-symbol";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <div className="w-36 h-36 flex justify-center items-center">
      <button
        className={`bg-sky-100 w-32 h-32 rounded-lg cursor-pointer text-6xl ${isWinner ? "bg-sky-300" : ""}`}
        onClick={onClick}
      >
        {symbol ? <GameSymbol symbol={symbol} /> : null}
      </button>
    </div>
  );
}

import { UiButton } from "../ui-kit/ui-button";
import { GameSymbol } from "./game-symbol";
import { GAME_SIZE } from "./constants";

export function GameField({
  className,
  handleCellClick,
  cells,
  currentMove,
  nextMove,
  winnerSequance,
}) {
  const actions = (
    <>
      <div className="flex gap-3">
        <UiButton color={"teal"} size={"md"}>
          Draw
        </UiButton>
        <UiButton color={"outline"} size={"md"}>
          Give up
        </UiButton>
      </div>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, idx) => (
          <GameCell
            className={
              winnerSequance && winnerSequance.includes(idx)
                ? "bg-orange-600/10"
                : ""
            }
            key={idx}
            onClick={() => handleCellClick(idx)}
            disabled={!!winnerSequance}
          >
            {symbol && <GameSymbol symbol={symbol} className="size-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={`${className} bg-white rounded-2xl shadow-md px-8 pt-5 pb-7`}
    >
      {children}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div
      className={`grid mt-3 grid-cols-[repeat(${GAME_SIZE},_29px)] grid-rows-[repeat(${GAME_SIZE},_29px)]`}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex justify-between">
      <div>
        <p className="flex leading-tight gap-1 items-center text-xl font-semibold">
          Move: <GameSymbol symbol={currentMove} className={"size-5"} />
        </p>
        <p className="flex leading-tight gap-1 items-center text-md text-slate-400">
          Next: <GameSymbol symbol={nextMove} />
        </p>
      </div>
      {actions}
    </div>
  );
}

function GameCell({ children, onClick, className, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border cursor-pointer -ml-px -mt-px border-slate-200 flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}

<div className="flex gap-3">
  <UiButton color={"teal"} size={"md"}>
    Draw
  </UiButton>
  <UiButton color={"outline"} size={"md"}>
    Give up
  </UiButton>
</div>;

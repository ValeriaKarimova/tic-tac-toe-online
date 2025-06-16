import { Header } from "../components/header/header";
import { GameTitle } from "../components/game/game-title";
import { GameInfo } from "../components/game/game-info";
import { GameField } from "../components/game/game-field";
import { UseGameState } from "../components/game/use-game-state";
import { GameSymbol } from "../components/game/game-symbol";

export default function HomePage() {
  const {
    handleCellClick,
    cells,
    currentMove,
    nextMove,
    winnerSequance,
    handleTimeover,
    winnerSymbol,
  } = UseGameState();
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[616px]">
        <GameTitle />
        <GameInfo
          onTimeOver={handleTimeover}
          currentMove={currentMove}
          winner={winnerSymbol}
          className={"mt-4"}
        />
        {winnerSymbol && <GameSymbol symbol={winnerSymbol} />}
        <GameField
          handleCellClick={handleCellClick}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          winnerSequance={winnerSequance}
          className={"mt-6"}
        />
      </main>
    </div>
  );
}

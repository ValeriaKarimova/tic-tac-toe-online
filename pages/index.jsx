import { Header } from "../components/header/header";
import { GameTitle } from "../components/game/game-title";
import { GameInfo } from "../components/game/game-info";
import { GameField } from "../components/game/game-field";
import { UseGameState } from "../components/game/use-game-state";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/ui-kit/ui-modal";
import { UiButton } from "../components/ui-kit/ui-button";
import { players } from "../components/game/constants";
import { PlayerInfo } from "../components/game/game-info";
import { useEffect, useState } from "react";

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
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (winnerSymbol) setIsModal(true);
  }, [winnerSymbol]);

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
        <UiModal
          className={""}
          isOpen={isModal}
          onClose={() => setIsModal(false)}
        >
          <UiModal.Header>Game finished</UiModal.Header>
          <UiModal.Body>
            <p>Winner: {winnerSymbol}</p>
            <div className="flex flex-wrap gap-y-3 justify-between mt-3">
              {players.map((player) => (
                <PlayerInfo
                  className={"even:flex-row-reverse"}
                  key={player.id}
                  playerInfo={player}
                  isTimer={false}
                ></PlayerInfo>
              ))}
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton
              onClick={() => setIsModal(false)}
              size={"md"}
              color={"outline"}
            >
              Close
            </UiButton>
            <UiButton size={"md"} color={"teal"}>
              Play Again
            </UiButton>
          </UiModal.Footer>
        </UiModal>
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

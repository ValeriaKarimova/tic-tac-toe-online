// import { GameSymbol } from "./game-symbol";
import { Profile } from "../profile/profile";
import { players } from "./constants";
import { GameSymbol } from "./game-symbol";
import { useEffect, useState } from "react";

export function GameInfo({ currentMove, className, winner, onTimeOver }) {
  return (
    <div
      className={`mt-4 py-4 shadow-md px-8 bg-white rounded-2xl flex flex-wrap gap-y-3.5 items-center justify-between text-teal-600 ${className}`}
    >
      {players.map((player) => (
        <PlayerInfo
          className={"even:flex-row-reverse"}
          key={player.id}
          playerInfo={player}
          onTimeOver={() => onTimeOver(player.symbol)}
          isTimer={currentMove === player.symbol && !winner}
        ></PlayerInfo>
      ))}
    </div>
  );
}

export function PlayerInfo({ playerInfo, className, isTimer, onTimeOver }) {
  const [seconds, setSeconds] = useState(5);
  const minutesStr = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsStr = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimer) {
      const intervalId = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
        setSeconds(5);
      };
    }
  }, [isTimer]);

  useEffect(() => {
    if (seconds <= 0) onTimeOver();
  }, [seconds]);

  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <div className="relative w-[180px] flex gap-2 items-center">
        <span className="shadow-md size-5 flex items-center justify-center rounded-full bg-white absolute -left-1 -top-1 text-orange-600">
          <GameSymbol symbol={playerInfo.symbol} />
        </span>
        <Profile playerInfo={playerInfo} className={className} />
      </div>
      <div className="bg-slate-200 h-8 w-px"></div>
      <p
        className={`${isTimer ? (isDanger ? "text-orange-600" : "text-slate-900") : "text-slate-300"} text-lg font-semibold`}
      >
        {minutesStr}:{secondsStr}
      </p>
    </div>
  );
}

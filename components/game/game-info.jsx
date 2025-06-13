// import { GameSymbol } from "./game-symbol";
import { Profile } from "../profile/profile";
import { GAME_SYMBOLS } from "./constants";
import { GameSymbol } from "./game-symbol";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Valeria Karimova Olegovna",
    place: "123",
    avatar: "",
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Dmitrii",
    place: "1236",
    avatar: "",
    symbol: GAME_SYMBOLS.ZERO,
  },
];

export function GameInfo({ currentMove, className }) {
  return (
    <div
      className={`mt-4 py-4 shadow-md px-8 bg-white rounded-2xl flex items-center justify-between text-teal-600 ${className}`}
    >
      {players.map((player, idx) => (
        <PlayerInfo
          className={"even:flex-row-reverse"}
          key={player.id}
          playerInfo={player}
          isTimer={currentMove === player.symbol}
        ></PlayerInfo>
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, className, isTimer }) {
  const [seconds, setSeconds] = useState(60);
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
        setSeconds(60);
      };
    }
  }, [isTimer]);

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
        className={`${isDanger ? "text-orange-600" : isTimer ? "text-slate-900" : "text-slate-300"} text-lg font-semibold`}
      >
        {minutesStr}:{secondsStr}
      </p>
    </div>
  );
}

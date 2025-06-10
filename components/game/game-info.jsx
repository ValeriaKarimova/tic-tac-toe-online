// import { GameSymbol } from "./game-symbol";
import { Profile } from "../profile/profile";
import { OIcon } from "../shared/icons/o-icon";
import { XIcon } from "../shared/icons/x-icon";

export function GameInfo({ cl }) {
  return (
    <div
      className={`mt-4 py-4 shadow-md px-8 bg-white rounded-2xl flex items-center justify-between text-teal-600 ${cl}`}
    >
      <div className="flex gap-3 items-center">
        <div className="relative w-[180px] flex gap-2 items-center">
          <span className="shadow-md size-5 flex items-center justify-center rounded-full bg-white absolute -left-1 -top-1 text-orange-600">
            <XIcon />
          </span>
          <Profile />
        </div>
        <div className="bg-slate-200 h-8 w-px"></div>
        <p className="text-slate-900 text-lg font-semibold">01:08</p>
      </div>
      <div className="flex gap-3 items-center">
        <p className="text-orange-600 text-lg font-semibold">00:08</p>
        <div className="bg-slate-200 h-8 w-px"></div>
        <div className="relative w-[180px] flex gap-2 items-center">
          <span className="shadow-md size-5 flex items-center justify-center rounded-full bg-white absolute -left-1 -top-1">
            <OIcon />
          </span>
          <Profile />
        </div>
      </div>
    </div>
  );
}

// if (isDraw) {
//   return <div className="text-3xl font-bold text-center mb-8">Draw</div>;
// }

// if (winnerSymbol) {
//   return (
//     <div className="text-3xl font-bold text-center mb-8">
//       Winner is <GameSymbol symbol={winnerSymbol} />
//     </div>
//   );
// }

// return (
//   <div className="text-3xl font-bold text-center mb-8">
//     It is <GameSymbol symbol={curStep} /> turn
//   </div>
// );

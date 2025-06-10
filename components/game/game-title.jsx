import Link from "next/link";
import { ArrowLeftIcon } from "../shared/icons/arrow-left";
import { StarIcon } from "../shared/icons/star";
import { TimerIcon } from "../shared/icons/timer";
import { UserIcon } from "../shared/icons/user";

export function GameTitle() {
  return (
    <div className="pl-2 ">
      <Link className="flex items-center gap-2 text-md text-teal-600" href="#">
        <ArrowLeftIcon />
        Back to main
      </Link>
      <h1 className="text-4xl leading-tight">Tic Tac Toe</h1>
      <div className="flex items-center gap-3 text-slate-400 text-xs">
        <StarIcon />
        <span className="flex gap-1 items-center">
          <UserIcon /> 2
        </span>
        <span className="flex gap-1 items-center">
          <TimerIcon /> 1 min
        </span>
      </div>
    </div>
  );
}

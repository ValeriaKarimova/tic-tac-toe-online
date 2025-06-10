import { UiButton } from "../ui-kit/ui-button";
import { OIcon } from "../shared/icons/o-icon";
import { XIcon } from "../shared/icons/x-icon";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div
      className={`${className} bg-white rounded-2xl shadow-md px-8 pt-5 pb-7`}
    >
      <div className="flex justify-between">
        <div>
          <p className="flex leading-tight gap-1 items-center text-xl font-semibold">
            Step: <OIcon className={"size-5"} />
          </p>
          <p className="flex leading-tight gap-1 items-center text-md text-slate-400">
            Next: <XIcon />
          </p>
        </div>
        <div className="flex gap-3">
          <UiButton color={"teal"} size={"md"}>
            Draw
          </UiButton>
          <UiButton color={"outline"} size={"md"}>
            Give up
          </UiButton>
        </div>
      </div>
      <div className="grid mt-3 grid-cols-[repeat(19,_29px)] grid-rows-[repeat(19,_29px)]">
        {cells.map((_, idx) => (
          <button
            className="border cursor-pointer -ml-px -mt-px border-slate-200 flex items-center justify-center"
            key={idx}
          >
            <XIcon className="size-5" />
          </button>
        ))}
      </div>
    </div>
  );
}

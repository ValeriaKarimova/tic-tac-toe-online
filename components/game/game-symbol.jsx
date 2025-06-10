import { OIcon } from "../shared/icons/o-icon";
import { XIcon } from "../shared/icons/x-icon";
import { GAME_SYMBOLS } from "./constants";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: XIcon,
      [GAME_SYMBOLS.ZERO]: OIcon,
    }[symbol] ?? XIcon;
  return <Icon className={className} />;
}

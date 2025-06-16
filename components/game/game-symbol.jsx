import { ZeroIcon } from "../shared/icons/zero-icon";
import { CrossIcon } from "../shared/icons/cross-icon";
import { SquareIcon } from "../shared/icons/square-icon";
import { TriangleIcon } from "../shared/icons/triangle-icon";
import { GAME_SYMBOLS } from "./constants";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
    }[symbol] ?? CrossIcon;
  return <Icon className={className} />;
}

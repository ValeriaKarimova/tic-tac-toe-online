export const SYMBOL_O = "O";
export const SYMBOL_X = "X";

export const GAME_SYMBOLS = {
  CROSS: "cross",
  ZERO: "zero",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export let GAME_SIZE = 19;

export const MOVES_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.SQUARE,
  GAME_SYMBOLS.TRIANGLE,
];

export const players = [
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
  {
    id: 3,
    name: "Cat",
    place: "36",
    avatar: "",
    symbol: GAME_SYMBOLS.SQUARE,
  },
  {
    id: 3,
    name: "DOG",
    place: "12",
    avatar: "",
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
];

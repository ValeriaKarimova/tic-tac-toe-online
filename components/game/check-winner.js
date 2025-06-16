import { GAME_SIZE } from "./constants";

const FRAMES = {
  // horizontal: {
  //     top: Array.from({length: GAME_SIZE}, (_, i) => i),
  //     bottom: Array.from({length: GAME_SIZE}, (_, i) => GAME_SIZE*18+i),
  // },
  vertical: {
    left: Array.from({ length: GAME_SIZE }, (_, i) => 1 * i * GAME_SIZE),
    right: Array.from({ length: GAME_SIZE }, (_, i) => 18 + i * GAME_SIZE),
  },
};

export function checkIfWinner(idx, cells, currentMove) {
  const checkArr = new Array(5).fill(null);
  checkArr[0] = idx;
  return (
    checkHorisontal(idx, checkArr, cells, currentMove) ||
    checkVertical(idx, checkArr, cells, currentMove) ||
    checkTopBottomDiagonal(idx, checkArr, cells, currentMove) ||
    checkBottomTopDiagonal(idx, checkArr, cells, currentMove)
  );
}

function checkHorisontal(idx, checkArr, cells, currentMove) {
  let iterate = idx - 1;
  let i = 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate--;
      if (FRAMES.vertical.right.includes(checkArr[i])) break;
      if (FRAMES.vertical.left.includes(checkArr[i])) break;
    } else {
      break;
    }
  }
  iterate = idx + 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate++;
      if (FRAMES.vertical.left.includes(checkArr[i])) break;
      if (FRAMES.vertical.right.includes(checkArr[i])) break;
    } else {
      break;
    }
  }
  return checkArr.every((el) => el) ? checkArr : undefined;
}

function checkVertical(idx, checkArr, cells, currentMove) {
  let iterate = idx - GAME_SIZE;
  let i = 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate;
      iterate -= GAME_SIZE;
    } else {
      break;
    }
  }
  iterate = idx + GAME_SIZE;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate;
      iterate += GAME_SIZE;
    } else {
      break;
    }
  }
  return checkArr.every((el) => el) ? checkArr : undefined;
}

function checkTopBottomDiagonal(idx, checkArr, cells, currentMove) {
  let i = 1;
  let iterate = idx - GAME_SIZE - 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate;
      iterate -= GAME_SIZE + 1;
    } else {
      break;
    }
  }
  iterate = idx + GAME_SIZE + 1;
  for (; i <= 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate;
      iterate += GAME_SIZE + 1;
    } else {
      break;
    }
  }

  return checkArr.every((el) => el) ? checkArr : undefined;
}

function checkBottomTopDiagonal(idx, checkArr, cells, currentMove) {
  let i = 1;
  let iterate = idx - GAME_SIZE + 1;

  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      iterate -= GAME_SIZE - 1;
      checkArr[i] = iterate;
    } else {
      break;
    }
  }
  iterate = idx + GAME_SIZE - 1;
  for (; i <= 5; i++) {
    if (currentMove === cells[iterate]) {
      iterate += GAME_SIZE - 1;
      checkArr[i] = iterate;
    } else {
      break;
    }
  }
  return checkArr.every((el) => el) ? checkArr : undefined;
}

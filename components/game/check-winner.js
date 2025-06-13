export function checkIfWinner(idx, cells, currentMove) {
  const checkArr = new Array(5).fill(null);
  checkArr[0] = idx;
  return (
    checkHorisontal(idx, checkArr, cells, currentMove) ||
    checkVertical(idx, checkArr, cells, currentMove) ||
    checkDiagonal(idx, checkArr, cells, currentMove) ||
    checkSecondDiagonal(idx, checkArr, cells, currentMove)
  );
}

function checkHorisontal(idx, checkArr, cells, currentMove) {
  let iterate = idx - 1;
  let i = 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate--;
    } else {
      break;
    }
  }
  iterate = idx + 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate++;
    } else {
      break;
    }
  }
  return checkArr.every((el) => el) ? checkArr : undefined;
}

function checkVertical(idx, checkArr, cells, currentMove) {
  let iterate = idx - 19;
  let i = 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate;
      iterate -= 19;
    } else {
      break;
    }
  }
  iterate = idx + 19;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate;
      iterate += 19;
    } else {
      break;
    }
  }
  return checkArr.every((el) => el) ? checkArr : undefined;
}

function checkDiagonal(idx, checkArr, cells, currentMove) {
  let i = 1;
  let iterate = idx - 19 - 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate;
      iterate -= 19 + 1;
    } else {
      break;
    }
  }
  iterate = idx + 19 + 1;
  for (; i <= 5; i++) {
    if (currentMove === cells[iterate]) {
      checkArr[i] = iterate;
      iterate += 19 + 1;
    } else {
      break;
    }
  }
  return checkArr.every((el) => el) ? checkArr : undefined;
}

function checkSecondDiagonal(idx, checkArr, cells, currentMove) {
  let i = 1;
  let iterate = idx - 19 + 1;
  for (; i < 5; i++) {
    if (currentMove === cells[iterate]) {
      iterate -= 19 - 1;
      checkArr[i] = 1;
    } else {
      break;
    }
  }
  iterate = idx + 19 - 1;
  for (; i <= 5; i++) {
    if (currentMove === cells[iterate]) {
      iterate += 19 - 1;
      checkArr[i] = 1;
    } else {
      break;
    }
  }
  return checkArr.every((el) => el) ? checkArr : undefined;
}

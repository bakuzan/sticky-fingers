import { SQUARES } from './consts';
import { Difficulty } from './enums/Difficulty';
import debug from './utils/debug';

import solve from './solve';
import difficultySquareCount from './difficultySquareCount';
import isSolvableWithElimination from './isSolvableWithElimination';
import isUnique from './isUnique';
import shuffle from './utils/shuffle';

export default function generate(difficulty?: Difficulty) {
  const start = new Date().getTime();
  const minSquares = difficultySquareCount(difficulty || Difficulty.easy);

  const fullGrid = solve({});
  const generatedGrid = { ...fullGrid };
  const shuffledSquares = shuffle(SQUARES);
  let filledSquares = shuffledSquares.length;

  for (const s of shuffledSquares) {
    delete generatedGrid[s];
    filledSquares--;
    if (!isUnique(generatedGrid)) {
      console.log(generatedGrid);
    }
    if (!isSolvableWithElimination(generatedGrid) || !isUnique(generatedGrid)) {
      generatedGrid[s] = fullGrid[s];
      filledSquares++;
    }

    if (filledSquares === minSquares) {
      break;
    }
  }

  const time = new Date().getTime() - start;

  debug(
    'Generated puzzle with ' +
      Object.keys(generatedGrid).length +
      ' squares in ' +
      time +
      'ms'
  );

  return generatedGrid;
}

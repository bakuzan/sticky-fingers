import { SQUARES } from './consts';
import { SolveOptions } from './interfaces/SolveOptions';
import { SudokuGrid } from './interfaces/SudokuGrid';
import { SolverState } from './interfaces/SolverState';
import assign from './assign';
import parseGrid from './parseGrid';
import shuffle from './utils/shuffle';

function search(input: SolverState, options?: SolveOptions): SolverState {
  options = options || {};
  options.chooseDigit = options.chooseDigit || 'random';
  options.chooseSquare = options.chooseSquare || 'minDigits';

  // Using depth-first search and propagation, try all possible values."
  if (!input.values) {
    return { hasFailure: true }; // Failed earlier
  }

  const values = input.values;
  if (SQUARES.every((x) => values[x].length === 1)) {
    return { values }; // Solved!
  }

  // Chose the unfilled square s with the fewest possibilities
  const candidates = SQUARES.filter((sq) => values[sq].length > 1).sort(
    (s1, s2) => {
      if (values[s1].length !== values[s2].length) {
        return values[s1].length - values[s2].length;
      }

      if (s1 < s2) {
        return -1;
      } else {
        return 1;
      }
    }
  );

  let s = '';
  if (options.chooseSquare === 'minDigits') {
    s = candidates[0];
  } else if (options.chooseSquare === 'maxDigits') {
    s = candidates[candidates.length - 1];
  } else if (options.chooseSquare === 'random') {
    s = candidates[Math.floor(Math.random() * candidates.length)];
  }

  let digitsLeft = values[s].split('');
  if (options.chooseDigit === 'max') {
    digitsLeft.reverse();
  } else if (options.chooseDigit === 'random') {
    digitsLeft = shuffle(digitsLeft);
  }

  const digLen = digitsLeft.length;
  for (let i = 0; i < digLen; i++) {
    const d = digitsLeft[i];
    const result = search(assign(values, s, d), options);

    if (result.values) {
      return { values: result.values };
    }
  }

  return { hasFailure: true };
}

export default function solve(
  grid: SudokuGrid,
  options?: SolveOptions
): SudokuGrid {
  const result = search(parseGrid(grid), options);
  if (!result.values) {
    throw new Error('Unable to solve grid.');
  }

  return result.values;
}

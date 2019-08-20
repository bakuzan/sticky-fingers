import { SQUARES, DIGITS } from './consts';
import { SudokuGrid } from './interfaces/SudokuGrid';
import { SolverState } from './interfaces/SolverState';
import assign from './assign';

export default function parseGrid(grid: SudokuGrid): SolverState {
  // Convert grid to a dict of possible values, {square: digits}, or
  // return false if a contradiction is detected

  // To start, every square can be any digit; then assign values from the grid.
  const values: SudokuGrid = SQUARES.reduce(
    (p, s) => {
      p[s] = DIGITS;
      return p;
    },
    {} as SudokuGrid
  );

  const input = grid;

  for (const s in input) {
    /* istanbul ignore next */
    if (!input.hasOwnProperty(s)) {
      continue;
    }

    const d = input[s];
    const result = assign(values, s, d);
    if (result.hasFailure) {
      return { hasFailure: true }; // (Fail if we can't assign d to square s.)
    }
  }

  return { values };
}

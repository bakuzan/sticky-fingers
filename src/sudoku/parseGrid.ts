import { SQUARES, DIGITS } from './consts';
import assign from './assign';

export default function parseGrid(grid) {
  // Convert grid to a dict of possible values, {square: digits}, or
  // return false if a contradiction is detected

  // To start, every square can be any digit; then assign values from the grid.
  const values = SQUARES.reduce((p, s) => {
    p[s] = DIGITS;
    return p;
  }, {});

  const input = grid;

  for (const s in input) {
    if (!input.hasOwnProperty(s)) {
      continue;
    }

    const d = input[s];

    if (!assign(values, s, d)) {
      return false; // (Fail if we can't assign d to square s.)
    }
  }

  return values;
}

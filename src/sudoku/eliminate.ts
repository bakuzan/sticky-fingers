import { SudokuGrid } from './interfaces/SudokuGrid';
import { PEERS, UNITS } from './consts';
import assign from './assign';

export default function eliminate(values: SudokuGrid, s: string, d: string) {
  // Eliminate d from values[s]; propagate when values or places <= 2.
  // return values, except return false if a contradiction is detected.

  if (values[s].indexOf(d) === -1) {
    return values; // Already eliminated
  }

  values[s] = values[s].replace(d, '');
  // (1) If a square s is reduced to one value d2, then eliminate d2 from the peers.
  if (values[s].length === 0) {
    return false; // Contradiction: removed last value
  } else if (values[s].length === 1) {
    const d2 = values[s];

    if (!PEERS[s].every((s2) => eliminate(values, s2, d2))) {
      return false;
    }
  }

  // (2) If a unit u is reduced to only one place for a value d, then put it there.
  for (const u of UNITS[s]) {
    const dplaces = u.filter((s2) => values[s2].indexOf(d) !== -1);

    /* istanbul ignore if */
    if (dplaces.length === 0) {
      return false; // Contradiction: no place for this value
    } else if (dplaces.length === 1) {
      // d can only be in one place in unit; assign it there
      if (!assign(values, dplaces[0], d)) {
        return false;
      }
    }
  }

  return values;
}

import { SudokuGrid } from './interfaces/SudokuGrid';
import solve from './solve';

export default function isUnique(grid: SudokuGrid) {
  const input = grid;

  const solved1 = solve(input, { chooseDigit: 'min' });
  const solved2 = solve(input, { chooseDigit: 'max' });

  for (const s in solved1) {
    if (solved2[s] !== solved1[s]) {
      return false;
    }
  }

  return true;
}

import { SudokuGrid } from './interfaces/SudokuGrid';

export default function isSolved(values: SudokuGrid) {
  for (const s in values) {
    if (values[s].length > 1) {
      return false;
    }
  }

  return true;
}

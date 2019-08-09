import { SudokuGrid } from './interfaces/SudokuGrid';
import isSolved from './isSolved';
import parseGrid from './parseGrid';

export default function isSolvableWithElimination(grid: SudokuGrid) {
  const res = parseGrid(grid);
  if (!res.values) {
    return false;
  }

  return isSolved(res.values);
}

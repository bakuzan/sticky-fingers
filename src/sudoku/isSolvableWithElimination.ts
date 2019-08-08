import isSolved from './isSolved';
import parseGrid from './parseGrid';

export default function isSolvableWithElimination(grid) {
  return isSolved(parseGrid(grid));
}

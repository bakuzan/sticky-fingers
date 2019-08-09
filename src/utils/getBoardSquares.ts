import { UNITS } from '../sudoku/consts';

export default function getBoardSquares(): string[] {
  return Object.keys(UNITS)
    .slice(0, 9)
    .reduce((p, k) => [...p, ...UNITS[k][0]], [] as string[]);
}

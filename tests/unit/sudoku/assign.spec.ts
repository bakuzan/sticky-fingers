import conflictData from '../../helpers/conflictData';

import assign from '@/sudoku/assign';
import { SQUARES, DIGITS } from '@/sudoku/consts';
import { SudokuGrid } from '@/sudoku/interfaces/SudokuGrid';

jest.mock('@/sudoku/eliminate', () =>
  jest.fn((v, s) => (s === 'A1' ? v : false))
);

import eliminate from '@/sudoku/eliminate';

const { initial } = conflictData;
const state: SudokuGrid = SQUARES.reduce(
  (p, s) => {
    p[s] = p[s] || DIGITS;
    return p;
  },
  initial as SudokuGrid
);

describe('assign', () => {
  it('should return values when digit can be assigned', () => {
    const values = { ...state };

    const result = assign(values, 'A1', '2');

    expect(result).toEqual({ values });
    expect(eliminate).toHaveBeenCalled();
  });

  it('should return failure when digit cannot be assigned', () => {
    const values = { ...state };

    const result = assign(values, 'A2', '2');

    expect(result).toEqual({ hasFailure: true });
    expect(eliminate).toHaveBeenCalled();
  });
});

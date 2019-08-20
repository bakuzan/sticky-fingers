import conflictData from '../../helpers/conflictData';

import eliminate from '@/sudoku/eliminate';
import { SQUARES, DIGITS } from '@/sudoku/consts';
import { SudokuGrid } from '@/sudoku/interfaces/SudokuGrid';

jest.mock('@/sudoku/assign', () => jest.fn((v, s) => (s === 'A1' ? v : false)));

import assign from '@/sudoku/assign';

const { initial } = conflictData;
const state: SudokuGrid = SQUARES.reduce(
  (p, s) => {
    p[s] = p[s] || DIGITS;
    return p;
  },
  initial as SudokuGrid
);

describe('eliminate', () => {
  it('should return values if already eliminated', () => {
    const values = { ...state, A1: `13456789` };

    const result = eliminate(values, 'A1', '2');

    expect(result).toEqual(values);
    expect(assign).not.toHaveBeenCalled();
  });

  it('should return false if digit is the last one', () => {
    const values = { ...state, A1: `2` };

    const result = eliminate(values, 'A1', '2');

    expect(result).toBe(false);
    expect(assign).not.toHaveBeenCalled();
  });

  it('should return false if last digit is a contridiction of peer values', () => {
    const values = { ...state, A1: `27` };

    const result = eliminate(values, 'A1', '2');

    expect(result).toBe(false);
    expect(assign).not.toHaveBeenCalled();
  });

  it('should return false if last digit is valid to peer values but incorrect', () => {
    const values = {
      ...state,
      A1: '12',
      A2: '9',
      A3: '7',
      A4: '5',
      A5: '3',
      A6: '2',
      A7: '8',
      A8: '6',
      A9: '4'
    };

    const result = eliminate(values, 'A1', '2');

    expect(result).toBe(false);
    expect(assign).toHaveBeenCalled();
  });

  it('should return false when digit cannot be assigned in place', () => {
    const values = {
      ...state,
      A1: '12',
      A2: '9',
      A3: '7',
      A4: '5',
      A5: '3',
      A6: '12',
      A7: '8',
      A8: '6',
      A9: '4'
    };

    const result = eliminate(values, 'A6', '1');

    expect(result).toBe(false);
    expect(assign).toHaveBeenCalled();
  });

  it('should return values successfully', () => {
    const values = {
      ...state
    };

    const result = eliminate(values, 'A1', '1');

    expect(result).toEqual(values);
    expect(assign).toHaveBeenCalled();
  });
});

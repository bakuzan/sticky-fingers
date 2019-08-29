import conflictData from '../../helpers/conflictData';

import solve from '@/sudoku/solve';
import * as parseGrid from '@/sudoku/parseGrid';
import * as assign from '@/sudoku/assign';
import { SQUARES, DIGITS } from '@/sudoku/consts';

describe('solve', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return a solved grid for empty object no options', () => {
    const result = solve({});

    SQUARES.forEach((sq) => {
      const value = result[sq];
      expect(DIGITS.includes(value)).toBe(true);
    });
  });

  it('should return a solved grid for chooseDigit min', () => {
    const result = solve({}, { chooseDigit: 'min' });

    SQUARES.forEach((sq) => {
      const value = result[sq];
      expect(DIGITS.includes(value)).toBe(true);
    });
  });

  it('should return a solved grid for chooseDigit max', () => {
    const result = solve({}, { chooseDigit: 'max' });

    SQUARES.forEach((sq) => {
      const value = result[sq];
      expect(DIGITS.includes(value)).toBe(true);
    });
  });

  it('should throw if assign never succeeds', () => {
    const mockAssign = jest
      .spyOn(assign, 'default')
      .mockReturnValue({ hasFailure: true });

    expect(() => solve({})).toThrow('Unable to solve grid.');
    expect(mockAssign).toHaveBeenCalled();
  });

  it('should throw if parseGrid fails', () => {
    const mockParseGrid = jest
      .spyOn(parseGrid, 'default')
      .mockReturnValue({ hasFailure: true });

    expect(() => solve({})).toThrow('Unable to solve grid.');
    expect(mockParseGrid).toHaveBeenCalled();
  });
});

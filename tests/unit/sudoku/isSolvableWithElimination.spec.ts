import isSolvableWithElimination from '@/sudoku/isSolvableWithElimination';

jest.mock('@/sudoku/isSolved', () => jest.fn(() => true));
jest.mock('@/sudoku/parseGrid', () => jest.fn((v) => ({ values: v.values })));

import isSolved from '@/sudoku/isSolved';
import parseGrid from '@/sudoku/parseGrid';

describe('isSolvableWithElimination', () => {
  it('should call parseGrid', () => {
    const result = isSolvableWithElimination({ A1: '1', A2: '2', A3: '3' });

    expect(result).toBe(false);
    expect(parseGrid).toHaveBeenCalled();
    expect(isSolved).not.toHaveBeenCalled();
  });

  it('should call isSolved', () => {
    const result = isSolvableWithElimination({
      A1: '1',
      A2: '2',
      A3: '3',
      values: 'test'
    });

    expect(result).toBe(true);
    expect(parseGrid).toHaveBeenCalled();
    expect(isSolved).toHaveBeenCalled();
  });
});

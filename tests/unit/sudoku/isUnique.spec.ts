import conflictData from '../../helpers/conflictData';
import nonUniquePuzzle from '../../helpers/nonUniquePuzzle';

import isUnique from '@/sudoku/isUnique';
import * as solver from '@/sudoku/solve';

const { initial, solution } = conflictData;

describe('isUnique', () => {
  const mockSolve = jest.spyOn(solver, 'default');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return true for unique puzzle', () => {
    mockSolve.mockImplementation(() => solution);

    const values = { ...initial };

    const result = isUnique(values);

    expect(result).toBe(true);
    expect(mockSolve).toHaveBeenCalledTimes(2);
  });

  it('should return false if min-max solutions dont match', () => {
    mockSolve
      .mockImplementationOnce((v: any) => ({ ...v }))
      .mockImplementationOnce((v2: any) => ({
        ...v2,
        A1: '2',
        A6: '1'
      }));

    const values = { ...nonUniquePuzzle };

    const result = isUnique(values);

    expect(result).toBe(false);
    expect(mockSolve).toHaveBeenCalledTimes(2);
  });
});

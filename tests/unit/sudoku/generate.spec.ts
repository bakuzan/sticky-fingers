import conflictData from '../../helpers/conflictData';

import { Difficulty } from '@/sudoku/enums/Difficulty';
import generate from '@/sudoku/generate';
import * as solve from '@/sudoku/solve';

const { solution } = conflictData;

describe('generate', () => {
  jest.spyOn(console, 'log').mockImplementation(() => null);
  const mockSolve = jest.spyOn(solve, 'default');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return generated grid (default difficulty)', () => {
    mockSolve.mockImplementationOnce(() => solution);

    const result = generate();

    expect(result).not.toBe(null);
    expect(mockSolve).toHaveBeenCalledWith({});
  });

  it('should return generated grid (passed difficulty)', () => {
    mockSolve.mockImplementationOnce(() => solution);

    const result = generate(Difficulty.medium);

    expect(result).not.toBe(null);
    expect(mockSolve).toHaveBeenCalledWith({});
  });
});

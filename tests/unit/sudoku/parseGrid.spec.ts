import conflictData from '../../helpers/conflictData';

import parseGrid from '@/sudoku/parseGrid';

const { solution, initial } = conflictData;

describe('parseGrid', () => {
  it('should return values when values can be assigned', () => {
    const values = { ...solution };

    const result = parseGrid(values);

    expect(result).toEqual({ values });
  });

  it('should return failure when values cannot be assigned', () => {
    const values = { ...initial, A1: '2', A6: '2' };

    const result = parseGrid(values);

    expect(result).toEqual({ hasFailure: true });
  });
});

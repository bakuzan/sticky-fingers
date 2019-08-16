import conflictData from '../../helpers/conflictData';

import getConflicts from '@/sudoku/getConflicts';

const { initial, solution, scene1, scene2 } = conflictData;

describe('getConflicts', () => {
  it('should return no errors or mistakes', () => {
    const values = { ...initial };

    const result = getConflicts(solution, values);

    expect(result.errors.length).toEqual(0);
    expect(result.mistakes.length).toEqual(0);
  });

  it('should return with errors and mistakes', () => {
    const values = { ...initial, A8: '1' };

    const result = getConflicts(solution, values);

    expect(result.errors).toEqual(scene1.errors);
    expect(result.mistakes).toEqual(scene1.mistakes);
  });

  it('should return mistakes', () => {
    const values = { ...initial, H9: '1' };

    const result = getConflicts(solution, values);

    expect(result.errors).toEqual(scene2.errors);
    expect(result.mistakes).toEqual(scene2.mistakes);
  });

  // For the coverage
  it('should ignore undefineds', () => {
    const values = { ...initial, A1: undefined } as any;

    const result = getConflicts(solution, values);

    expect(result.errors.length).toEqual(0);
    expect(result.mistakes.length).toEqual(0);
  });
});

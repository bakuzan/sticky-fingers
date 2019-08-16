import permuations from '@/sudoku/utils/permuations';

describe('permuations', () => {
  it('should create every combo', () => {
    const result = permuations(['a', 'b'], ['c', 'd']);

    expect(result).toEqual(['ac', 'ad', 'bc', 'bd']);
  });
});

import isSolved from '@/sudoku/isSolved';

describe('isSolved', () => {
  it('should return true', () => {
    const result = isSolved({ A1: '1', A2: '2', A3: '3' });

    expect(result).toBe(true);
  });

  it('should return false', () => {
    const result = isSolved({ A1: '12', A2: '2', A3: '13' });

    expect(result).toBe(false);
  });
});

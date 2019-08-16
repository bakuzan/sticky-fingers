import difficultySquareCount from '@/sudoku/difficultySquareCount';
import { Difficulty } from '@/sudoku/enums/Difficulty';

describe('difficultySquareCount', () => {
  it('should return a number greater than 16', () => {
    Object.values(Difficulty).forEach((diff) => {
      const result = difficultySquareCount(diff);

      expect(typeof result === 'number').toBe(true);
      expect(result > 16).toBe(true);
    });
  });
});

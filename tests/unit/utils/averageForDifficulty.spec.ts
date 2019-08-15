import averageForDifficulty from '@/utils/averageForDifficulty';
import { Difficulty } from '@/sudoku/enums/Difficulty';

describe('averageForDifficulty', () => {
  const items = [
    {
      date: '',
      timeElapsedDisplay: '',
      datetime: 0,
      difficulty: Difficulty.easy,
      timeElapsed: 1
    },
    {
      date: '',
      timeElapsedDisplay: '',
      datetime: 0,
      difficulty: Difficulty.easy,
      timeElapsed: 2
    },
    {
      date: '',
      timeElapsedDisplay: '',
      datetime: 0,
      difficulty: Difficulty.easy,
      timeElapsed: 3
    },
    {
      date: '',
      timeElapsedDisplay: '',
      datetime: 0,
      difficulty: Difficulty.hard,
      timeElapsed: 10
    }
  ];

  it('should fall back to 0 if no data', () => {
    const diff = Difficulty.medium;
    const expected = '00m 00s';

    const result = averageForDifficulty(diff, items);

    expect(result.value).toEqual(expected);
  });

  it('should return correct average time', () => {
    const diff = Difficulty.easy;
    const expected = '00m 02s';

    const result = averageForDifficulty(diff, items);

    expect(result.value).toEqual(expected);
  });
});

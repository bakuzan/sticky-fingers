import { Difficulty } from '@/sudoku/enums/Difficulty';
import GameTimer from './GameTimer';

export default function averageForDifficulty(diff: Difficulty, items: any[]) {
  const diffItems = items.filter((x) => x.difficulty === diff);
  const avgTime =
    diffItems.reduce((p, c) => p + c.timeElapsed, 0) / diffItems.length;

  return {
    text: diff,
    value: GameTimer.formatTime(avgTime || 0)
  };
}

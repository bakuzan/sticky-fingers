import { Difficulty } from '@/sudoku/enums/Difficulty';

export interface GameResult {
  datetime: string;
  timeElapsed: number;
  difficulty: Difficulty;
}

import { Difficulty } from '@/sudoku/enums/Difficulty';

export interface GameResult {
  datetime: number;
  timeElapsed: number;
  difficulty: Difficulty;
}

export interface GameResultView extends GameResult {
  date: string;
  timeElapsedDisplay: string;
}

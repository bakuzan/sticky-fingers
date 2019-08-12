import { Difficulty } from '@/sudoku/enums/Difficulty';
import { GameResult } from './GameResult';

export interface SkfOptions {
  difficulty: Difficulty;
  history: GameResult[];
}

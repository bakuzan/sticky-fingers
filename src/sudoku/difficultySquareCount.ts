import { Difficulty } from './enums/Difficulty';

export default function difficultySquareCount(difficulty: Difficulty) {
  switch (difficulty) {
    case Difficulty.easy:
      return 35;
    case Difficulty.medium:
      return 28;
    case Difficulty.hard:
    default:
      return 20;
  }
}

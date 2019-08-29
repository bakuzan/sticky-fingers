import Store from 'ayaka/localStorage';
import { SkfOptions } from '@/interfaces/SkfOptions';
import { Difficulty } from '@/sudoku/enums/Difficulty';

export const optsStore = new Store<SkfOptions>('skfOptions', {
  difficulty: Difficulty.easy,
  history: []
});

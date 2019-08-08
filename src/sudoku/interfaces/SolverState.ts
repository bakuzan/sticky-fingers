import { SudokuGrid } from './SudokuGrid';

export interface SolverState {
  values?: SudokuGrid;
  hasFailure?: boolean;
}

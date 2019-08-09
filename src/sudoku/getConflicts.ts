import { SudokuGrid } from './interfaces/SudokuGrid';
import { SudokuError } from './interfaces/SudokuError';
import { UNITS } from './consts';

function findMistakes(solution: SudokuGrid, values: SudokuGrid) {
  return Object.keys(solution)
    .map((k) => (solution[k] !== values[k] && !!values[k] ? k : ''))
    .filter((x) => !!x);
}

export default function getConflicts(solution: SudokuGrid, values: SudokuGrid) {
  const errors: SudokuError[] = [];

  for (const key in values) {
    if (!values.hasOwnProperty(key)) {
      continue;
    }

    const value = values[key] + '';

    if (!value || value.length > 1) {
      continue;
    }

    for (const unit of UNITS[key]) {
      for (const otherKey of unit) {
        const otherValue = values[otherKey] + '';

        if (otherKey !== key && value === otherValue) {
          errors.push({
            unit,
            errorFields: [key, otherKey]
          });
        }
      }
    }
  }

  const mistakes = findMistakes(solution, values);

  return { errors, mistakes };
}

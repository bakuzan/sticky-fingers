import { SudokuGrid } from './interfaces/SudokuGrid';
import { UNITS } from './consts';

export default function getConflicts(values: SudokuGrid) {
  const errors = [];

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
  return errors;
}

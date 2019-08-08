import { UNITS } from './consts';

export default function getConflicts(values) {
  const errors = [];

  for (const key in values) {
    if (!values.hasOwnProperty(key)) {
      continue;
    }

    const value = values[key] + '';

    if (!value || value.length > 1) {
      continue;
    }

    for (const units of UNITS[key]) {
      const unit = units[i];

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

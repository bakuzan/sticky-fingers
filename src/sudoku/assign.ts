import eliminate from './eliminate';

export default function assign(values, s: string, d: string) {
  // Eliminate all the other values (except d) from values[s] and propagate.
  // Return values, except return false if a contradiction is detected.
  const otherValues: string = values[s].replace(d, '');

  if (otherValues.split('').every((d2) => eliminate(values, s, d2))) {
    return values;
  } else {
    return false;
  }
}

export default function isSolved(values) {
  for (const s in values) {
    if (values[s].length > 1) {
      return false;
    }
  }

  return true;
}

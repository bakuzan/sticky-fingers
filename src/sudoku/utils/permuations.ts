export default function permuations(a: string[], b: string[]) {
  const result = [];

  for (const av of a) {
    for (const bv of b) {
      result.push(av + bv);
    }
  }

  return result;
}

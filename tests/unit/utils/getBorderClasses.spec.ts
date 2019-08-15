import getBorderClasses from '@/utils/getBorderClasses';

describe('getBorderClasses', () => {
  it('should return correct classes for squares', () => {
    const squares = ['A1', 'I1', 'A9', 'I9', 'E5'];
    const expected = [
      'square--border_left square--border_top square--border-thick_top square--border-thick_left',
      'square--border_right square--border_top square--border-thick_top square--border-thick_right',
      'square--border_left square--border_bottom square--border-thick_bottom square--border-thick_left',
      'square--border_right square--border_bottom square--border-thick_bottom square--border-thick_right',
      ''
    ].map((x) => x.split(' ').filter((s) => !!s));

    const results = squares.map((sq) => getBorderClasses(sq));

    results.forEach((result, i) => expect(result).toEqual(expected[i]));
  });
});

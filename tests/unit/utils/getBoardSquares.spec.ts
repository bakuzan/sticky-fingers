import getBoardSquares from '@/utils/getBoardSquares';

describe('getBoardSquares', () => {
  it('should return array of all board squares', () => {
    const result = getBoardSquares();

    expect(result instanceof Array).toBe(true);
    expect(result.every((x) => typeof x === 'string')).toBe(true);
    expect(result.length).toEqual(81);
  });
});

import debug from '@/sudoku/utils/debug';

describe('debug', () => {
  const OLD_ENV = process.env;
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => null);

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;

    consoleSpy.mockReset();
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('should log', () => {
    process.env.NODE_ENV = 'development';

    debug('hello');

    expect(consoleSpy).toHaveBeenCalledWith('hello');
  });

  it('should not log', () => {
    process.env.NODE_ENV = 'production';

    debug('hello');

    expect(consoleSpy).not.toHaveBeenCalled();
  });
});

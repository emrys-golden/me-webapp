import logger from '../../utils/logger';

global.Date = function Date() {
  return {
    toUTCString: () => 'mock timestamp',
  };
};

global.console = {
  log: jest.fn(),
};

describe('logger tests', () => {
  it('should log messages', () => {
    logger('test message');
    expect(global.console.log).toHaveBeenCalledWith('mock timestamp: test message');
  });
});

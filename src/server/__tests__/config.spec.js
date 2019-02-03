import config from '../config';

jest.unmock('express');

describe('router config tests', () => {
  it('should be defined correctly', () => {
    expect(config).toMatchSnapshot();
  });

  config.forEach((route) => {
    describe(route.path, () => {
      it('should contain a valid path', () => {
        expect(route.path).toBeDefined();
        expect(route.path.charAt(0)).toBe('/');
        expect(route.path[route.path.length - 1]).not.toBe('/');
      });

      it('should contain a valid router', () => {
        expect(route.router).toBeDefined();
        expect(route.router).toBeInstanceOf(Function);
      });
    });
  });
});

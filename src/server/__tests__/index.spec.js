import express from 'express';
import logger from '../utils/logger';
import '../index';

jest.mock('express');

jest.mock('../utils/logger', () => jest.fn());

jest.mock('../utils/attachRoutes', () => () => 'mock router');

describe('index tests', () => {
  it('should attach the router to the API path', () => {
    expect(express.MockExpress.use).toHaveBeenCalledWith('/api/v1', 'mock router');
  });

  it('should listen on port 3002', () => {
    const port = express.MockExpress.listen.mock.calls[0][0];
    const callback = express.MockExpress.listen.mock.calls[0][1];

    expect(port).toBe(3002);
    expect(callback).toBeInstanceOf(Function);

    callback();

    expect(logger).toHaveBeenCalledWith('App listening on port 3002');
  });
});

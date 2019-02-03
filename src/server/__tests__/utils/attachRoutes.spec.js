import express from 'express';
import attachRoutes from '../../utils/attachRoutes';
import logger from '../../utils/logger';

jest.mock('express');

jest.mock('../../utils/logger', () => jest.fn());

describe('attachRoutes tests', () => {
  it('should attach all the routes', () => {
    attachRoutes(express.Router(), [{ path: '/path1', router: jest.fn() }]);
    expect(express.MockRouter.use).toHaveBeenCalled();
  });

  it('should handle errors attaching a route', () => {
    attachRoutes(express.Router(), [{}]);
    expect(logger).toHaveBeenCalledWith('Unable to attach route 0');
  });
});

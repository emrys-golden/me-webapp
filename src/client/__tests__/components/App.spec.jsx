import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

jest.mock('react', () => {
  const React = jest.requireActual('react');
  React.Suspense = ({ children }) => children;
  React.Suspense.displayName = 'Suspense';
  return React;
});

jest.mock('../../routes', () => ([
  {
    path: '/test',
    component: () => 'Test',
  },
]))

describe('App component tests', () => {
  it('should render correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});

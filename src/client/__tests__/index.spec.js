import { render } from 'react-dom';
import '../index';

jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

describe('client index tests', () => {
  it('should render the app', () => {
    expect(render).toHaveBeenCalled();
  });
});

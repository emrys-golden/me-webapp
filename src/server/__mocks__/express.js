const MockRouter = {
  use: jest.fn(),
  get: jest.fn(),
};

const MockExpress = {
  use: jest.fn(),
  listen: jest.fn(),
};

function express() {
  return MockExpress;
}

function Router() {
  return MockRouter;
}

express.MockExpress = MockExpress;

express.Router = Router;
express.MockRouter = MockRouter;
express.static = jest.fn();

module.exports = express;

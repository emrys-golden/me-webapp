import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../routes';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {
          routes.map(route => <Route key={route.path} {...route} />)
        }
      </Switch>
    </Suspense>
  </Router>
);

export default App;

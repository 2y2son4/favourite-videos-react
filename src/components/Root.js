import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import About from './About';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={List} />
      <Route exact path='/:id' component={Detail} />
      <Route exact path='/about' component={About} />
    </Switch>
  </HashRouter>
);

export default Root;

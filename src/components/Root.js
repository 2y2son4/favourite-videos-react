import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import About from './About';

const Root = () => (
  <BrowserRouter>
    <Route exact path='/' component={List} />
    <Route exact path='/about' component={About} />
    <Route exact path='/:id' component={Detail} />
  </BrowserRouter>
);

export default Root;

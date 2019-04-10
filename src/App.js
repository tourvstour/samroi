import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import PageIndex from './PageIndex'
import Person from './Person'
import question from './question'
import Sum from './Sum'

const App = () => (
  <Switch>
    <Route exact path="/" component={PageIndex} />
    <Route path="/main" component={Main} />
    <Route path="/person" component={Person} />
    <Route path="/question" component={question} />
    <Route path="/sum" component={Sum} />
  </Switch>
)

export default App;

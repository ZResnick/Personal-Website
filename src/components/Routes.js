import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={ContactMe} />
      </Switch>
    );
  }
}

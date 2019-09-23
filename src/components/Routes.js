import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Education from './pages/Education';
import ContactMe from './pages/ContactMe';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/home" component={Projects} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={ContactMe} />
        <Route exact path="/education" component={Education} />
        <Route component={Projects} />
      </Switch>
    );
  }
}

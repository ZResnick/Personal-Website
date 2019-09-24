import React from 'react';
import { Router } from 'react-router-dom';
import history from './history';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/mainPage" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;

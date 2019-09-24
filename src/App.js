import React from 'react';
import { Router } from 'react-router-dom';
import history from './history';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Home from './components/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import ContactMe from './components/pages/ContactMe';
import { Route, Switch } from 'react-router-dom';

function App() {
  console.log(
    "If you're reading this, it means you may be in a position to hire software developers!  If so, please feel free to reach out to me at Zachary.L.Resnick@Gmail.com, as I'm always open to discussing new opportunities.  Thanks for visiting my site!"
  );
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={MainPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    </Router>
  );
}

export default App;

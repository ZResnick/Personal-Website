import React from 'react';
import { Router } from 'react-router-dom';
import history from './history';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <MainPage />
      </div>
    </Router>
  );
}

export default App;

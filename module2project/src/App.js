import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/pages/Books';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Home' exact component={Home} />
          <Route path='/Books' component={Books} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
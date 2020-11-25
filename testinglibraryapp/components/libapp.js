import React from 'react';
import Narbar from '../components/navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './'libapp.css';

function libapp(){

    function App() {
        return (
          <>
            <Router>
              <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Shakespeare' component={Shakespeare} />
              </Switch>
            </Router>
          </>
        );
      }}
      
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1 className="App-logo" alt="logo">brewDB</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);


export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import HomePage from './pages/homepage/homepage.component';



const HatsPage = (props) => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='shop/hats' component={HatsPage} />
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


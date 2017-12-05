import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory,withRouter} from 'react-router';
import Login from './containers/Login/Login';
import Content from './containers/Content/Content';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={withRouter(Content)}>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="/login" component={Login}/>
  </Router>
  ),
  document.getElementById('root')
);

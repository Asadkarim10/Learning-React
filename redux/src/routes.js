import React, { Component } from 'react';
import Home from "./container/home"
import About from "./container/about";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Routes;

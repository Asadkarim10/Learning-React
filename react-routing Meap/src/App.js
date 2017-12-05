
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <h1 >BASIC REACT ROUTING </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact ">Contact</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/Contact " component={Contact}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>You Are At  About</h2>
  </div>
)

const Contact = () => (
  <div>
    <h3>fee free to Contact Us</h3>
    </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Area To Study</h2>
    <ul>
      <li>
        <Link to={`${match.url}/React with redux`}>
        React Redux
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/React-components`}>
          Components
        </Link>
      </li>
    </ul>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample
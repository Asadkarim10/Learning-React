import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import Logger from './logger.js'


class Content extends React.Component {
  constructor(props) {
  super(props)
  this.launchClock()
  this.state = {
  counter: 0,
  currentTime: (new Date()).toLocaleString()
  }
  }
  launchClock() {
  setInterval(()=>{
  this.setState({
  counter: ++this.state.counter,
  currentTime: (new Date()).toLocaleString()
  })
  }, 1000)
  }
  render() {
  if (this.state.counter > 2) return <div/>
  return <Logger time={this.state.currentTime}></Logger>
  }
  }

export default Content;

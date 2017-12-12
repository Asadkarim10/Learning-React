import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.State= {
      counter: 0
    }
  }
  inCrement(e){ 
  this.setState({
    counter: this.state.counter + 1
  });
  
}
 
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
     <h2>{this.state.counter}</h2> 
             <button onClick={this.inCrement.bind(this)}>Add Counter</button>
      </div>
    );
  }
}

export default App;

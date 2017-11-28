import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentRecord from './studentRecord';
import Events from './events.js';


class App extends Component {
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
         <Events />
         
          

       </div>
    );
  }
}

export default App; 

// class Clock extends React.Component {
//   constructor(props) {
//   super(props)
//   this.launchClock() 
//   this.state = {
//   currentTime: (new Date()).toLocaleString() 
//   }
//   }
//   launchClock() {
//   setInterval(()=>{
//   console.log('Updating time...')
//   this.setState({
//   currentTime: (new Date()).toLocaleString() 
//   })
//   }, 1000) 
//   }
//   render() {
//   console.log('Rendering Clock...')
//   return <div>{this.state.currentTime}</div>
//   }
// }
// export default Clock;


//event  practice 


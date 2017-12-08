import React, { Component } from 'react';
import logo from './logo.svg';
import * as firebase from 'firebase';
import './App.css';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import GridListExampleSimple from './abc.js';
import TextField from 'material-ui/TextField';

const ref = firebase.database().ref();


class App extends Component {

  constructor() {
    super();
    this.state = {
      todo: '',
      allTodos:[]
    }
  }

  componentDidMount() {
    const self = this;
    // ref.child("newtodo").on("value", function(wayn) {
       ref.on("value", function(snapshot) {
      const data = snapshot.val();
      if(data){
        let allTodos = [];
        for(let key in data){
          allTodos.push(data[key])
        }
        self.setState({allTodos:allTodos})
  
      }
    })
  }

  delete(data){
    const newState = this.state.allTodos;
    if (newState.indexOf(data) > -1) {
      newState.splice(newState.indexOf(data), 1);
      this.setState({allTodos: newState})
    }
  }

  changeHandler(event) {
    this.setState({todo: event.target.value})
  }

  save() {
    //ref.child("newtodo").push({name: this.state.todo});
    ref.push({name: this.state.todo});
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React / Firebase Integration</h1>
          </header>
          <input type="text" value={this.state.todo} onChange={this.changeHandler.bind(this)} /> <br /><br />
          <button onClick={this.save.bind(this)}>Submit</button>
          <ul>
            {this.state.allTodos.map((data, index) => {
            
             return <li key={index}>{data.name} <button onClick={this.delete.bind(this, data)}>Delete</button></li>
            })}
          </ul>
      </div>
    );
  }
}

export default App;
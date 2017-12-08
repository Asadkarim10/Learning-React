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
    ref.child("myTodo").on("value", function(wayn) {
      const data = wayn.val();
      if(data){
        let allTodos = [];
        for(let key in data){
          allTodos.push(data[key])
        }
        self.setState({allTodos:allTodos})
  
      }
    })
  }

  changeHandler(event) {
    this.setState({todo: event.target.value})
  }

  save() {
    ref.child("myTodo").push({name: this.state.todo});
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
              console.log(data);
             return <li key={index}>{data.name}</li>
            })}
          </ul>
      </div>
    );
  }
}

export default App;
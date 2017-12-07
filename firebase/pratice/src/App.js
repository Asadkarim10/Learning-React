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
  constructor(props){
    super(props)
    this.state= {
      todo: "",
      password: ""
    };
  }

 
componentDidMount(){      //read data from firebase 
  ref.child("newtodos").once("value", function(snapshot) {
    const data = snapshot.val();
    console.log(data); 
  } )
}

changeHandler(event){
  this.setState({todo: event.target.value})

}

changeHandler(event){
  this.setState({password: event.target.value})

}
save(){
  ref.child("newtodos").push({todo :this.state.todo})
}

  render() {
    return (
      <div className="App">
        <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <TextField
      hintText="Text"
      floatingLabelText="Enter Your Name"
      floatingLabelFixed={false}
      onChange={this.changeHandler.bind(this)}
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
      onChange={this.changeHandler.bind(this)}
    /><br />  
     <RaisedButton label="Submit" primary={true} onClick={this.save.bind(this)} />

</div>
    ) }
  
}
export default App;

import React, { Component } from 'react';
import { myStore } from './store/store';
import { connect } from 'react-redux';
import { setTimeout } from 'timers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }
  }
  changeHandler(e) {
    this.setState({ value: e.target.value })
  }
  Increment() {
    myStore.dispatch({ type: "INCREMENT", payload: Number(this.state.value) })
  }
  Decrement() {
    myStore.dispatch({ type: "DECREMENT", payload: Number(this.state.value) })
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.counter}
        <input type="text" onChange={this.changeHandler.bind(this)} value={this.state.value}/>
        <button onClick={this.Increment.bind(this)}> Increment </button>
        <button onClick={this.Decrement.bind(this)}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter,
    abc:state.arr
  }
}

export default connect(mapStateToProps, null)(App);


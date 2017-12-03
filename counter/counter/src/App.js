import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
  <AppBar
    title="React IncreMent And DecreMent Counter"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
        <FlatButton secondary={true}  onClick={this.IncrementItem}>Click to increment by 1</FlatButton>
        <FlatButton secondary={true}  onClick={this.DecreaseItem}>Click to decrease by 1</FlatButton>
        <FlatButton secondary={true}  onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </FlatButton>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;
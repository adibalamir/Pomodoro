import React, { Component } from 'react';
import '../assets/css/StartButton.css';

class StartButton extends Component {
  render() {
    return (
      <div id="start">
      <button onClick={this.props.start} >Start</button>
      </div>
    )
  }
}

export default StartButton
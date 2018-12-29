import React, { Component } from 'react';
import '../assets/css/StopButton.css';

class StopButton extends Component {
  render() {
    return (
      <div id="stop">
      <button onClick={this.props.stop} >Stop</button>
      </div>
    )
  }
}

export default StopButton
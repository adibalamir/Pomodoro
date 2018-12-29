import React, { Component } from 'react';
import '../assets/css/ResetButton.css';

class ResetButton extends Component {
  render() {
    return (
      <div id="reset">
      <button onClick={this.props.reset} >Reset</button>
      </div>
    )
  }
}

export default ResetButton
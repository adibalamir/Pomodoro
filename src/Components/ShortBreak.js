import React, { Component } from 'react';
import '../assets/css/ShortBreak.css';

class ShortBreak extends Component {
  render() {
    return (
      <div id="shorbreak">
      <button onClick={this.props.shortBreak} >Short Break</button>
      </div>
    )
  }
}

export default ShortBreak
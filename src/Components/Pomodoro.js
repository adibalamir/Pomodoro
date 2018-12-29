import React, { Component } from 'react';
import '../assets/css/Pomodoro.css';

class Pomodoro extends Component {
  render() {
    return (
      <div id="pomodoro">
      <button onClick={this.props.pomodoro} >Pomodoro</button>
      </div>
    )
  }
}

export default Pomodoro
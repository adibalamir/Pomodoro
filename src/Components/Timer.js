import React, { Component } from 'react';
import '../assets/css/Timer.css';

class Timer extends Component {
  render() {
    if (this.props.seconds < 10 && this.props.minutes < 10) {
      return (
        <div>
          <h1 id="timer">0{this.props.minutes}:0{this.props.seconds}</h1>
        </div>
      )
    } else if (this.props.seconds < 10) {
      return (
        <div>
          <h1 id="timer">{this.props.minutes}:0{this.props.seconds}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1 id="timer">{this.props.minutes}:{this.props.seconds}</h1>
        </div>
      )
    }
  }
}

export default Timer
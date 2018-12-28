import React, { Component } from 'react';

class Timer extends Component {
  render() {
    if (this.props.seconds < 10) {
      return (
        <div>
          <h1>{this.props.minutes}:0{this.props.seconds}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>{this.props.minutes}:{this.props.seconds}</h1>
        </div>
      )
    }
  }
}

export default Timer
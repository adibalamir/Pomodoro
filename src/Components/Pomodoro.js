import React, { Component } from 'react';

class Pomodoro extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.pomodoro} >Pomodoro</button>
      </div>
    )
  }
}

export default Pomodoro
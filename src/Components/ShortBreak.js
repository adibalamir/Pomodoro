import React, { Component } from 'react';

class ShortBreak extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.shortBreak} >Short Break</button>
      </div>
    )
  }
}

export default ShortBreak
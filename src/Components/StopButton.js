import React, { Component } from 'react';

class StopButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.stop} >Stop</button>
      </div>
    )
  }
}

export default StopButton
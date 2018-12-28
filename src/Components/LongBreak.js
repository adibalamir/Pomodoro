import React, { Component } from 'react';

class LongBreak extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.longBreak} >Long Break</button>
      </div>
    )
  }
}

export default LongBreak
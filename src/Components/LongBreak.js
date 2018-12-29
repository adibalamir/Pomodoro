import React, { Component } from 'react';
import '../assets/css/LongBreak.css';

class LongBreak extends Component {
  render() {
    return (
      <div id="longbreak">
      <button onClick={this.props.longBreak} >Long Break</button>
      </div>
    )
  }
}

export default LongBreak
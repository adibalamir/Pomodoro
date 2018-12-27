import React, { Component } from 'react';
import './App.css';

// class TimerInput extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

class Timer extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.minutes}:{this.props.seconds}</h1>
      </div>
    )
  }
}

class TimerControls extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.start} >Start</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 125
    }
  }

  updateTime = () => {
    return this.setState({
      time: this.state.time - 1
    })
  }

  start = () => {
    setInterval(
      this.updateTime,
      1000
    )
  }

  render() {
    return (
      <div className="App">
        <header>Pomodoro</header>
        <Timer minutes={Math.floor(this.state.time / 60)} seconds={this.state.time % 60} />
        <TimerControls start={this.start} />
      </div>
    );
  }
}

export default App;

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

class StartButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.start} >Start</button>
      </div>
    )
  }
}

class StopButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.stop} >Stop</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 125,
      countDown: ''
    }
    this.updateTime = this.updateTime.bind(this)
    this.start = this.start.bind(this)
    // this.stop = this.stop.bind(this)
  }

  updateTime = () => {
    return this.setState({
      time: this.state.time - 1
    })
  }

  start = () => {
    let countdown = setInterval(this.updateTime, 1000)
    this.setState({
      countDown: countdown
    })
  }

  stop = (countDown) => {
    clearInterval(countDown)
    console.log('hello?')
  }

  render() {
    return (
      <div className="App">
        <header>Pomodoro</header>
        <Timer minutes={Math.floor(this.state.time / 60)} seconds={this.state.time % 60} />
        <StartButton start={this.start} />
        <StopButton stop={ () => clearInterval(this.state.countDown)} />
      </div>
    );
  }
}

export default App;

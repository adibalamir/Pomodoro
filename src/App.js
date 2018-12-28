import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer'
import StartButton from './Components/StartButton'
import StopButton from './Components/StopButton'

// class TimerInput extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 1500,
      countDownId: '',
      intervalInProgress: false
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
    if (this.state.intervalInProgress === false) {
      let id = setInterval(this.updateTime, 1000)
      this.setState({
        countDownId: id,
        intervalInProgress: true
      })
    }
  }

  stop = () => {
    if (this.state.intervalInProgress === true) {
      clearInterval(this.state.countDownId)
      this.setState({
        intervalInProgress: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header>Pomodoro</header>
        <Timer minutes={Math.floor(this.state.time / 60)} seconds={this.state.time % 60} />
        <StartButton start={this.start} />
        <StopButton stop={this.stop} />
      </div>
    );
  }
}

export default App;

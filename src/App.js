import React, { Component } from 'react';
import './App.css';
import Pomodoro from './Components/Pomodoro'
import ShortBreak from './Components/ShortBreak'
import LongBreak from './Components/LongBreak'
import Timer from './Components/Timer'
import StartButton from './Components/StartButton'
import StopButton from './Components/StopButton'
import Reset from './Components/Reset'

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
      intervalInProgress: false,
      resetTime: 1500
    }
  }

  pomodoro = () => { return this.setState({time: 1500, resetTime: 1500}) }

  shortBreak = () => { return this.setState({time: 300, resetTime: 300}) }

  longBreak = () => { return this.setState({time: 600, resetTime: 600}) }

  start = () => {
    if (this.state.intervalInProgress === false) {
      let id = setInterval(this.updateTime, 1000)
      this.setState({
        countDownId: id,
        intervalInProgress: true
      })
    }
  }

  updateTime = () => { return this.setState({ time: this.state.time - 1 }) }

  stop = () => {
    if (this.state.intervalInProgress === true) {
      clearInterval(this.state.countDownId)
      this.setState({ intervalInProgress: false })
    }
  }

  reset = () => { return this.setState({ time: this.state.resetTime }) }

  render() {
    return (
      <div className="App">
        <Pomodoro pomodoro={this.pomodoro} />
        <ShortBreak shortBreak={this.shortBreak} />
        <LongBreak longBreak={this.longBreak} />
        <Timer minutes={Math.floor(this.state.time / 60)} seconds={this.state.time % 60} />
        <StartButton start={this.start} />
        <StopButton stop={this.stop} />
        <Reset reset={this.reset} />
      </div>
    );
  }
}

export default App;

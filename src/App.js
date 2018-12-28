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
  }

  pomodoro = () => { return this.setState({time: 1500}) }

  shortBreak = () => { return this.setState({time: 300}) }

  longBreak = () => { return this.setState({time: 600}) }

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

  render() {
    return (
      <div className="App">
        <button onClick={this.pomodoro}>Pomodoro</button>
        <button onClick={this.shortBreak}>Short Break</button>
        <button onClick={this.longBreak}>Long Break</button>
        <Timer minutes={Math.floor(this.state.time / 60)} seconds={this.state.time % 60} />
        <StartButton start={this.start} />
        <StopButton stop={this.stop} />
      </div>
    );
  }
}

export default App;

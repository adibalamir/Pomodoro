import React, { Component } from 'react'
import './assets/css/App.css';
import Pomodoro from './Components/Pomodoro'
import ShortBreak from './Components/ShortBreak'
import LongBreak from './Components/LongBreak'
import Timer from './Components/Timer'
import StartButton from './Components/StartButton'
import StopButton from './Components/StopButton'
import ResetButton from './Components/ResetButton'
import EditAlarm from './Components/EditAlarm'
import alarm from './assets/sound/timerSound.wav'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 1500,
      countDownId: '',
      intervalInProgress: false,
      resetTime: 1500,
      minutesInput: '',
      secondsInput: ''
    }
  }

  componentWillUpdate() {
    if (this.state.time === 1) {
      this.playAudio(alarm)
      this.stop()
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

  changeMinutes = (event) => {
    this.setState({
      minutesInput: event.target.value
    })
  }

  changeSeconds = (event) => {
    this.setState({
      secondsInput: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      time: parseInt((this.state.minutesInput * 60), 10) + parseInt((this.state.secondsInput), 10),
      resetTime: (this.state.minutesInput * 60) + (this.state.secondsInput)
    })
  }

  playAudio = (url) => {
    let audio = new Audio(url)
    audio.play()
  }

  render() {
    return (
      <div className="App">
        <Pomodoro pomodoro={this.pomodoro} />
        <ShortBreak shortBreak={this.shortBreak} />
        <LongBreak longBreak={this.longBreak} />
        <Timer minutes={Math.floor(this.state.time / 60)} seconds={this.state.time % 60} />
        <StartButton start={this.start} />
        <StopButton stop={this.stop} />
        <ResetButton reset={this.reset} />
        <EditAlarm minutes={this.state.minutesInput} seconds={this.state.secondsInput} submit={this.handleSubmit} changeMinutes={this.changeMinutes} changeSeconds={this.changeSeconds} />
      </div>
    );
  }
}

export default App;

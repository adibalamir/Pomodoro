import React, { Component } from 'react'
import './App.css';
import Pomodoro from './Components/Pomodoro'
import ShortBreak from './Components/ShortBreak'
import LongBreak from './Components/LongBreak'
import Timer from './Components/Timer'
import StartButton from './Components/StartButton'
import StopButton from './Components/StopButton'
import Reset from './Components/Reset'
import alarm from './timerSound.wav'

// class EditAlarm extends Component {
//   render() {
//     return (
//       <div>
//         <input value={this.props.minutes}/>
//         <input value={this.props.seconds}/>
//         <button onClick={this.props.submit}>Submit</button>
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
      resetTime: 1500,
      minutesInput: '',
      secondsInput: ''
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
    console.log(typeof(this.state.time))
  }

  playAudio = (url) => {
    let audio = new Audio(url)
    audio.play()
  }

  render() {
    if (this.state.time === 0) {
      this.playAudio(alarm)
      this.stop()
    }
    return (
      <div className="App">
        <Pomodoro pomodoro={this.pomodoro} />
        <ShortBreak shortBreak={this.shortBreak} />
        <LongBreak longBreak={this.longBreak} />
        <Timer minutes={Math.floor(this.state.time / 60)} seconds={this.state.time % 60} />
        <StartButton start={this.start} />
        <StopButton stop={this.stop} />
        <Reset reset={this.reset} />
        <input value={this.state.minutesInput} onChange={this.changeMinutes} />
        <input value={this.state.secondsInput} onChange={this.changeSeconds} />
        <button onClick={this.handleSubmit}>Submit</button>
        {/* <EditAlarm minutes={Math.floor(this.state.time / 60)} seconds={this.state.time % 60} submit={this.handleSubmit} /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import '../assets/css/EditAlarm.css';

class EditAlarm extends Component {
  render() {
    return (
      <div className="editAlarmContainer">
        <h2 className="editHeader">Edit Timer</h2>
        <div className="minutes">
          <p>Minutes: </p>
          <input value={this.props.minutes} onChange={this.props.changeMinutes} />
        </div>
        <div className="seconds">
          <p>Seconds: </p>
          <input value={this.props.seconds} onChange={this.props.changeSeconds} />
        </div>
        <button className="editButton" onClick={this.props.submit}>Edit</button>
      </div>
    )
  }
}

export default EditAlarm
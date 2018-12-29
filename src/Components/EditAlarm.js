import React, { Component } from 'react'

class EditAlarm extends Component {
  render() {
    return (
      <div>
        <input value={this.props.minutes} onChange={this.props.changeMinutes} />
        <input value={this.props.seconds} onChange={this.props.changeSeconds} />
        <button onClick={this.props.submit}>Submit</button>
      </div>
    )
  }
}

export default EditAlarm
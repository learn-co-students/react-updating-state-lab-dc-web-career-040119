// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor (props) {
    super(props)
    this.state = { timesClicked: 0 }
  }

  incrementCounter = event => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render () {
    return (
      <button onClick={this.incrementCounter}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker

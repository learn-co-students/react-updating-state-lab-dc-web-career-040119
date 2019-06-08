// Code DigitalClicker Component Here
import React from 'react'


class DigitalClicker extends React.Component{

  constructor(){
    super()
    this.state= {
      timesClicked : 0
    }
  }

  handleClicked = e => {
    let newTime = this.state.timesClicked + 1
    this.setState({
      timesClicked :newTime
    })
  }

  render(){
    return (
      <div>
        This insider DigitalClicker
        <button onClick={this.handleClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker

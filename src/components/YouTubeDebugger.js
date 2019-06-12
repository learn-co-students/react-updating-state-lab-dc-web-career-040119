// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = event => {
    this.setState({
      settings: { ...this.state.settings, bitrate: 12 }
    })
  }

  changeResoultion = event => {
    this.setState({
      settings: { ...this.state.settings, video: { resolution: '720p' } }
    })
  }

  render () {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}></button>
        <button className="resolution" onClick={this.changeResoultion}></button>
      </div>
    )
  }
}

export default YouTubeDebugger

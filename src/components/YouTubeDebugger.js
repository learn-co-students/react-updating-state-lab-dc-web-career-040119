// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
//
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.

// Unsure how to use the spread operator twice (?)
// Problem: navigating deeply enough while holding onto the other branches

import React, { Component } from 'react'
export default class YouTubeDebugger extends Component {
  constructor() {
    super()
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

  handleBitrate = (event) => {
    this.setState({
      settings: {
        ...this.state.settings, bitrate: 12
      }
    }, () => console.log(this.state.settings.bitrate))
  }

  handleResolution = (event) => {
    this.setState({
      settings: {
          ...this.state.settings,
        video: {
          ...this.state.settings.video, resolution: '720p'
      }
    }
  }, () => console.log(this.state) )
}


  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>

        <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
      </div>
    )
  }
}

// navigate to the parent level of what you want to edit.
// Spread this.state(parent Level), data: "you want to change"

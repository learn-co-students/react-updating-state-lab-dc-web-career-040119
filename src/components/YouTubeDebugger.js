// Code YouTubeDebugger Component Here
import React from 'react'


class YouTubeDebugger extends React.Component{
  constructor(){
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

  handleBitRate= e => {
    let newBitRate= this.state.settings['bitrate'] + 4
    this.setState({
      settings : {...this.state.settings, bitrate : 12}
    })
  }

  handleResolution= e => {
    this.setState({
      settings :Object.assign({}, {...this.state.settings, video: {...this.state.settings.video, resolution : '720p'}})
    })
  }

  render(){
    return (
      <div>
        <button className= "bitrate" style={{padding: 10}} onClick={this.handleBitRate}>Increase Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger

import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  addClick = () => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }


  render() {
    return (
      <div>
        <button onClick={this.addClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

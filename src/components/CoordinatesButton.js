import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  
  handleButtonClick = (event) => {
    let coords = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coords)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleButtonClick}>Hello there, I'm a button</button>
      </div>
    )
  }
}

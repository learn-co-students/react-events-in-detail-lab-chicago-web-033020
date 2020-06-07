// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

  render() {
    return (
      <div>
        <button onClick={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}>Coordinates Button</button>
      </div>
    )
  }
}

export default CoordinatesButton

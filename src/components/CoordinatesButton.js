import React from 'react';

class CoordinatesButton extends React.Component {

  dealWithClick = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])

  render(){
    return (
      <button onClick={this.dealWithClick}>
        Coordinates
      </button>
    )
  }
}

export default CoordinatesButton

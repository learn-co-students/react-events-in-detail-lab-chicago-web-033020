import React from 'react'

export default class CoordinatesButton extends React.Component {
    
    mouseCoordinates = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render() {
        return (
            <button onClick={this.mouseCoordinates}>Coordinates</button>
        )
    }
}
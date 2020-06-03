// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
    constructor() {
        super()
    }

    mouseCoordinates = (event) => {
        let coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={this.mouseCoordinates}>CoordinatesButton</button>
        )
    }
}

export default CoordinatesButton
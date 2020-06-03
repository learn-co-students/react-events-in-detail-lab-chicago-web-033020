// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {
    constructor() {
        super()
    }

    clickHandler = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }

    render() {
        // console.log(this.props)
        return (
            <button onClick={this.clickHandler}>DelayedButton</button>
        )
    }
}

export default DelayedButton
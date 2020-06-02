// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

  handleDelay = (event) => {
    event.persist()
    window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return <button onClick= {this.handleDelay}>Delayed Button</button>
  }
}

export default DelayedButton
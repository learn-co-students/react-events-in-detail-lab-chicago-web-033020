import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleDelayedButtonClick = (event) => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return(
      <div>
        <button onClick={this.handleDelayedButtonClick}>Hello there, I'm a delayed button</button>
      </div>
    )
  }
}

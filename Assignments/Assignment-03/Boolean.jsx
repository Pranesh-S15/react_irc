import React, { useState } from 'react';

class BooleanComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <p>Toggle State: {this.state.isToggleOn ? 'On' : 'Off'}</p>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Batman' : 'Joker'}
        </button>
      </div>
    );
  }
}

export default BooleanComponent;

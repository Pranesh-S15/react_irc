import React, { useState } from 'react';

class StringComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringValue: 'Initial Value',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({
      stringValue: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <label>
          Input String:
          <input
            type="text"
            value={this.state.stringValue}
            onChange={this.handleInputChange}
          />
        </label>
        <p>Current String Value: {this.state.stringValue}</p>
      </div>
    );
  }
}

export default StringComponent;

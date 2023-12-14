import React, { useState } from 'react';

class ObjectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        Name: 'Pranesh S',
        age: 20,
      },
    };

    // Binding the handleInputChange method to the current instance
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Event handler to update the object state based on user input
  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <label>
           Name:
          <input
            type="text"
            name="Name"
            value={user.Name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <div>
          <p>User Information:</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Age: {user.age}</p>
        </div>
      </div>
    );
  }
}

export default ObjectComponent;

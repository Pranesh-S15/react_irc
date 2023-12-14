import React, { useState } from 'react';

class ArrayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'],
      newItem: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  handleInputChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }
  handleAddItem() {
    this.setState((prevState) => ({
      items: [...prevState.items, prevState.newItem],
      newItem: '', 
    }));
  }

  render() {
    const { items, newItem } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <label>
          New Item:
          <input
            type="text"
            value={newItem}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.handleAddItem}>Add Item</button>
      </div>
    );
  }
}

export default ArrayComponent;

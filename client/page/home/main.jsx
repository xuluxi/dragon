import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    var text = 'Count is:'+this.state.count;
    return (
      <div>
        <span onClick={() => { this.setState({count: (this.state.count + 1)})} }>+</span>
        {text}
        <span onClick={() => { this.setState({count: (this.state.count - 1)})} }>-</span>
      </div>)
   }
}

export default Counter;

import React from 'react';
import { render } from 'react-dom';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'alert'
    }
  }
  render() {
    return (
      <div>
        {this.props.content}
      </div>)
   }
};
export default Alert;

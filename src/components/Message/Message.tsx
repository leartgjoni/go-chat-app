import React, { Component } from 'react';
import './Message.css';

class Message extends Component<{ message: { data: string; name: string } }> {
  render() {
    return (
      <div className="Message">
        <b>{this.props.message.name}</b>: {this.props.message.data}
      </div>
    );
  }
}

export default Message;

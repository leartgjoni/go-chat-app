import React, { Component } from 'react';
import './Message.css';

class Message extends Component<{ message: { body: string } }> {
  render() {
    return <div className="Message">{this.props.message}</div>;
  }
}

export default Message;

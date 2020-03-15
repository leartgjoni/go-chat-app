// @ts-nocheck
import React, { Component } from 'react';
import './Message.css';

class Message extends Component<{ message: { data: string; userId: string } }> {
  render() {
    const { message } = this.props;
    console.log(message, window.users);

    return (
      <div className="Message">
        <b>
          {window.users[message.userId]
            ? window.users[message.userId].name
            : 'left-user'}
        </b>
        : {this.props.message.data}
      </div>
    );
  }
}

export default Message;

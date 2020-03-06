import React, { Component } from 'react';
import Message from '../Message';
import './ChatHistory.css';

class ChatHistory extends Component<{ chatHistory: Array<any> }> {
  render() {
    const messages = this.props.chatHistory.map(msg => (
      <Message key={msg} message={msg} />
    ));

    return (
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;

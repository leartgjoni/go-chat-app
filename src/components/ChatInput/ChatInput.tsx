import React, { Component } from 'react';
import './ChatInput.css';

class ChatInput extends Component<{ send: any }> {
  render() {
    return (
      <div className="ChatInput">
        <input onKeyDown={this.props.send} />
      </div>
    );
  }
}

export default ChatInput;

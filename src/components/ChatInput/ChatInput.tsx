import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
position: -webkit-sticky; /* Safari */
position: sticky;
bottom: 0;

input {
  padding: 20px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  width: 75%;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-left: 20px;
}
`;


class ChatInput extends Component<{ send: any }> {
  render() {
    return (
      <Wrapper>
        <input placeholder = "Type a message..." onKeyDown={this.props.send} />
      </Wrapper>
    );
  }
}

export default ChatInput;

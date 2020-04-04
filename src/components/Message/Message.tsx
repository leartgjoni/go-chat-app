// @ts-nocheck
import React, { Component } from 'react';
import styled from 'styled-components';

const MessageDiv = styled.div`   
  color: white;
  padding: 20px 18px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 30px;
  position: relative;
  background-color: #fff;
  width: 500px;
  margin-top: 20px;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  color: #808080;
  //margin-right: ${props => props.myMessage ? '0' : '9%'};
  margin-left: ${props => props.myMessage ? '40%' : '0'};

  &::after {
    bottom: 100%;
    left: ${props => props.myMessage ? '93%' : '7%'};
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px;
  
}
`;

const UserName = styled.span`
  font-style: italic;
  font-weight: 600;
`;

const MessageText = styled.span`
font-family: 'Cookie', cursive;
font-size: 26px;
`;

class Message extends Component<{ message: { data: string; userId: string } }> {
  render() {
    const { message } = this.props;
    console.log(message, window.users);
    const myMessage = window.users[message.userId].name === 'erjola' ? true : false

    return (
      <MessageDiv myMessage={myMessage}>
        <UserName>
          {window.users[message.userId]
            ? window.users[message.userId].name
            : 'left-user'}
        </UserName>
        : <MessageText>{this.props.message.data}</MessageText>
      </MessageDiv>
    );
  }
}

export default Message;

import React, { Component, useRef } from 'react';
import styled from 'styled-components';
import Message from '../Message';

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 88vh;
  padding: 0 30px;
`;

const RoomName = styled.div`

background-color: #000;
background-color: rgba(255,255,255,0.3);
opacity: 0.2;
padding: 30px;
`;

class ChatHistory extends Component<{ chatHistory: Array<any> }> {

  // let messagesEndRef = useRef(null);

  // let scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  // }

  // useEffect(scrollToBottom, [messages]);

  render() {
    const messages = this.props.chatHistory.map(msg => (
      <Message key={msg.data} message={msg} />
    ));
    // <div ref={messagesEndRef} />


    return (
      <Wrapper>
        {/* <RoomName>Chat History</RoomName> */}
        {messages}
        </Wrapper>
    );
  }
}

export default ChatHistory;

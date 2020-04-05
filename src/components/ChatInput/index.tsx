import React from 'react';
import { Wrapper } from './styled';

const ChatInput = ({ send }: { send: any }) => {
  return (
    <Wrapper>
      <input placeholder="Type a message..." onKeyDown={send} />
    </Wrapper>
  );
};

export default ChatInput;

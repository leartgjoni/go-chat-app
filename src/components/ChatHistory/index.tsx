import React, { useRef, useEffect } from 'react';
import Message from '../Message';
import { Wrapper } from './styled';

const ChatHistory = ({
  userId,
  users,
  chatHistory
}: {
  userId: string;
  users: Record<string, any>;
  chatHistory: Array<{ data: string; userId: string; name: string }>;
}) => {
  let messagesEndRef = useRef<any>(null);

  let scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [chatHistory]);

  return (
    <Wrapper>
      {chatHistory.map(msg => {
        return (
          <Message
            key={Math.random()
              .toString(36)
              .substring(7)}
            message={msg.data}
            userName={msg.name}
            own={msg.userId === userId}
          />
        );
      })}
      <div ref={messagesEndRef} />
    </Wrapper>
  );
};

export default ChatHistory;

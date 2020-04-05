import React from 'react';
import { MessageDiv, UserName, MessageText } from './styled';

const Message = ({
  message,
  userName,
  own
}: {
  message: string;
  userName: string;
  own: boolean;
}) => {
  return (
    <MessageDiv myMessage={own}>
      <UserName>{userName}</UserName>: <MessageText>{message}</MessageText>
    </MessageDiv>
  );
};

export default Message;

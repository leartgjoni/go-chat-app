import React, { useState, useEffect } from 'react';
import { getSocket, sendMsg } from '../../socket';

import ChatHistory from '../../components/ChatHistory';
import ChatInput from '../../components/ChatInput';
import { Wrapper, MessageDiv, ChatInputWrapper } from './styled';
import { Chat } from '../../types';
import { RoomSidebar } from '../../components/RoomSidebar';

const Room = ({ chat }: { chat: Chat }) => {
  const [state, setState] = useState<{
    users: Record<string, { name: string; id: string }>;
    chatHistory: Array<any>;
  }>({ users: {}, chatHistory: [] });

  const onMessage = (event: MessageEvent) => {
    var messages = event.data.split('-d-');
    messages.forEach((msg: string) => {
      const message = JSON.parse(msg);

      if (message.type === 'user:list') {
        const { data: rawData } = message;
        const data = JSON.parse(rawData);

        const users = Object.keys(data).reduce(
          (acc: Record<string, { name: string; id: string }>, key) => {
            const value = typeof data[key] === 'string' ? JSON.parse(data[key]) : data[key];
            acc[key] = { ...value, id: key };
            return acc;
          },
          {}
        );

        setState({
          ...state,
          users
        });
        return;
      }

      // chat message
      setState({
        ...state,
        chatHistory: [
          ...state.chatHistory,
          { ...message, name: state.users[message.userId]?.name || 'Anonymous' }
        ]
      });
    });
  };

  const onSend = (event: any) => {
    if (event.keyCode !== 13 || !event.target.value) return;

    const { value } = event.target;
    sendMsg(value);

    setState({
      ...state,
      chatHistory: [
        ...state.chatHistory,
        { userId: chat.user.id, data: value, name: chat.user.name }
      ]
    });

    event.target.value = '';
  };

  useEffect(() => {
    const socket = getSocket(chat);
    socket.onmessage = onMessage;
  });

  return (
    <Wrapper>
      <RoomSidebar chatName={chat.room} users={state.users} />
      <MessageDiv>
        <ChatHistory
          chatHistory={state.chatHistory}
          users={state.users}
          userId={chat.user.id}
        />
        <ChatInputWrapper>
          <ChatInput send={onSend} />
        </ChatInputWrapper>
      </MessageDiv>
    </Wrapper>
  );
};

export default Room;

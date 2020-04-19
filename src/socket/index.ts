import { Chat } from '../types';

let socket: WebSocket;

export const getSocket = (chat: Chat): WebSocket => {
  if (socket) return socket;

  socket = new WebSocket(
    `ws://${process.env.REACT_APP_API_URL}/ws?room=${chat.room}&name=${chat.user.name}&id=${chat.user.id}`
  );

  socket.onopen = () => {
    console.log('Successfully Connected');
  };

  socket.onclose = (event: any) => {
    console.log('Socket Closed Connection: ', event);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  socket.onerror = (error: any) => {
    console.log('Socket Error: ', error);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return socket;
};

export const sendMsg = (msg: string) => {
  if (!socket) throw Error('socket not here');
  socket.send(msg);
};

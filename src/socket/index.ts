let socket: any;

export const getSocket = (room: any, onMessage: any) => {
  if (!socket) {
    socket = new WebSocket(`ws://localhost:8080/ws?room=${room}`);

    socket.onopen = () => {
      console.log('Successfully Connected');
    };

    socket.onmessage = (event: any) => {
      onMessage(event);
    };

    socket.onclose = (event: any) => {
      console.log('Socket Closed Connection: ', event);
    };

    socket.onerror = (error: any) => {
      console.log('Socket Error: ', error);
    };
  }

  return socket;
};

export const sendMsg = (msg: string) => {
  if (!socket) throw Error('socket not here');
  socket.send(msg);
};

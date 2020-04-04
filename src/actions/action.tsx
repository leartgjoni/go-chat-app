import { SEND_MESSAGE, GET_SOCKET, SET_USERS, SET_CHAT_HISTORY } from '../types/types';

let socket: any;

export const getSocket = (options: any, onMessage: any) => {
  if (!socket) {
    socket = new WebSocket(
      `ws://${process.env.REACT_APP_API_URL}/ws?room=${options.room}&name=${options.user.name}&id=${options.user.id}`
    );

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

export function sendMessage(counter: number){
    return {
        type: SEND_MESSAGE,
        payload: counter + 1
    }
}


export function setUsers(users: Record<string, {name: string}>){
    return {
        type: SET_USERS,
        payload:  Object.values(users).map(user=> user.name)
    }
}

export function setChatHistory(chatHistory:any, value:any){

}
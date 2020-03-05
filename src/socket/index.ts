class Socket {
  private ws: WebSocket;

  constructor(
    room: string,
    onMessage: (e: MessageEvent, socket: Socket) => void
  ) {
    this.ws = new WebSocket(`ws://localhost:8080/ws?room=${room}`);

    this.ws.onopen = () => {
      console.log('Successfully Connected');
    };

    this.ws.onmessage = event => {
      onMessage(event, this);
    };

    this.ws.onclose = event => {
      console.log('Socket Closed Connection: ', event);
    };

    this.ws.onerror = error => {
      console.log('Socket Error: ', error);
    };
  }

  sendMsg(msg: string) {
    console.log('sending msg: ', msg);
    this.ws.send(msg);
  }
}

export default Socket;

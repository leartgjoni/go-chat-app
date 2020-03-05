import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Socket from '../socket';

interface IState {
  socket: null | Socket;
  textarea: string;
}

function Room() {
  let { id } = useParams();

  const [state, setState] = useState<IState>({
    socket: null,
    textarea: ''
  });

  function onMessage(event: MessageEvent, socket: Socket) {
    var messages = event.data.split('-d-');
    messages.forEach((msg: string) => {
      setState({ socket, textarea: msg });
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;

    setState({ ...state, textarea: value });
    state.socket?.sendMsg(value);
  }

  useEffect(() => {
    setState({ ...state, socket: new Socket(id || '', onMessage) });
  }, []);

  return (
    <div>
      <h1>Room: {id}</h1>
      <textarea
        rows={50}
        cols={300}
        onChange={handleChange}
        value={state.textarea}
      ></textarea>
    </div>
  );
}

export default Room;

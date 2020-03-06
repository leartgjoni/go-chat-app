// @ts-nocheck
import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getSocket, sendMsg } from '../socket';

import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';
import { render } from '@testing-library/react';

interface IState {
  chatHistory: Array<any>;
}

interface Props extends RouteComponentProps {}

class Room extends Component<Props> {
  state = {
    chatHistory: []
  };

  onMessage = (event: MessageEvent) => {
    var messages = event.data.split('-d-');
    messages.forEach((msg: string) => {
      this.setState({
        ...this.state,
        chatHistory: [...this.state.chatHistory, msg]
      });
    });
  };

  // useEffect(() => {
  //   getSocket(id, onMessage);
  // }, []);

  componentDidMount() {
    console.log(this.props.match.params.id);
    getSocket('hello', this.onMessage);
  }

  send(event: any) {
    if (event.keyCode === 13) {
      const { value } = event.target;
      sendMsg(value);

      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1>Room: {this.props.match.params.id}</h1>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default withRouter(Room);

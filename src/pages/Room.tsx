// @ts-nocheck
import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getSocket, sendMsg } from '../socket';

import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';

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
      if (JSON.parse(msg).type === 'user:list') {
        console.log('user:list', JSON.parse(msg));
        window.users = JSON.parse(JSON.parse(msg).data).reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});
        console.log('from window', window.users);
        return;
      }
      console.log('message', JSON.parse(msg));
      this.setState({
        ...this.state,
        chatHistory: [...this.state.chatHistory, JSON.parse(msg)]
      });
    });
  };

  // useEffect(() => {
  //   getSocket(id, onMessage);
  // }, []);

  componentDidMount() {
    console.log(this.props.match.params.id);
    const searchQuery = new URLSearchParams(this.props.location.search);
    console.log(searchQuery.get('name'), searchQuery.get('id'));
    getSocket(
      {
        room: this.props.match.params.id,
        user: { name: searchQuery.get('name'), id: searchQuery.get('id') }
      },
      this.onMessage
    );
  }

  send(event: any) {
    if (event.keyCode === 13) {
      const searchQuery = new URLSearchParams(this.props.location.search);

      const { value } = event.target;
      sendMsg(value);
      this.setState({
        ...this.state,
        chatHistory: [
          ...this.state.chatHistory,
          { userId: searchQuery.get('id'), data: value }
        ]
      });

      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1>Room: {this.props.match.params.id}</h1>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send.bind(this)} />
      </div>
    );
  }
}

export default withRouter(Room);

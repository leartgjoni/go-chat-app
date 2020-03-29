// @ts-nocheck
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getSocket, sendMsg } from '../socket';
import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';

interface IState {
  chatHistory: Array<any>;
}

interface Props extends RouteComponentProps {}

// class Room extends Component<Props> {
//   state = {
//     users: [],
//     chatHistory: []
//   };

const Room = ({users,chatHistory}) => {
  const onMessage = (event: MessageEvent) => {
    var messages = event.data.split('-d-');
    messages.forEach((msg: string) => {
      const message = JSON.parse(msg);

      if (message.type === 'user:list') {
        console.log('user:list', message);
        const { data: rawData } = message;
        const data = JSON.parse(rawData);

        window.users = Object.keys(data).reduce((acc, key) => {
          acc[key] = JSON.parse(data[key]);
          return acc;
        }, {});
        console.log('from window', window.users);
        this.setState({
          ...this.state,
          users: Object.values(window.users).map(user => user.name)
        });
        return;
      }
      console.log('message', message);
      this.setState({
        ...this.state,
        chatHistory: [...this.state.chatHistory, message]
      });
    });
  };


  const send = (event: any) => {
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
  return(
<div>
        <h1>Room: {this.props.match.params.id}</h1>
        <div>
          {this.state.users.map(user => (
            <p key={user}>{user}</p>
          ))}
        </div>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send.bind(this)} />
      </div>
  );
}


  // useEffect(() => {
  //   getSocket(id, onMessage);
  // }, []);

  // componentDidMount() {
  //   console.log(this.props.match.params.id);
  //   const searchQuery = new URLSearchParams(this.props.location.search);
  //   console.log(searchQuery.get('name'), searchQuery.get('id'));
  //   getSocket(
  //     {
  //       room: this.props.match.params.id,
  //       user: { name: searchQuery.get('name'), id: searchQuery.get('id') }
  //     },
  //     this.onMessage
  //   );
  // }




const mapStateToProps = state => ({
  users: state.chatReducer.users,
  chatHistory: state.chatReducer.chatHistory
})

export default connect(mapStateToProps,null)( withRouter(Room));

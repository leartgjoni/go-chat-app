// @ts-nocheck
import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { getSocket, sendMsg } from '../socket';

import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`;

const InfoDiv = styled.div`
 //background-color: #39CCCC;
 background-image: linear-gradient( #39CCCC, #8fffff);
  color: white;
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  height: 120px;
  width: 120px;
  margin: 0 auto;
  border-radius: 50%;
  border: 9px solid #fff;
  margin-top: 20px;
`;

const RoomName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const UserName = styled.p`
font-style: italic;
font-size: 18px;
`;

const MessageDiv = styled.div`
  background-color: #f7f7f7;
`;

const ChatInputWrapper = styled.div
`
position: -webkit-sticky; /* Safari */
position: sticky;
bottom: 0;
margin-top: 100px;
`;

interface IState {
  chatHistory: Array<any>;
}

interface Props extends RouteComponentProps {}

class Room extends Component<Props> {
  state = {
    users: [],
    chatHistory: []
  };

  onMessage = (event: MessageEvent) => {
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
    if (event.keyCode === 13 && event.target.value) {
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
      <Wrapper>
        <InfoDiv>
            <Image src="https://cdn.pixabay.com/photo/2018/01/20/10/14/blogging-3094201_1280.jpg"></Image>
    
        <RoomName><i class="fa fa-commenting-o" aria-hidden="true"> {this.props.match.params.id}</i></RoomName>

        <div>
          {this.state.users.map(user => (
            <UserName key={user}><i class="fa fa-user-o" aria-hidden="true"/> {user}</UserName>
          ))}
        </div>
        </InfoDiv>
        <MessageDiv>
          <ChatHistory chatHistory={this.state.chatHistory} />
          <ChatInputWrapper><ChatInput send={this.send.bind(this)} /></ChatInputWrapper>
        </MessageDiv>
      </Wrapper>
    );
  }
}



export default withRouter(Room);

{/* <div>
        <h1>Room: {this.props.match.params.id}</h1>
        <div>
          {this.state.users.map(user => (
            <p key={user}>{user}</p>
          ))}
        </div>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send.bind(this)} />
      </div> */}
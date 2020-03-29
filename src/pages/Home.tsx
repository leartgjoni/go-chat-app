import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  margin: 200px auto;
  grid-gap: 80px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 45px;
  font-family: 'Cookie', cursive;
  `;

const ButtonRow = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const CreateButton = styled.button`
  border: 1px solid #d5d5d5;
  width: 130px;
  height: 100px;
  margin-left: 50px;
  margin-top: 20px;
  border-radius: 10px;
  font-family: 'Cookie', cursive;
  font-size: 14px;

  :hover {
    background-color: #20c997;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const JoinButton = styled.button`
  border: 1px solid #d5d5d5;
  width: 130px;
  height: 100px;
  margin-left: 200px;
  border-radius: 10px;
  font-family: 'Cookie', cursive;
  font-size: 14px;

  :hover {
    background-color: #20c997;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const RoomSection = styled.section`
  input[type=text] {
    display: block;
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const GoButton = styled.button`
border: 1px solid #d5d5d5;
width: 130px;
margin-top: 20px;
border-radius: 10px;
font-size: 14px;
padding: 5px;
float: right;

:hover {
  background-color: #20c997;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
`;

const Image = styled.img`
  width: 400px;
  border-radius: 40%;
`;


function Home() {
  const [state, setState] = useState({
    create: true,
    join: true,
    form: {
      name: '',
      room: ''
    }
  });

  let history = useHistory();

  return (
    <Wrapper>
      <div>
      <Title>Keep chatting, but don't forget to join a room first! </Title>
      <ButtonRow>
      {/* <CreateButton
        onClick={() =>
          setState({ ...state, create: !state.create, join: false })
        }
      >
        Create room
      </CreateButton>
      <JoinButton
        onClick={() => setState({ ...state, create: false, join: !state.join })}
      >
        Join room
      </JoinButton> */}

      {(state.create || state.join) && (
        <RoomSection>
          {/* <h2>{state.create ? 'Create' : 'Join'} room</h2> */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={state.form.name}
            onChange={e =>
              setState({
                ...state,
                form: { ...state.form, name: e.target.value }
              })
            }
            
          />
          <input
            type="text"
            name="room"
            placeholder="Enter your room"
            value={state.form.room}
            onChange={e =>
              setState({
                ...state,
                form: { ...state.form, room: e.target.value }
              })
            }
            
          />
          <GoButton
            onClick={() =>
              history.push(
                `/room/${state.form.room}?name=${
                  state.form.name
                }&id=${uuidv4()}`
              )
            }
            disabled={!state.form.name.length || !state.form.room.length}
          >
            GO
          </GoButton>
        </RoomSection>
      )}
      </ButtonRow>
      </div>
      <div>
        <Image src="https://cdn.pixabay.com/photo/2016/02/07/14/45/smartphone-1184883_1280.png" />
      </div>
    </Wrapper>
  );
}

export default Home;

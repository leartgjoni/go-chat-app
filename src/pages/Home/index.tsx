import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/Header';
import { Wrapper, Title, ButtonRow, RoomSection, Image } from './styled';
import HomeForm from '../../components/HomeForm';

const Home = ({ setAppState }: { setAppState: Function }) => {
  const [form, setForm] = useState({
    name: '',
    room: '',
  });

  const submit = () =>
    setAppState({
      chat: {
        user: {
          name: form.name,
          id: uuidv4(),
        },
        room: form.room,
      },
    });

  return (
    <div>
      <Header />
      <Wrapper>
        <div>
          <Title>Keep chatting, but don't forget to join a room first! :D</Title>
          <ButtonRow>
            <RoomSection>
              <HomeForm submit={submit} form={form} setForm={setForm} />
            </RoomSection>
          </ButtonRow>
        </div>
        <div>
          <Image src="https://cdn.pixabay.com/photo/2016/02/07/14/45/smartphone-1184883_1280.png" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;

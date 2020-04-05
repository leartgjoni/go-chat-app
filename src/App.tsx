import React, { useState } from 'react';
import Home from './pages/Home';
import Room from './pages/Room';
import { Chat } from './types';

const App = () => {
  const [state, setState] = useState<{ chat: Chat | null }>({ chat: null });

  return !state.chat ? (
    <Home setAppState={setState} />
  ) : (
    <Room chat={state.chat} />
  );
};

export default App;

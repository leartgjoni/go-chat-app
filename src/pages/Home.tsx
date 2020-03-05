import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const [state, setState] = useState({
    create: false,
    join: false,
    form: {
      name: '',
      room: ''
    }
  });

  let history = useHistory();

  return (
    <div className="App">
      <button
        onClick={() =>
          setState({ ...state, create: !state.create, join: false })
        }
      >
        create room
      </button>
      <button
        onClick={() => setState({ ...state, create: false, join: !state.join })}
      >
        join room
      </button>

      {(state.create || state.join) && (
        <section>
          <h2>{state.create ? 'Create' : 'Join'} room</h2>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={state.form.name}
            onChange={e =>
              setState({
                ...state,
                form: { ...state.form, name: e.target.value }
              })
            }
          ></input>
          <input
            type="text"
            name="room"
            placeholder="room"
            value={state.form.room}
            onChange={e =>
              setState({
                ...state,
                form: { ...state.form, room: e.target.value }
              })
            }
          ></input>
          <button onClick={() => history.push(`/room/${state.form.room}`)}>
            GO
          </button>
        </section>
      )}
    </div>
  );
}

export default Home;

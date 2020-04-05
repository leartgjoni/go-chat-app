import React from 'react';
import { GoButton } from './styled';

const HomeForm = ({
  submit,
  form,
  setForm
}: {
  submit: any;
  form: { name: string; room: string };
  setForm: any;
}) => {
  return (
    <form
      onSubmit={e => {
        if (!form.name || !form.room) return;

        e.preventDefault();
        submit();
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={form.name}
        onChange={e =>
          setForm({
            ...form,
            name: e.target.value
          })
        }
      />
      <input
        type="text"
        name="room"
        placeholder="Enter your room"
        value={form.room}
        onChange={e =>
          setForm({
            ...form,
            room: e.target.value
          })
        }
      />
      <GoButton
        type="submit"
        value="Go"
        onClick={submit}
        disabled={!form.name || !form.room}
      />
    </form>
  );
};

export default HomeForm;

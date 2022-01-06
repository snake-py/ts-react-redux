import React, { useState } from 'react';
import { IState as Props } from '../App_1';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const clickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: Number(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: '',
      age: '',
      url: '',
      note: '',
    });
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={input.name}
        type="text"
        placeholder="name"
        name="name"
      />
      <input
        onChange={handleChange}
        value={input.age}
        type="text"
        placeholder="age"
        name="age"
      />
      <input
        onChange={handleChange}
        value={input.url}
        type="text"
        placeholder="url"
        name="url"
      />
      <textarea
        onChange={handleChange}
        placeholder="note"
        value={input.note}
        name="note"
      ></textarea>
      <button onClick={clickHandler}>Save</button>
    </div>
  );
};

export default AddToList;

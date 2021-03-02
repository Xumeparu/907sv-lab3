import React, { useState } from 'react';

export default function Form({ handleSubmit }) {
  const [value, setValue] = useState('');

  function innerSubmit(event) {
    event.preventDefault();
    handleSubmit(value);
    setValue('');
  }

  return (
    <form data-testid="form" onSubmit={innerSubmit}>
      <div>
        <input
          data-testid="input"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <br />
        <button data-testid="handleSubmit" type="submit" className="addBtn">
          Добавить
        </button>
      </div>
    </form>
  );
}

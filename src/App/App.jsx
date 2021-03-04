import React, { useState } from 'react';
import './App.css';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import reducer, { ACTION_TYPES } from '../store';

export default function App() {
  const [list, setList] = useState([]);
  const [isDone, setIsDone] = useState(false);

  function dispatch(action) {
    const newList = reducer(action, list);
    setList(newList);
  }

  function filterList(list, isDone) {
    if (!isDone) return list;

    return list.filter(item => item.isChecked);
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №3. Фильтруемый список в React</h2>
      </div>
      <Form
        handleSubmit={value =>
          dispatch({
            type: ACTION_TYPES.ADD,
            payload: value
          })
        }
      />
      <div>
        <label>
          Только выполненные
          <input type="checkbox" checked={isDone} onChange={() => setIsDone(!isDone)} />
        </label>
      </div>
      <List list={filterList(list, isDone)} dispatch={dispatch} />
    </div>
  );
}

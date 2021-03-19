import React, { useState } from 'react';
import './App.css';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import reducer, {
  ACTION_TYPES,
  IAction,
  initialState,
  selectFilteredList,
  StateType
} from '../store';
import SelectFilter from '../components/SelectFilter/SelectFilter';

export default function App() {
  const [state, setState] = useState<StateType>(initialState);

  function dispatch(action: IAction) {
    const newList = reducer(action, state);
    setState(newList);
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
        <SelectFilter dispatch={dispatch} />
      </div>
      <List list={selectFilteredList(state)} dispatch={dispatch} />
    </div>
  );
}

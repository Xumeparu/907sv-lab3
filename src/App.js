import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №3. Список с фильтрацией</h2>
      </div>
      <div>
        <input type="text" />
        <button>Добавить</button>
        <div>
          <label>
            Показывать только выполненные:
            <input type="checkbox" />
          </label>
        </div>
        <ul>
          <li>
            <input type="checkbox" />
            Помыть пол
            <button>[x]</button>
          </li>
          <li>
            <input type="checkbox" />
            Поиграть в футбол
            <button>[x]</button>
          </li>
          <li>
            <input type="checkbox" />
            Покормить рыб
            <button>[x]</button>
          </li>
          <li>
            <input type="checkbox" />
            Выгулять кошку
            <button>[x]</button>
          </li>
          <li>
            <input type="checkbox" />
            Полить картошку
            <button>[x]</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

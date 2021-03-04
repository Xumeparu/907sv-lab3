import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import React from 'react';

const list = [
  {
    id: '1',
    title: 'Полить кота',
    isChecked: false
  },
  {
    id: '2',
    title: 'Покормить цветы',
    isChecked: true
  }
];

test('Корректное отображение пустого списка', () => {
  const list = [];
  const dispatch = jest.fn();

  render(<List list={list} dispatch={dispatch} />);
  expect(screen.getByText('Список пуст')).toBeInTheDocument();
});

test('Корректное отображение списка элементов', () => {
  const dispatch = jest.fn();

  render(<List list={list} dispatch={dispatch} />);

  for (let item of list) {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  }

  for (let deleteButton of screen.getAllByTestId('deleteButton')) {
    fireEvent.click(deleteButton);
  }
  expect(dispatch).toBeCalledTimes(list.length);
});

test('Отображение чекбоксов в нужном состоянии', () => {
  render(<List list={list} />);

  const checkboxes = screen.getAllByTestId('checkbox');
  for (let i = 0; i < checkboxes.length; i++) {
    expect(checkboxes[i].checked).toEqual(list[i].isChecked);
  }
});

test('Вызов checkHandler с нужными параметрами при клике на чекбокс', () => {
  const dispatch = jest.fn();

  render(<List list={list} dispatch={dispatch} />);

  const checkboxes = screen.getAllByTestId('checkbox');
  for (let i = 0; i < checkboxes; i++) {
    fireEvent.click(checkboxes[i]);
    expect(dispatch).toBeCalledWith(list[i].id, !list[i].isChecked);
  }
});

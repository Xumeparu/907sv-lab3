import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';
import React from 'react';
import { ACTION_TYPES } from '../../store';

const id = '19';
const title = 'Покормить цветы';

test('Отображение элемента в списке, реакция на кнопку', () => {
  const dispatch = jest.fn();

  // arrange
  render(<ListItem id={id} title={title} dispatch={dispatch} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  // act
  const deleteButton = screen.getByTestId('deleteButton');
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);

  // asset
  expect(dispatch).toBeCalledWith({ payload: id, type: ACTION_TYPES.REMOVE });
});

test('Отображение выбранного чекбокса', () => {
  render(<ListItem id={id} title={title} isChecked={true} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toHaveAttribute('checked');
});

test('Отображение пустого чекбокса', () => {
  render(<ListItem id={id} title={title} isChecked={false} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toHaveAttribute('checked');
});

test('При клике на чекбокс вызывается нужный метод', () => {
  const dispatch = jest.fn();

  render(<ListItem id={id} title={title} isChecked={false} dispatch={dispatch} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();

  expect(dispatch).not.toBeCalled();
  fireEvent.click(checkbox);
  expect(dispatch).toBeCalledWith({ payload: id, type: ACTION_TYPES.CHECKED });
});

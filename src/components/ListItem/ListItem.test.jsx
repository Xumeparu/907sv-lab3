import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';
import React from 'react';

const id = 19;
const title = 'Покормить цветы';

test('Отображение элемента в списке, реакция на кнопку', () => {
  const deleteHandler = jest.fn();

  // arrange
  render(<ListItem id={id} title={title} deleteHandler={deleteHandler} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  // act
  const deleteButton = screen.getByTestId('deleteButton');
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);

  // asset
  expect(deleteHandler).toBeCalledWith(id);
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
  const checkedHandler = jest.fn();

  render(<ListItem id={id} title={title} isChecked={false} checkedHandler={checkedHandler} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();

  expect(checkedHandler).not.toBeCalled();
  fireEvent.click(checkbox);
  expect(checkedHandler).toBeCalledWith(id, true);
});

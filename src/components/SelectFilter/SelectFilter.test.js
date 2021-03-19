import { render, screen } from '@testing-library/react';
import SelectFilter from './SelectFilter';
import React from 'react';

test('Выполнение рендера компонента SelectFilter', () => {
  const dispatch = jest.fn();
  render(<SelectFilter dispatch={dispatch} />);

  const selector = screen.getByTestId('selector');
  expect(selector).toBeInTheDocument();
});

test('Отображение компонентом лишь выполненных элементов', () => {
  const dispatch = jest.fn();

  render(<SelectFilter dispatch={dispatch} />);
});

test('Отображение компонентом лишь выполненных элементов', () => {
  const dispatch = jest.fn();

  render(<SelectFilter dispatch={dispatch} />);
});

test('Отображение компонентом лишь не выполненных элементов', () => {
  const dispatch = jest.fn();

  render(<SelectFilter dispatch={dispatch} />);
});

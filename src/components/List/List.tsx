import React from 'react';
import ListItem from '../ListItem/ListItem';
import { IAction, IItem } from '../../store';

type ListProps = { list: IItem[]; dispatch: (action: IAction) => void };

export default function List({ list, dispatch }: ListProps) {
  console.log('List render');
  if (list.length === 0) {
    return <div>Список пуст</div>;
  }
  return (
    <ul>
      {list.map(item => (
        <ListItem
          id={item.id}
          key={item.id}
          title={item.title}
          isChecked={item.isChecked}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}

import React from 'react';
import { ACTION_TYPES } from '../../store';

export default function ListItem({ id, title, isChecked, dispatch }) {
  return (
    <li>
      <input
        type="checkbox"
        data-testid="checkbox"
        checked={isChecked}
        onChange={() =>
          dispatch({
            type: ACTION_TYPES.CHECKED,
            payload: id
          })
        }
      />
      {title}
      <button
        className="deleteBtn"
        data-testid="deleteButton"
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.REMOVE,
            payload: id
          })
        }
      >
        x
      </button>
    </li>
  );
}

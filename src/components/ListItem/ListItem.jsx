import React, { useState } from 'react';
import { ACTION_TYPES } from '../../store';

export default function ListItem({ id, title, isChecked, dispatch }) {
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState(title);

  function saveHandler() {
    setEditMode(false);
    dispatch({
      type: ACTION_TYPES.EDIT,
      payload: { id, title: editInput }
    });
  }

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
      {!editMode && (
        <>
          <span data-testid="title">{title}</span>
        </>
      )}
      {!editMode && (
        <button className="editBtn" data-testid="editButton" onClick={() => setEditMode(true)}>
          &#128397;
        </button>
      )}
      {editMode && (
        <>
          <input
            value={editInput}
            data-testid="editInput"
            onChange={e => setEditInput(e.target.value)}
          />
          <button className="saveBtn" data-testid="saveButton" onClick={saveHandler}>
            &#10004;
          </button>
        </>
      )}
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
        &#10006;
      </button>
    </li>
  );
}

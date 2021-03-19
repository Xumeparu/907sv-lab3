import React, { ChangeEvent } from 'react';
import { ACTION_TYPES, IAction, SELECT_FILTER_TYPE, SELECT_FILTER_TYPES } from '../../store';

type SelectFilterProps = { dispatch: (action: IAction) => void };

export default function SelectFilter({ dispatch }: SelectFilterProps) {
  function filterHandler(e: ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: ACTION_TYPES.SELECT_FILTER,
      payload: e.target.value as SELECT_FILTER_TYPE
    });
  }

  return (
    <select className="selectFilter" data-testid="selector" onChange={filterHandler}>
      {Object.keys(SELECT_FILTER_TYPES).map((item, index) => (
        <option data-testid={index} key={index} value={Object.values(SELECT_FILTER_TYPES)[index]}>
          {Object.values(SELECT_FILTER_TYPES)[index]}
        </option>
      ))}
    </select>
  );
}

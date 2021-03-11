export interface IItem {
  id: string;
  title: string;
  isChecked: boolean;
}

export interface IActionAdd {
  type: typeof ACTION_TYPES.ADD;
  payload: string;
}

export interface IActionRemove {
  type: typeof ACTION_TYPES.REMOVE;
  payload: string;
}

export interface IActionChecked {
  type: typeof ACTION_TYPES.CHECKED;
  payload: string;
}

export interface IActionEdit {
  type: typeof ACTION_TYPES.EDIT;
  payload: {
    id: string;
    title: string;
  }
}

export type IAction = IActionAdd | IActionRemove | IActionChecked | IActionEdit;

export const ACTION_TYPES = {
  ADD: 'add',
  REMOVE: 'remove',
  CHECKED: 'checked',
  EDIT: 'edit'
} as const;

export type ACTION_TYPE = typeof ACTION_TYPES.ADD
    | typeof ACTION_TYPES.EDIT
    | typeof ACTION_TYPES.REMOVE
    | typeof ACTION_TYPES.CHECKED;

export const initialList = {
  list: [],
  isDoneFilter: false
};

export default function reducer(action: IAction, prevList: IItem[] = []): IItem[] {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      const newValue = {
        id: Math.random().toString(36).substr(2),
        title: action.payload,
        isChecked: false
      };
      return [...prevList, newValue];
    }
    case ACTION_TYPES.REMOVE: {
      return [...prevList.filter(item => item.id !== action.payload)];
    }
    case ACTION_TYPES.CHECKED: {
      return [
        ...prevList.map(function (item) {
          if (item.id === action.payload) {
            return { ...item, isChecked: !item.isChecked };
          }
          return item;
        })
      ];
    }
    case ACTION_TYPES.EDIT: {
      return [
        ...prevList.map(function (item) {
          if (item.id === action.payload.id) {
            return { ...item, title: action.payload.title };
          }
          return item;
        })
      ];
    }
    default:
      return [...prevList];
  }
}

export function selectFilteredList({ list, isDone }: {list: IItem[], isDone: boolean}) {
  if (!isDone) return list;

  return list.filter(item => item.isChecked);
}

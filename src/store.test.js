import reducer, { ACTION_TYPES, selectFilteredList } from './store';

const title = 'Покормить цветы';

describe('Проверка функционирования store.js', () => {
  test('Проверка добавления элемента (ACTION_TYPES.ADD)', () => {
    const action = {
      type: ACTION_TYPES.ADD,
      payload: title
    };

    const newList = reducer(action, []);

    expect(newList.length).toEqual(1);
    expect(newList[0]).toHaveProperty('id');
    expect(newList[0].title).toEqual(title);
  });

  test('Проверка удаления элемента (ACTION_TYPES.REMOVE)', () => {
    const addAction = {
      type: ACTION_TYPES.ADD,
      payload: title
    };

    let list = reducer(addAction, []);

    const removeAction = {
      type: ACTION_TYPES.REMOVE,
      payload: list[0].id
    };

    list = reducer(removeAction, list);
    expect(list.length).toEqual(0);
  });

  test('Проверка изменения элемента (ACTION_TYPES.CHECKED)', () => {
    const addAction = {
      type: ACTION_TYPES.ADD,
      payload: title
    };

    let list = reducer(addAction, []);

    const checkedAction = {
      type: ACTION_TYPES.CHECKED,
      payload: list[0].id
    };

    list = reducer(checkedAction, list);
    expect(list[0].isChecked).toBeTruthy();
  });

  test('Проверка отображения выбранного элемента элемента (ACTION_TYPES.EDIT)', () => {
    const newTitle = 'Полить цветы';

    const addAction = {
      type: ACTION_TYPES.ADD,
      payload: title
    };

    let list = reducer(addAction, []);

    const editAction = {
      type: ACTION_TYPES.EDIT,
      payload: { id: list[0].id, title: newTitle }
    };

    list = reducer(editAction, list);
    expect(list[0].title).toEqual(newTitle);
  });

  test('Проверка фильтрации списка', () => {
    const addAction = {
      type: ACTION_TYPES.ADD,
      payload: 'Покормить цветы'
    };
    let list = reducer(addAction, []);
    list = reducer(addAction, list);

    const checkedAction = {
      type: ACTION_TYPES.CHECKED,
      payload: list[1].id
    };
    list = reducer(checkedAction, list);

    const filteredList = selectFilteredList({ list: list, isDone: true });
    expect(filteredList.length).toEqual(1);
    expect(filteredList[0].id).toEqual(list[1].id);
  });
});

import { useEffect } from 'react';
import { BiTaskX } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from '../../redux/hooks/actionsHook';
import {
  setDeleteTodo,
  setInputValue,
  setTodos,
  setTooLong,
} from '../../redux/todosSlise';
import AllTheTasks from '../OverviewTasks/OverviewTasks';
import Task from '../Task/Task';
import TaskInput from '../TaskInput/TaskInput';

import type { RootState } from '../../redux/store';
import type { IPropsTodo } from '../../redux/types/IPropsTodosSlice';

import styles from './TodoList.module.scss';

export default function TodoList() {
  const dispatch = useDispatch();
  const { tooLong, todos, inputValue } = useAppSelector((state: RootState) => state.todosSlice);

  useEffect(() => {
    const storageTodos = localStorage.getItem('todoList');
    if (storageTodos) {
      dispatch(setTodos(JSON.parse(storageTodos)));
    }
  }, [dispatch]);

  const setTodosStorage = (updatedTodos: IPropsTodo[]): void => {
    localStorage.setItem('todoList', JSON.stringify(updatedTodos));
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setInputValue(event.target.value));
  };

  const reviewOfConditions = (): void => {
    if (inputValue.length !== 0) {
      if (inputValue.length < 40) {
        const newTodo = {
          id: uuidv4(),
          text: inputValue,
          isChecked: false,
        };
        const updatedTodos = [...todos, newTodo];
        dispatch(setTodos(updatedTodos));
        setTodosStorage(updatedTodos);
      } else {
        dispatch(setTooLong(true));

        setTimeout(() => {
          dispatch(setTooLong(false));
        }, 2000);
      }
    }
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    reviewOfConditions();
  };

  const onClickSubmit = (): void => {
    reviewOfConditions();
  };

  const onChangeChecked = (id: string): void => {
    const updatedTodos = todos.map((todo) => (
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    ));
    dispatch(setTodos(updatedTodos));
    setTodosStorage(updatedTodos);
  };

  const onClickDeleteTodo = (id: string): void => {
    dispatch(setDeleteTodo(id));
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo_flex}>
        <h3 className={styles.todo_flex_top_title}>
          The Panel Tasks
        </h3>
        <TaskInput
          inputValue={inputValue}
          isTooLong={tooLong}
          onChangeInput={onChangeInput}
          onSubmitForm={onSubmitForm}
          onClickSubmit={onClickSubmit}
        />
        {todos.length ? todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            onChangeChecked={onChangeChecked}
            onClickDeleteTodo={onClickDeleteTodo}
          />
        )) : (
          <div className={styles.todo_flex_bottom}>
            <span>You dont have tasks</span>
            <BiTaskX className={styles.todo_flex_bottom_icon} />
          </div>
        )}
        <AllTheTasks />
      </div>
    </div>
  );
}

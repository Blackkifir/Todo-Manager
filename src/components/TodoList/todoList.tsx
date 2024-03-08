import { BiTaskX } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../redux/hooks/actionsHook';
import {
  setDeleteTodo,
  setInputValue,
  setTodos,
} from '../../redux/todosSlise';
import Task from '../Task/Task';
import TaskInput from '../TaskInput/TaskInput';

import type { RootState } from '../../redux/store';

import styles from './TodoList.module.scss';

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos, inputValue } = useAppSelector((state: RootState) => state.todosSlice);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.length !== 0) {
      dispatch(setTodos(inputValue));
    }

    dispatch(setInputValue(''));
  };

  const onClickSubmit = () => {
    if (inputValue.length !== 0) {
      dispatch(setTodos(inputValue));
    }

    dispatch(setInputValue(''));
  };

  const onClickDelete = (id: number) => {
    dispatch(setDeleteTodo(id));
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo_flex}>
        <h3 className={styles.todo_flex_top_title}>
          {`Tasks:${' '} ${todos.length}`}
        </h3>
        <TaskInput
          inputValue={inputValue}
          onChangeInput={onChangeInput}
          onSubmitForm={onSubmitForm}
          onClickSubmit={onClickSubmit}
        />
        {todos.length ? todos.map((todo, index) => (
          <Task
            id={index}
            key={`${todo + index}`}
            todo={todo}
            onClickDelete={onClickDelete}
          />
        )) : (
          <div className={styles.todo_flex_bottom}>
            <span>You dont have tasks</span>
            <BiTaskX className={styles.todo_flex_bottom_icon} />
          </div>
        )}
      </div>
    </div>
  );
}

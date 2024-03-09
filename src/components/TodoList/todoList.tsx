import { BiTaskX } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../redux/hooks/actionsHook';
import {
  setDeleteTodo,
  setInputValue,
  setIsTooLong,
  setTodos,
} from '../../redux/todosSlise';
import BottomPanel from '../BottomPanel/BottomPanel';
import Task from '../Task/Task';
import TaskInput from '../TaskInput/TaskInput';

import type { RootState } from '../../redux/store';

import styles from './TodoList.module.scss';

export default function TodoList() {
  const dispatch = useDispatch();
  const { isTooLong, todos, inputValue } = useAppSelector((state: RootState) => state.todosSlice);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const reviewOfConditions = () => {
    if (inputValue.length !== 0) {
      if (inputValue.length < 40) {
        dispatch(setTodos(inputValue));
      } else {
        dispatch(setIsTooLong(true));

        setTimeout(() => {
          dispatch(setIsTooLong(false));
        }, 2000);
      }
    }
    dispatch(setInputValue(''));
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    reviewOfConditions();
  };

  const onClickSubmit = () => {
    reviewOfConditions();
  };

  const onClickDelete = (id: number) => {
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
          isTooLong={isTooLong}
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
        <BottomPanel />
      </div>
    </div>
  );
}

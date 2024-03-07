import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../redux/hooks/actionsHook';
import { setInputValue } from '../../redux/todosSlise';
import Task from '../Task/Task';
import TaskInput from '../TaskInput/TaskInput';

import type { RootState } from '../../redux/store';

import styles from './TodoList.module.scss';

export default function TodoList() {
  const dispatch = useDispatch();
  const { inputValue } = useAppSelector((state: RootState) => state.todosSlice);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setInputValue(''));
  };

  const onClickSubmit = () => {
    dispatch(setInputValue(''));
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo_flex}>
        <h3 className={styles.todo_flex_top_title}>Tasks:</h3>
        <TaskInput
          inputValue={inputValue}
          onChangeInput={onChangeInput}
          onSubmitForm={onSubmitForm}
          onClickSubmit={onClickSubmit}
        />
        <Task />
      </div>
    </div>
  );
}

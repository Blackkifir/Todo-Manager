import { useEffect } from 'react';
import { FaTasks } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../redux/hooks/actionsHook';
import { setCompletedTasks, setNotCompletedTasks } from '../../redux/todosSlise';

import type { RootState } from '../../redux/store';

import styles from './AllTasks.module.scss';

export default function AllTasks() {
  const dispatch = useDispatch();
  const { todos, completedTasks, notCompletedTasks } = useAppSelector((state: RootState) => state.todosSlice);

  useEffect(() => {
    const sumCompletedTasks = todos.reduce((acc: number, currentTodo) => {
      const sum = currentTodo.isChecked ? acc + 1 : acc;
      return sum;
    }, 0);
    dispatch(setCompletedTasks(sumCompletedTasks));

    const sumNotCompletedTasks = todos.reduce((acc: number, currentTodo) => {
      const sum = !currentTodo.isChecked ? acc + 1 : acc;
      return sum;
    }, 0);
    dispatch(setNotCompletedTasks(sumNotCompletedTasks));
  }, [todos, dispatch]);

  return (
    <div className={styles.allTasks}>
      <div className={styles.allTasks_flex}>
        <div className={styles.allTasks_flex_top}>
          <h3 className={styles.allTasks_flex_top_title}>
            All The Tasks
          </h3>
          <FaTasks className={styles.allTasks_flex_top_icon} />
        </div>
        <hr className={styles.allTasks_flex_top_border} />
        <ul className={styles.allTasks_flex_list}>
          <li className={styles.allTasks_flex_list_item}>
            <p>{`Tasks: ${todos.length}`}</p>
          </li>
          <li className={styles.allTasks_flex_list_item}>
            <p>{`Tasks completed: ${completedTasks}`}</p>
          </li>
          <li className={styles.allTasks_flex_list_item}>
            <p>{`Not completed: ${notCompletedTasks}`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

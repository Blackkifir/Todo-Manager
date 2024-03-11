import { FaTasks } from 'react-icons/fa';

import { useAppSelector } from '../../redux/hooks/actionsHook';

import type { RootState } from '../../redux/store';

import styles from './AllTasks.module.scss';

export default function AllTasks() {
  const { todos } = useAppSelector((state: RootState) => state.todosSlice);
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
            <p>{`Tasks completed: ${0}`}</p>
          </li>
          <li className={styles.allTasks_flex_list_item}>
            <p>{`Not completed: ${0}`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

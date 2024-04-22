import { useEffect } from 'react';
import { FaTasks } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../redux/hooks/actionsHook';
import { setCompletedTasks, setNotCompletedTasks } from '../../redux/todosSlise';

import styles from './OverviewTasks.module.scss';

export default function OverviewTasks() {
  const dispatch = useDispatch();
  const { todos, completedTasks, notCompletedTasks } = useAppSelector((state) => state.todosSlice);

  useEffect(() => {
    const { sumCompletedTasks, sumNotCompletedTasks } = todos.reduce((acc, currentTodo) => {
      const newAcc = { ...acc };
      if (currentTodo.isChecked) {
        newAcc.sumCompletedTasks += 1;
      } else {
        newAcc.sumNotCompletedTasks += 1;
      }

      return newAcc;
    }, { sumCompletedTasks: 0, sumNotCompletedTasks: 0 });

    dispatch(setCompletedTasks(sumCompletedTasks));
    dispatch(setNotCompletedTasks(sumNotCompletedTasks));
  }, [todos, dispatch]);

  return (
    <div className={styles.overviewTasks}>
      <div className={styles.overviewTasks_topFlex}>
        <h2 className={styles.overviewTasks_topFlex_title}>Task Overview</h2>
        <FaTasks className={styles.overviewTasks_topFlex_icon} />
      </div>
      <div className={styles.overviewTasks_summaryFlex}>
        <div className={styles.overviewTasks_summaryFlex_item}>
          <h3 className={styles.overviewTasks_summaryFlex_title}>Total Tasks</h3>
          <p className={styles.overviewTasks_summaryFlex_value}>{todos.length}</p>
        </div>
        <div className={styles.overviewTasks_summaryFlex_item}>
          <h3 className={styles.overviewTasks_summaryFlex_title}>Completed</h3>
          <p className={styles.overviewTasks_summaryFlex_value}>{completedTasks}</p>
        </div>
        <div className={styles.overviewTasks_summaryFlex_item}>
          <h3 className={styles.overviewTasks_summaryFlex_title}>Not Completed</h3>
          <p className={styles.overviewTasks_summaryFlex_value}>{notCompletedTasks}</p>
        </div>
      </div>
    </div>
  );
}

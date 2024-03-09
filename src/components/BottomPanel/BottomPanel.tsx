import { FaTasks } from 'react-icons/fa';

import { useAppSelector } from '../../redux/hooks/actionsHook';

import type { RootState } from '../../redux/store';

import styles from './BottomPanel.module.scss';

export default function BottomPanel() {
  const { todos } = useAppSelector((state: RootState) => state.todosSlice);
  return (
    <div className={styles.bottomPanel}>
      <div className={styles.bottomPanel_flex}>
        <div className={styles.bottomPanel_flex_top}>
          <h3 className={styles.bottomPanel_flex_top_title}>
            All The Tasks
          </h3>
          <FaTasks className={styles.bottomPanel_flex_top_icon} />
        </div>
        <hr className={styles.bottomPanel_flex_top_border} />
        <ul className={styles.bottomPanel_flex_list}>
          <li className={styles.bottomPanel_flex_list_item}>
            <p>{`Tasks: ${todos.length}`}</p>
          </li>
          <li className={styles.bottomPanel_flex_list_item}>
            <p>Tasks completed:</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

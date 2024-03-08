import { MdDelete } from 'react-icons/md';

import type { IPropsTask } from './IPropsTask';

import styles from './Task.module.scss';

export default function Task({ todo, onClickDelete, id }: IPropsTask) {
  return (
    <div className={styles.task}>
      <input type="checkbox" className={styles.task_checkBox} />
      <p className={styles.task_text}>{todo}</p>
      <button
        onClick={() => onClickDelete(id)}
        type="button"
        className={styles.task_btnDelete}
      >
        <MdDelete className={styles.task_btnDelete_icon} />
        .
      </button>
    </div>
  );
}

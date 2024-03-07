import { MdDelete } from 'react-icons/md';

import styles from './Task.module.scss';

export default function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" className={styles.task_checkBox} />
      <p className={styles.task_text}>task</p>
      <button type="button" className={styles.task_btnDelete}>
        <MdDelete className={styles.task_btnDelete_icon} />
        .
      </button>
    </div>
  );
}

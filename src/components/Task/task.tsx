import { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import type { IPropsTask } from './IPropsTask';

import styles from './Task.module.scss';

export default function Task({
  id,
  todo,
  onClickDelete,
}: IPropsTask) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChangeChecked = () => {
    setIsChecked(true);

    if (isChecked) {
      setIsChecked(false);
    }
  };

  return (
    <div className={styles.task}>
      <input
        onChange={onChangeChecked}
        checked={isChecked}
        type="checkbox"
        className={styles.task_checkBox}
      />
      <p className={`${isChecked ? styles.task_complete : styles.task_text}`}>{todo}</p>
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

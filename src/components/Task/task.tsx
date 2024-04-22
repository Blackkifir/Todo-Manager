import { MdDelete } from 'react-icons/md';

import type { IPropsTask } from './IPropsTask';

import styles from './Task.module.scss';

export default function Task({
  todo,
  onChangeChecked,
  onClickDeleteTodo,
}: IPropsTask) {
  return (
    <div className={styles.task}>
      <input
        onChange={() => onChangeChecked(todo.id)}
        checked={todo.isChecked}
        type="checkbox"
        className={styles.task_checkBox}
      />
      <p className={`${todo.isChecked ? styles.task_complete : styles.task_text}`}>
        {todo.text}
      </p>
      <button
        onClick={() => onClickDeleteTodo(todo.id)}
        type="button"
        className={styles.task_btnDelete}
      >
        <MdDelete className={styles.task_btnDelete_icon} />
        .
      </button>
    </div>
  );
}

import { MdDelete } from "react-icons/md";
import styles from './task.module.scss';

const Task: React.FC = () => {
  return (
    <div className={styles.task}>
      <input type='checkbox' className={styles.task_checkBox} />
      <p className={styles.task_text}>task</p>
      <button className={styles.task_btnDelete}>
        <MdDelete className={styles.task_btnDelete_icon} />
      </button>
    </div>
  );
};

export default Task;
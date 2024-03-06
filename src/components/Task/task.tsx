import styles from './task.module.scss';
import { MdDelete } from "react-icons/md";

const task: React.FC = () => {
  return (
    <div className={styles.task}>
      <p className={styles.task_text}>task</p>
      <button className={styles.task_btnDelete}>
        <MdDelete className={styles.task_btnDelete_icon} />
      </button>
    </div>
  );
};

export default task;
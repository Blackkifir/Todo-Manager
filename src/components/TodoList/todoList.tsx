import Tasks from '../Task/task';
import styles from './todoList.module.scss';

const todoList: React.FC = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo_flex}>
        <h3 className={styles.todo_flex_title}>Tasks:</h3>
        <Tasks />
      </div>
    </div>
  );
};

export default todoList;
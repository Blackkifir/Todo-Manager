import Tasks from '../Task/tasks';
import styles from './todoList.module.scss';

const todoList: React.FC = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo_flex}>
        <h1 className={styles.todo_flex_title}>Tasks</h1>
        <Tasks />
      </div>
    </div>
  );
};

export default todoList;
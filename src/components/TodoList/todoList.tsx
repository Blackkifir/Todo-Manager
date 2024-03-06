import Tasks from '../Task/task';
import TaskInput from '../TaskInput/taskInput';
import styles from './todoList.module.scss';

const TodoList: React.FC = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo_flex}>
        <h3 className={styles.todo_flex_top_title}>Tasks:</h3>
        <TaskInput />
        <Tasks />
      </div>
    </div>
  );
};

export default TodoList;
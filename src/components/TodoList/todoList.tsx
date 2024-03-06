import styles from './todoList.module.scss';

const todoList = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo_flex}>
        <h1 className={styles.todo_flex_title}>Tasks</h1>
      </div>
    </div>
  );
};

export default todoList;
import styles from './taskInput.module.scss';

const TaskInput: React.FC = () => {
  return (
    <div className={styles.inputBlock}>
      <input
        name="todoAdd-item"
        type="text"
        placeholder="add item..."
        className={styles.inputBlock_input}
      />
      <button type="button" className={styles.inputBlock_addBtn}>
        +
      </button>
    </div>
  );
};

export default TaskInput;
import styles from './taskInput.module.scss';

const TaskInput: React.FC = () => {
  return (
    <>
      <input
        name="todoAdd-item"
        type="text"
        placeholder="add-item"
        className={styles.input}
      />
    </>
  );
};

export default TaskInput;
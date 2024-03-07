import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/actionsHook';
import { RootState } from '../../redux/store';
import { setInputValue } from '../../redux/todosSlise';
import styles from './taskInput.module.scss';

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const inputValue = useAppSelector((state: RootState) => state.todosSlice.inputValue);
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const onClickSubmit = () => {
    dispatch(setInputValue(''));
  }

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setInputValue(''));
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className={styles.inputForm}
    >
      <input
        onChange={onChangeInput}
        value={inputValue}
        name="todoAdd-item"
        type="text"
        placeholder="add item..."
        className={styles.inputForm_input}
      />
      <button
        onClick={onClickSubmit}
        type="button"
        className={styles.inputForm_addBtn}>
        +
      </button>
    </form>
  );
};

export default TaskInput;
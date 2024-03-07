import type { IPropsTaskInput } from './IPropsTaskInput';

import styles from './TaskInput.module.scss';

export default function TaskInput({
  inputValue,
  onChangeInput,
  onSubmitForm,
  onClickSubmit,
}: IPropsTaskInput) {
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
        className={styles.inputForm_addBtn}
      >
        +
      </button>
    </form>
  );
}

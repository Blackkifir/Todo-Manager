import type { IPropsTaskInput } from './IPropsTaskInput';

import styles from './TaskInput.module.scss';

export default function TaskInput({
  inputValue,
  isTooLong,
  onChangeInput,
  onSubmitForm,
  onClickSubmit,
}: IPropsTaskInput) {
  return (
    <form onSubmit={onSubmitForm} name="todos" className={styles.inputForm}>
      <input
        onChange={onChangeInput}
        disabled={isTooLong}
        value={inputValue}
        name="todoAdd-item"
        type="text"
        placeholder="add item..."
        className={styles.inputForm_input}
      />
      {isTooLong ? <p className={styles.inputForm_tooLong}>Too long words</p> : null}
      <button onClick={onClickSubmit} type="button" className={styles.inputForm_addBtn}>
        +
      </button>
    </form>
  );
}

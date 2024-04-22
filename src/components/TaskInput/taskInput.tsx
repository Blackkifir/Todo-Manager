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
    <form
      onSubmit={onSubmitForm}
      id="todos"
      name="todos"
      className={styles.form}
    >
      <div className={styles.form_inputBlock}>
        <input
          id="addTodoInput"
          onChange={onChangeInput}
          disabled={isTooLong}
          value={inputValue}
          name="todoAdd-item"
          type="text"
          placeholder="add task..."
          className={styles.form_inputBlock_input}
        />
        {isTooLong ? <p className={styles.form_inputBlock_tooLong}>Too long words</p> : null}
        <button
          onClick={onClickSubmit}
          type="submit"
          className={styles.form_inputBlock_addBtn}
        >
          <span>+</span>
        </button>
      </div>
    </form>
  );
}

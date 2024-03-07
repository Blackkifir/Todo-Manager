import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_flex}>
        <h1>Todo-Manager</h1>
      </div>
    </header>
  );
}

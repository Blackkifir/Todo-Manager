import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_flex}>
        <h1>Todo-Manager</h1>
      </div>
    </header>
  );
};

export default Header;
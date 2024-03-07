import TodoList from '../components/TodoList/TodoList';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  );
}

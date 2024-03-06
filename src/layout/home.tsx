import TodoList from '../components/TodoList/todoList';
import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_flex}>
        <TodoList />
      </div>
    </main>
  );
};

export default Home;
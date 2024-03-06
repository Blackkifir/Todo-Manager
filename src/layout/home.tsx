import TodoList from '../components/TodoList/todoList';
import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  );
};

export default Home;
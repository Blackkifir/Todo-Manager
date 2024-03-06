import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_flex}>
        <span>&copy</span>
      </div>
    </footer>
  );
};

export default Footer;
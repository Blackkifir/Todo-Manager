import './globals.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './layout/home';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

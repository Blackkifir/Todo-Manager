import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './layout/Home';

import './styles/globals.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

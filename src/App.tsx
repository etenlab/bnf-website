import './App.css';

import Heaedr from './components/Header';
import Footer from './components/Footer';
import Router from './routes/Routes'

function App() {
  return (
    <div className="App">
      <Heaedr />
      <Router />
      <Footer />
    </div>
  );
}

export default App;

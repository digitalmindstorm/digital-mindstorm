import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
     <Footer/>
    </Router>

    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Carrusel from './components/Carrusel/Carrusel';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Carrusel />
      <Cards />
    </>
  );
}

export default App;

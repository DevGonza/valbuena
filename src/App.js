import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Carrusel from './components/Carrusel/Carrusel';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <>
   <Navbar/>
   <About/>
   <Carrusel/>
   </>
  );
}

export default App;

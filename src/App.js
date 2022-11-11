import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;

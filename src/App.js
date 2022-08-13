import "./App.css";
// import Button1 from './Components/button';
import Nav from "./Components/Navbar.js";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { Route, Routes } from 'react-router-dom';
import About from "./Components/About";
import Moves from "./Components/Moves";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav label0="home" label1="moves" label2="about" />
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Home' element={<Home />}/>
        <Route path='Moves' element={<Moves />}/>
        <Route path='About' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

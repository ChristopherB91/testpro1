import "./App.css";
// import Button1 from './Components/button';
import Nav from "./Components/Navbar.js";
import logo from "./ShinobiPic.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav label0="home" label1="moves" label2="about" />
      </header>
      <footer className="App-footer">
      <span>copyright @Chris</span>
      </footer>
    </div>
  );
}

export default App;

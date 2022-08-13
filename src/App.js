import "./App.css";
// import Button1 from './Components/button';
import Nav from "./Components/Navbar.js";
import logo from "./ShinobiPic.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav label0="home" label1="moves" label2="about" />

        <img src={logo} alt="Shinobi logo" />

        <p1 className="body">Welcome to Shinobi Counter</p1>
        <p2 className="body">
          Where you can learn how to counter abilities in Shinob Striker
        </p2>
      </header>
    </div>
  );
}

export default App;

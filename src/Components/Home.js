import React from "react";
import logo from "./Images/ShinobiPic.png";


function Home() {
  return (
    <div className="Home">
      <img src={logo} alt="Shinobi logo" />
      <p1>Welcome to Shinobi Counter</p1>
      <p2><i>Where you can learn how to counter abilities in Shinob Striker</i></p2>
      
    </div>
  );
}

export default Home;

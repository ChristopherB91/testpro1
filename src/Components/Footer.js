import React from "react";
import logo from "./Images/ShinobiPic.png";
function Footer() {
  return (
    <footer className="App-footer">
      <img src={logo} alt="Shinobi logo" />
      <div className="FC">
      <span>Made by Chris</span>
      <span>Email:chrisbrowne91@gmail.com</span>
      <span>
        <a
          href="https://www.linkedin.com/in/christopher-browne91/"
          target="_blank"
          rel="noreferrer"
          id="LD"
        >
          LinkedIn
        </a>
      </span>
      <span>
        <a
          href="https://github.com/ChristopherB91"
          target="_blank"
          rel="noreferrer"
          id="Ghub"
        >
          Github
        </a>
      </span>
      </div>
    </footer>
  );
}

export default Footer;

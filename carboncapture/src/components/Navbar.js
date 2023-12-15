import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      </nav>
      <div className="connect-button">
        <button>Connect</button>
      </div>
    </div>
  );
}

export default Navbar;

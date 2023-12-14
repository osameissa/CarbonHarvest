import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <h1>Check 2 1 2</h1>
        <Menu /> {/* Corrected placement of Menu component */}
      </body>
    </div>
  );
}

export default App;

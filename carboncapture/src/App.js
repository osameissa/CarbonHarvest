import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div>
      <header></header>
      <body className = "home">
        <Navbar />
        <h1>Carbon Harvest 🌳</h1>
        <h2>Empowering Farmers 🚜</h2>
        <h2>Enriching Earth 🌍</h2>
      </body>
    </div>
  );
}

export default App;

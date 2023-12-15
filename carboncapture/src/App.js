import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div>
      <header></header>
      <body className="home">
        <Navbar />
        <div className="homeContainer">
          <h1>Carbon Harvest 🌳</h1>
          <h2>Empowering Farmers &nbsp;&nbsp;🚜</h2>
          <h2>Enriching Earth &nbsp;&nbsp;🌍</h2>
        </div>
      </body>
    </div>
    
  );
  
}

export default App;

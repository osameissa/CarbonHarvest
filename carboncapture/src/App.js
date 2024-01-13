import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact.js";
import LoggedIn from "./pages/LoggedIn";
import MintPage from "./pages/MintPage";

function App() {
  document.title = "CarbonHarvest.io";
  return (
    <Router>
      <div>
        <header></header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loggedIn" element={<LoggedIn />} />{" "}
            <Route path="/MintPage" element={<MintPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

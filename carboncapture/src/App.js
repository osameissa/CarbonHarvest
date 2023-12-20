import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact.js";
import LoggedIn from "./pages/LoggedIn"; // Import the LoggedIn component

function App() {
  document.title = "Carbon Harvest";
  return (
    <Router>
      <div>
        <header></header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loggedIn" element={<LoggedIn />} /> {/* Add this line */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

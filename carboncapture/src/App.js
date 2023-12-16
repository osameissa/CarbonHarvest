import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <div>
        <Home />
        <header></header>
        <main>
          <Routes>
            <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

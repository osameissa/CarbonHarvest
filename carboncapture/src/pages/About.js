// About.js
import React from "react";
import Navbar from "../components/Navbar.js";

function About() {
  return (
    <body class="aboutPage">
      <div>
        <Navbar />
        <div class="container">
          <h1>About Us 🔍 </h1>
          <br></br>
          <h2>
            We are a passionate team dedicated to empowering farmers and
            enriching the enviroment.
          </h2>
        </div>
      </div>
    </body>
  );
}

export default About;

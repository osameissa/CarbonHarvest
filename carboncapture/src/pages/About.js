// About.js
import React from "react";
import Navbar from "../components/Navbar.js";
import Cc from "../components/Cc.js";

function About() {
  return (
    <body class="aboutPage">
      <div>
        <Navbar />
        <div class="container">
          <h1>About Us 🔍 </h1>
          <h2>
            We are a passionate team at CarbonHarvest dedicated to empowering
            farmers and enriching the enviroment.
          </h2>
        </div>
      </div>
      <Cc />
    </body>
  );
}

export default About;

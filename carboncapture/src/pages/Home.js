import React from "react"; // Make sure to import React at the beginning
import Navbar from "../components/Navbar.js";
import Cc from "../components/Cc.js";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <h1>Carbon Harvest 🌳</h1>
        <h2>Empowering Farmers &nbsp;&nbsp;🚜</h2>
        <h2>Enriching Earth &nbsp;&nbsp;🌍</h2>
      </div>
      <Cc/>
    </div>
  );
}

export default Home;

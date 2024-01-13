// MintPage.js
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import "./MintPage.css";
import Cc from "../components/Cc";

const MintPage = () => {
  const [mintAmount, setMintAmount] = useState("");

  const handleMintAmountChange = (event) => {
    const value = event.target.value;
    // Validate if the value is a number between 1 and 100
    if (/^\d+$/.test(value) && value >= 1 && value <= 100) {
      setMintAmount(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the form submission with the mintAmount
    console.log("Mint Amount:", mintAmount);
    // You can also reset the form or perform other actions
    setMintAmount("");
  };

  return (
    <body className="mintPage">
      <BackButton />
      <div className="container">
        <h5>Mint</h5>
        <div class="mintText">
        <form onSubmit={handleSubmit}>
          <label htmlFor="mintAmount">Enter the mint amount (1-100):</label>
          <input
            type="number"
            id="mintAmount"
            name="mintAmount"
            value={mintAmount}
            onChange={handleMintAmountChange}
            min="1"
            max="100"
          />
          <button type="submit">Mint</button>
        </form>
        </div>
        <Cc />
      </div>
    </body>
  );
};

export default MintPage;

// MintButton.js
import React from "react";
import { useNavigate } from "react-router-dom";

const MintButton = () => {
  const navigate = useNavigate();

  const handleMinting = () => {
    // Add logic to handle minting, for example, redirect to a minting interface
    // You can replace '/minting' with the actual route of your minting interface
    navigate("/MintPage");
  };

  return (
    <div className="mint-container">
      <button className="mint-btn" onClick={handleMinting} title="Mint">
        Mint
      </button>
    </div>
  );
};

export default MintButton;

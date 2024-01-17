import React from "react";
import { useNavigate } from "react-router-dom";

const MintButton = () => {
  const navigate = useNavigate();

  const handleMinting = () => {
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

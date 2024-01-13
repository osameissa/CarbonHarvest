// BackButton.js
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div className="back-button-container">
      <button className="back-btn" onClick={handleGoBack} title="Back">
        Back
      </button>
    </div>
  );
};

export default BackButton;

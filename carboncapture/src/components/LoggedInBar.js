// LoggedInBar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import MintButton from "../components/MintButton";


const LoggedInBar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);

        // Disconnect MetaMask by requesting accounts
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Route back to the home page
        navigate("/");
      } else {
        console.error("MetaMask not installed");
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <div className="navbar">
      <nav>
      <MintButton />
      </nav>
      <div className="connect-button">
        <button className="signOutBtn" onClick={handleSignOut} title="Sign Out">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default LoggedInBar;

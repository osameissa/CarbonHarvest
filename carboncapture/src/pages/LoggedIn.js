import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Navbar from "../components/Navbar.js";
import Cc from "../components/Cc.js";
import LoggedInBar from "../components/LoggedInBar.js";

function LoggedIn() {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.request({ method: "eth_requestAccounts" });

          // Get the selected address from MetaMask
          const accounts = await web3.eth.getAccounts();

          // Update the wallet address in the state
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error.message);
        }
      } else {
        console.error("MetaMask not installed");
      }
    };

    loadWeb3();
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <div className="loggedInPage">
      <LoggedInBar/>
      <div className="loggedInContainer">
        <br />
        <div className="container2">
          <h1>Welcome</h1>
          <h4>{walletAddress}</h4>
        </div>
      </div>
      <Cc />
    </div>
  );
}

export default LoggedIn;

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
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error.message);
        }
      } else {
        console.error("MetaMask not installed");
      }
    };

    loadWeb3();
  }, []);

  return (
    <div className="loggedInPage">
      <LoggedInBar />
      <div className="loggedInContainer">
        <br />

        <div className="container2">
          <h4>Welcome, {walletAddress}!</h4>
          <div className="container-grid">
            <div className="container-grid1">
              Assets (ERC-721):
              <div className="container-grid3">NFT-grid</div>
            </div>
            <div className="container-grid2">
              Yield (ERC-20): <div className="container-grid4">Yield-graph & assets</div>
            </div>
          </div>
        </div>
      </div>
      <Cc />
    </div>
  );
}

export default LoggedIn;

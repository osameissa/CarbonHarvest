import React, { useState, useEffect } from "react";
import Web3 from "web3";
import MyERC721Contract from "../abi/MyERC721.json";
import BackButton from "../components/BackButton";
import "./MintPage.css";
import Cc from "../components/Cc";

const MintPage = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [myERC721, setMyERC721] = useState(null);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const provider = window.ethereum;

        // Requesting accounts using the new method
        const addresses = await provider.request({
          method: "eth_requestAccounts",
        });
        console.log(addresses); // Log the addresses to the console

        const deployedNetwork = {
          address: "0xc3e8927CCC64b1BE97c2f35A1d7845f6D01decfA", // Replace with your contract's address
        };

        // Initializing the contract without checking the network
        const myERC721 = new web3.eth.Contract(
          MyERC721Contract.abi,
          deployedNetwork.address
        );
        setWeb3(web3);
        setAccounts(addresses);
        setMyERC721(myERC721);
      } catch (error) {
        console.error("Error in loadBlockchainData:", error);
        window.alert("Error connecting to MetaMask.");
      }
    } else {
      window.alert("Please install MetaMask.");
    }
  };

  const handleMint = async () => {
    if (myERC721) {
      try {
        await myERC721.methods.mint(accounts[0]).send({ from: accounts[0] });
        console.log("Minting successful");
      } catch (error) {
        console.error("Error while minting:", error);
      }
    }
  };

  return (
    <body className="mintPage">
      <BackButton />
      <div className="container">
        <button className="mint-btn2" onClick={handleMint}>
          Mint
        </button>
      </div>
      <Cc />
    </body>
  );
};

export default MintPage;

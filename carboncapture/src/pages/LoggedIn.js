import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { Network, Alchemy } from "alchemy-sdk";
import LoggedInBar from "../components/LoggedInBar";
import Cc from "../components/Cc";

// Setup Alchemy with your API key and network
const settings = {
  apiKey: "qNwdDTZTyO54jZQ6zUwJPNUnChF1Yot4", // Your Alchemy API key
  network: Network.MATIC_MUMBAI, // Polygon Mumbai Testnet
};

const alchemy = new Alchemy(settings);

function LoggedIn() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          setWalletAddress(accounts[0]);
          loadNFTs(accounts[0]);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error.message);
        }
      } else {
        console.error("MetaMask not installed");
      }
    };

    const loadNFTs = async (address) => {
      try {
        const nftsOwned = await alchemy.nft.getNftsForOwner(address);
        setNfts(nftsOwned.ownedNfts);
      } catch (error) {
        console.error("Error fetching NFTs with Alchemy:", error);
      }
    };

    loadWeb3();
  }, []);

  // Define a default photo URL
  const defaultPhotoUrl =
    "https://static.vecteezy.com/system/resources/previews/024/786/062/original/illustration-of-trees-isolated-on-background-with-ai-generated-free-png.png"; // Replace with your default photo URL
  console.log(nfts);
  return (
    <div className="loggedInPage">
      <LoggedInBar />
      <br />
      <div className="loggedInContainer">
        <h4>Welcome, {walletAddress}!</h4>

        <div className="container-grid3">
<div className="assets">Assets (ERC-721):</div>
          <div className="nft-grid">
            {nfts.length > 0 ? (
              nfts.map((nft, index) => (
                <div key={index} className="nft-item">
                  <img
                    className="tree"
                    src={
                      nft.media && nft.media.length > 0
                        ? nft.media[0].gateway
                        : defaultPhotoUrl
                    }
                    alt={`NFT ${nft.title || "Unnamed NFT"}`}
                  />
                  <p className="tokenId">
                    Token ID: {nft.tokenId || "Unknown"}
                  </p>
                </div>
              ))
            ) : (
              <p className="no">No NFTs found</p>
            )}
          </div>
        </div>
        <Cc />
      </div>
    </div>
  );
}

export default LoggedIn;

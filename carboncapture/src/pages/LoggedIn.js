import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { Network, Alchemy } from "alchemy-sdk";
import LoggedInBar from "../components/LoggedInBar";
import Cc from "../components/Cc";
import MyERC721Contract from "../abi/MyERC721.json";
const ERC721_ADDRESS = "0xc3e8927CCC64b1BE97c2f35A1d7845f6D01decfA";
const web3 = new Web3(window.ethereum);

const myERC721Contract = new web3.eth.Contract(
  MyERC721Contract.abi,
  ERC721_ADDRESS
);
const settings = {
  apiKey: "qNwdDTZTyO54jZQ6zUwJPNUnChF1Yot4",
  network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);

function LoggedIn() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  const [selectedTokenId, setSelectedTokenId] = useState(null);

  useEffect(() => {
    const loadWeb3 = async () => {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setWalletAddress(accounts[0]);
        loadNFTs(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error.message);
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

  const handleNftSelection = (nft, tokenId) => {
    if (selectedNft === nft) {
      setSelectedNft(null);
      setSelectedTokenId(null);
    } else {
      setSelectedNft(nft);
      setSelectedTokenId(tokenId);
      console.log("Selected Token ID:", tokenId);
    }
  };

  const handleClaimTokens = async () => {
    if (selectedTokenId) {
      try {
        await myERC721Contract.methods.claimTokens(selectedTokenId).send({
          from: walletAddress,
        });
        console.log("Tokens claimed successfully!");
      } catch (error) {
        console.error("Error claiming tokens:", error);
      }
    } else {
      console.error("No NFT selected to claim tokens for.");
    }
  };

  const defaultPhotoUrl =
    "https://static.vecteezy.com/system/resources/previews/024/786/062/original/illustration-of-trees-isolated-on-background-with-ai-generated-free-png.png";
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
                <div
                  key={index}
                  className={`nft-item ${
                    selectedNft === nft ? "selected" : ""
                  }`}
                  onClick={() => handleNftSelection(nft, nft.tokenId)}
                >
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
          {selectedTokenId && (
            <button className="claim-btn" onClick={handleClaimTokens}>
              Claim Tokens
            </button>
          )}
        </div>
        <Cc />
      </div>
    </div>
  );
}

export default LoggedIn;

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying ERC20Token...");
  const ERC20Token = await ethers.getContractFactory("YieldToken");
  const erc20Token = await ERC20Token.deploy();
  await erc20Token.deployed();
  console.log("ERC20Token deployed to:", erc20Token.address);

  console.log("Deploying NFT...");
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy("MyNFT", "NFT", erc20Token.address);
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // memento-mori
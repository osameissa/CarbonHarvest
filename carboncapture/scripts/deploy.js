const { Web3 } = require("web3");
const MyERC20ABI =
  require("../artifacts/contracts/MyERC20.sol/MyERC20.json").abi;
const MyERC721ABI =
  require("../artifacts/contracts/MyERC721.sol/MyERC721.json").abi;

async function deploy() {
  const deployerPrivateKey =
    "9911d9412911b0ef4830133682b21a143b8904c865e29b6c99b041efcfee2a7f";

  // Connect to the Ethereum network using the private key
  const provider = new Web3("https://rpc.ankr.com/polygon_mumbai");

  // Get the deployer's address
  const accounts = await provider.eth.getAccounts();
  const deployerAddress = 0xf0a0fcccfea76bc05602a3d41f3a1c08d7ef6a3e;

  // Deploy MyERC20 with the specified address as the owner
  const MyERC20Factory = new provider.eth.Contract(MyERC20ABI);
  console.log("MyERC20Factory ABI:", MyERC20Factory.options.jsonInterface);
  const MyERC20 = await MyERC20Factory.deploy({
    data: MyERC20ABI.bytecode,
    arguments: ["0xf0a0fcccfea76bc05602a3d41f3a1c08d7ef6a3e"], // Pass the specified address as the initial owner
  }).send({
    from: deployerAddress,
    gas: "5000000",
  });

  // Deploy MyERC721 with the specified address as the owner
  await MyERC721.methods.mint(deployerAddress, amountToMint).send({
    from: deployerAddress,
    gas: "5000000",
  });

  console.log("MyERC20 deployed to:", MyERC20.options.address);
  console.log("MyERC721 deployed to:", MyERC721.options.address);
}

deploy();

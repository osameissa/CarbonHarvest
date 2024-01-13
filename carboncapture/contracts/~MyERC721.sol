// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./MyERC20.sol";  // Import the MyERC20 contract

contract MyERC721 is ERC721Enumerable, Ownable {
    uint256 public constant TOKENS_PER_DAY = 68.5 * 10**18; // 68.5 tokens per day
    MyERC20 private myERC20Token;  // Instance of the MyERC20 contract

    mapping(uint256 => uint256) private lastMintTimestamp;

    constructor(address initialOwner, MyERC20 _myERC20Token) 
        ERC721("MyTree", "TREE") 
        Ownable(initialOwner) 
    {
        myERC20Token = _myERC20Token;  // Set the MyERC20 contract instance
    }

    function mint(address account) external onlyOwner {
        uint256 tokenId = totalSupply();
        _mint(account, tokenId);
        lastMintTimestamp[tokenId] = block.timestamp;
    }

    function burn(uint256 tokenId) external onlyOwner {
        _burn(tokenId);
    }

    function claimTokens(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Not token owner");
        uint256 elapsedTime = block.timestamp - lastMintTimestamp[tokenId];
        uint256 tokensToMint = (elapsedTime * TOKENS_PER_DAY) / (24 hours);
        require(tokensToMint > 0, "No tokens to claim");

        myERC20Token.mint(msg.sender, tokensToMint);  // Mint ERC20 tokens
        lastMintTimestamp[tokenId] = block.timestamp;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./MyERC20.sol";  // Import the MyERC20 contract

contract MyERC721 is ERC721Enumerable, Ownable {
    uint256 public constant TOKENS_PER_DAY = 68.5 * 10**18; // 68.5 tokens per day
    MyERC20 private myERC20Token;  // Instance of the MyERC20 contract

    // Mapping from token ID to token URI
    mapping(uint256 => string) private _tokenURIs;

    // Base URI
    string private _baseURIextended;

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
        // Generate and set token URI for the newly minted token
        _setTokenURI(tokenId, generateTokenURI(tokenId));
        lastMintTimestamp[tokenId] = block.timestamp;
    }

    function generateTokenURI(uint256 tokenId) internal view returns (string memory) {
        return string(abi.encodePacked(_baseURIextended, uint256ToString(tokenId)));
    }

    function setBaseURI(string memory baseURI_) external onlyOwner {
        _baseURIextended = baseURI_;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        require(ownerOf(tokenId) !=address(0), "ERC721Metadata: URI set of nonexistent token");
_tokenURIs[tokenId] = _tokenURI;
}
function tokenURI(uint256 tokenId) public view override returns (string memory) {
    require(ownerOf(tokenId) != address(0), "ERC721Metadata: URI query for nonexistent token");
    return _tokenURIs[tokenId];
}

function claimTokens(uint256 tokenId) external {
    require(ownerOf(tokenId) == msg.sender, "Not token owner");
    uint256 elapsedTime = block.timestamp - lastMintTimestamp[tokenId];
    uint256 tokensToMint = (elapsedTime * TOKENS_PER_DAY) / (24 hours);
    require(tokensToMint > 0, "No tokens to claim");
        myERC20Token.mint(msg.sender, tokensToMint);  // Mint ERC20 tokens
    lastMintTimestamp[tokenId] = block.timestamp;
}

function uint256ToString(uint256 value) internal pure returns (string memory) {
    // Convert an uint256 to a string
    if (value == 0) {
        return "0";
    }
    uint256 temp = value;
    uint256 digits;
    while (temp != 0) {
        digits++;
        temp /= 10;
    }
    bytes memory buffer = new bytes(digits);
    while (value != 0) {
        digits -= 1;
        buffer[digits] = bytes1(uint8(48 + value % 10));
        value /= 10;
    }
    return string(buffer);
}}



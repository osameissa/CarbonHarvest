// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC20 is ERC20, Ownable {
    address private erc721Contract; 

    constructor(address initialOwner) Ownable(initialOwner) ERC20("CarbonCreditToken", "CCT") {
    }

    function setERC721Contract(address _erc721Contract) external onlyOwner {
        erc721Contract = _erc721Contract;
    }

    function mint(address account, uint256 amount) external {
        require(msg.sender == erc721Contract, "Caller is not the ERC721 contract");
        _mint(account, amount);
    }
}
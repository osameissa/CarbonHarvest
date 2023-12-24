// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract YieldToken is ERC20 {
    constructor() ERC20("YieldToken", "TCC") {
        _mint(msg.sender, 1000000 * 10**decimals()); // Mint initial supply to contract deployer
    }
}
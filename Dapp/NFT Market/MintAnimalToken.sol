// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintAnimalToken is ERC721Enumerable {
    constructor() ERC721("ChoAnimals", "CAS") {}

    function mintAnimalToken() public {
        uint256 animalTokenId = totalSupply() + 1;

        _mint(msg.sender, animalTokenId);
    }
}
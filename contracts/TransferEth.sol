// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

// 使用合约向特定地址转账
contract TransferEth is Ownable {
    constructor(address _to, uint _value)
        payable 
        onlyOwner {

        require(_to != address(0));
        require(_value > 0);

        payable(_to).transfer(_value);

    }
}
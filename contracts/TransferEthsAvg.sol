// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

// 使用合约向特定多个地址转账
contract TransferEthsAvg is Ownable {
    constructor(address[] memory _tos, uint _value)
        payable 
        onlyOwner {
        require(_tos.length > 0);

        uint oneValue = _value/_tos.length;
        // uint oneValue = address(this).balance/_tos.length;

        for(uint i=0; i<_tos.length; i++){
            require(_tos[i] != address(0));
            payable(_tos[i]).transfer(oneValue);
        }

    }
}
import { ethers } from "hardhat";
import { mnemonic } from "../config";

async function main() {
  const nums = new Array(10).fill(1)
  const tos = nums.map((item, i) => {
    return ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${i+1}`).address;
  })
  const amount = ethers.utils.parseEther("0.5");

  const TransferEthsAvgContract = await ethers.getContractFactory("TransferEthsAvg");
  const transferEthsAvg = await TransferEthsAvgContract.deploy(tos,amount, { value: amount });

  await transferEthsAvg.deployed();

  console.log(`TransferEthsAvg to ${tos} deployed to ${transferEthsAvg.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

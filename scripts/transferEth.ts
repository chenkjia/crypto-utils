import { ethers } from "hardhat";

async function main() {
  const to = '0xbdbde36006063fb680794c1fa1f5abC7F3bEEEAF';

  const amount = ethers.utils.parseEther("0.1");

  const TransferEthContract = await ethers.getContractFactory("TransferEth");
  const transferEth = await TransferEthContract.deploy(to,amount, { value: amount });

  await transferEth.deployed();

  console.log(`TransferEth to ${to} deployed to ${transferEth.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("Sandwich");
  const contract = await Contract.deploy('0x0000000000');

  await contract.deployed();

  console.log(`deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

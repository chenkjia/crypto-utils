// 多钱包控制
import { ethers } from "hardhat";
import { mnemonic } from "../config";
async function main() {
  const wallet = await ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/0`);
  console.log(wallet)
  for (let i = 0; i < 100; i++) {
    const wallet = await ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${i}`);
    console.log(wallet.address)
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

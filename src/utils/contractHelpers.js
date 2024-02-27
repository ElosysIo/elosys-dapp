import web3NoAccount from "./web3";
import MintContract from "./abis/mintAbi.json";
import BusdAbi from "./abis/busdAbi.json";
import DopAbi from "./abis/dopAbi.json";

const getContract = (abi, address, web3) => {
  const _web3 = web3 ?? web3NoAccount;
  return new _web3.eth.Contract(abi, address);
};

export const usdtContract = (address, web3) => {
  return getContract(BusdAbi, address, web3);
};

export const dopContract = (address, web3) => {
  return getContract(DopAbi, address, web3);
};

export const mintContract = (address, web3) => {
  return getContract(MintContract, address, web3);
};

import { utils } from "ethers";

export const gasPrice = async (library) => {
  return await library.getGasPrice();
};

export const unitParser = (units, decimals = 18) => {
  if (!units) return 0;
  return utils.parseUnits(units.toString(), decimals ? decimals : 18);
};

export const unitFormatter = (units, decimals = 18) => {
  if (!units) return 0;
  return Number(utils.formatUnits(units, decimals ? decimals : 18));
};

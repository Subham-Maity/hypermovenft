import { Interface } from "@ethersproject/abi";
import MarketplaceABI from "../config/ABI/Marketplace.json";
import MeterMarketplaceABI from "../config/ABI/MarketplaceMeter.json";
import MTRG_ABI from "../config/ABI/MTRG_ABI.json";

export const getMarketplaceInterface = () => {
  return new Interface(MarketplaceABI);
};

export const getMarketplaceInterfaceForMeter = () => {
  return new Interface(MeterMarketplaceABI);
};

export const getTokenInterface = () => {
  return new Interface(MTRG_ABI);
};

/**
 * get NFT Marketplace encoded data
 * @param iface
 * @param methodName
 * @param values
 * @returns
 */
export const getMarketplaceCallData = (iface, methodName, values) => {
  return iface.encodeFunctionData(methodName, values);
};

export const getTokenCallData = (iface, methodName, values) => {
  return iface.encodeFunctionData(methodName, values);
};

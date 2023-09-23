import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import MTRG_ABI from "../config/ABI/MTRG_ABI.json";

export const useContract = (ABI, address) => {
  const { library, chainId } = useWeb3React();
  return useMemo(() => {
    if (!address || !library || !chainId) return null;
    if (chainId !== 82) return null;
    return new Contract(address, ABI, library);
  }, [ABI, address, library, chainId]);
};

export const useTokenContract = (address) => {
  return useContract(MTRG_ABI, address);
};

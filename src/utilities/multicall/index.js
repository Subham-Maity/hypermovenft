import { aggregate } from "@makerdao/multicall";
import { rpcUrls } from "../../config/rpc";
import { multicallAddresses } from "../../config/multicall";

export const multicall = async (chainId, calls) => {
  if (!calls) return null;

  const results = await aggregate(calls, {
    rpcUrl: rpcUrls?.[chainId],
    multicallAddress: multicallAddresses?.[chainId],
  });

  console.log("results", results);

  return results;
};

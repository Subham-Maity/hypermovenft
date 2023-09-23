import { multicall } from ".";

export const createMulticallForSale = (target, args) => {
  return {
    target,
    call: ["_sales(uint256)(address,uint256,uint256,uint256,bool)", ...args],
    returns: [
      [`seller_${parseInt(args[0])}`],
      [`tokenId_${parseInt(args[0])}`],
      [`price_${parseInt(args[0])}`],
      [`quantity_${parseInt(args[0])}`],
      [`active_${parseInt(args[0])}`],
    ],
  };
};

export const createCallsForSale = (target, tokenIds) => {
  let calls = [];

  for (let i = 0; i < tokenIds.length; i++) {
    calls[i] = createMulticallForSale(target, [tokenIds[i].toString()]);
  }
  return calls;
};

export const getMulticallSale = async (chainId, target, tokenIds) => {
  if (tokenIds?.length === 0) return null;
  try {
    console.log({ target });
    const calls = createCallsForSale(target, tokenIds);

    const OwnerMulticall = await multicall(chainId, calls);

    let assets = {};

    if (!OwnerMulticall) return;
    const originalResponse = OwnerMulticall.results.original;

    for (let i = 1; i <= tokenIds?.length; i++) {
      assets[i] = {
        seller: originalResponse?.[`seller_${i}`],
        tokenId: i,
        price: Number(originalResponse?.[`price_${i}`]),
        quantity: Number(originalResponse?.[`quantity_${i}`]),
        active: originalResponse?.[`active_${i}`],
      };
    }

    return assets;
  } catch (err) {
    if (err instanceof Error) {
      console.log("getMulticallSale", err);
    }
    return null;
  }
};

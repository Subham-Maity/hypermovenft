import { useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  getMarketplaceCallData,
  getMarketplaceInterface,
  getMarketplaceInterfaceForMeter,
} from "../utilities/contractUtils";
import { marketplaceContracts } from "../config/contracts";
import { gasPrice, unitParser } from "../utilities";

export const BUY_TRANSACTION_STATUS = {
  BUY_LOADING: 0,
  BUY_COMPLETED: 1,
  BUY_ERROR: 2,
};
export const useBuy = () => {
  let [buyTransactionStatus, setBurnTransactionStatus] = useState();
  let [transactionHash, setTransactionHash] = useState();
  const [buyErrorMessage, setBuyErrorMessage] = useState();

  let { account, chainId, library } = useWeb3React();

  let marketplace = marketplaceContracts[chainId];

  const buyCallback = useCallback(
    async (tokenId, quantity, price) => {
      try {
        if (marketplace && account && tokenId && chainId) {
          const fees = price * quantity;
          setBurnTransactionStatus(BUY_TRANSACTION_STATUS.BUY_LOADING);

          let iface =
            chainId !== 82
              ? getMarketplaceInterface()
              : getMarketplaceInterfaceForMeter();
          let callData =
            chainId !== 82
              ? getMarketplaceCallData(iface, "buy", [tokenId, quantity])
              : getMarketplaceCallData(iface, "buyWithERC20", [
                  tokenId,
                  quantity,
                ]);

          let gasLimit = await library.getSigner().estimateGas({
            from: account,
            to: marketplace,
            data: callData,
            value: chainId !== 82 ? unitParser(fees) : unitParser(0),
          });

          let gas_price = await gasPrice(library);

          const buy = await library.getSigner().sendTransaction({
            from: account,
            to: marketplace,
            data: callData,
            gasLimit,
            gasPrice: gas_price,
            value: chainId !== 82 ? unitParser(fees) : unitParser(0),
          });

          await buy.wait(2);
          setBurnTransactionStatus(BUY_TRANSACTION_STATUS.BUY_COMPLETED);
          setTransactionHash(buy?.hash);
          alert("Transaction successfully!!");
        }
      } catch (err) {
        // if (err instanceof Error) {
        alert("Something went wrong");
        setBuyErrorMessage(err?.data?.message);
        // }
        setBurnTransactionStatus(BUY_TRANSACTION_STATUS.BUY_ERROR);
      }
    },
    [account, marketplace, library, chainId]
  );

  return {
    buyTransactionStatus,
    buyCallback,
    transactionHash,
    buyErrorMessage,
  };
};

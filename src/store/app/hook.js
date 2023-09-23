import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";

import { setAppChainId } from ".";
import { SUPPORTED_CHAIN_IDS, chainConfig } from "../../config/chains";
import { utils } from "ethers";

export const useSwitchChainId = () => {
  const { library } = useWeb3React();
  const dispatch = useDispatch();

  return useCallback(
    async (newAppChainId, noSwitch) => {
      const isMetaMask = window.ethereum && window.ethereum.isMetaMask;
      try {
        if (!SUPPORTED_CHAIN_IDS.includes(newAppChainId)) return null;
        if (isMetaMask && !noSwitch) {
          await library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: utils.hexValue(newAppChainId) }],
          });
        }

        dispatch(setAppChainId({ chainId: newAppChainId }));

        return true;
      } catch (err) {
        //any add temp

        if (err?.code === 4902) {
          const ethereum = window?.ethereum;
          /// @ts-ignore
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: chainConfig[newAppChainId],
          });
          dispatch(setAppChainId({ chainId: newAppChainId }));
        }
        console.log("Error in change of app chainId: ", err?.message);
        return false;
      }
    },
    [dispatch, library]
  );
};

export const useAppChainId = () => {
  return useSelector((state) => state.app.chainId);
};

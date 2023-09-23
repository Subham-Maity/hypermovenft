import { useCallback, useEffect, useState } from "react";
import { useTokenContract } from "./useContract";
import { gasPrice, unitParser, unitFormatter } from "../utilities";
import { useWeb3React } from "@web3-react/core";
import {
  getTokenCallData,
  getTokenInterface,
} from "../utilities/contractUtils";

// approval transactions
export const ApprovalTransactionStatus = {
  APPROVAL_LOADING: "APPROVAL_LOADING",
  APPROVAL_CONFIRMED: "APPROVAL_CONFIRMED",
  APPROVAL_ERROR: "APPROVAL_ERROR",
};

// to fetch allowance
export const useAllowance = (owner, spender, token, noCall) => {
  let tokenContract = useTokenContract(token);
  let [allowance, setAllownace] = useState();
  const { chainId } = useWeb3React();

  useEffect(() => {
    if (tokenContract && spender && owner && chainId === 82) {
      const derivedAllowance = async () => {
        try {
          let allowed = await tokenContract.allowance(owner, spender);
          setAllownace(allowed);
        } catch (err) {
          console.log("useAllowance Failed", err);
        }
      };
      derivedAllowance();
    }
  }, [tokenContract, owner, spender, noCall, chainId]);

  return allowance;
};

export const useApproval = (allowedAmount, amountToSpend, spender, tokenId) => {
  let [isApprovalRequired, setApprovalRequired] = useState(true);
  const [tx, setTx] = useState(false);

  let [approvalTxStatus, setApprovalTxStatus] = useState();
  const { account, library } = useWeb3React();

  useEffect(() => {
    if (!allowedAmount || !amountToSpend) return;
    if (unitFormatter(allowedAmount) > unitFormatter(amountToSpend)) {
      setApprovalRequired(false);
    }
  }, [allowedAmount, amountToSpend]);

  const iface = getTokenInterface();

  let amount = unitParser("100000");
  const triggeredApproval = useCallback(async () => {
    try {
      if (!account || !spender || !tokenId) return null;
      setApprovalTxStatus(ApprovalTransactionStatus.APPROVAL_LOADING);

      const callData = getTokenCallData(iface, "approve", [
        spender,
        amount.toString(),
      ]);
      console.log("callData", callData);

      let gasLimit = await library.getSigner().estimateGas({
        from: account,
        to: tokenId,
        data: callData,
        value: 0,
      });

      let gas_price = await gasPrice(library);

      console.log("gas_price", gas_price, "tokenId", tokenId);

      const approve = await library.getSigner().sendTransaction({
        from: account,
        to: tokenId,
        data: callData,
        gasLimit,
        gasPrice: gas_price,
        value: 0,
      });

      await approve.wait(2);
      setTx(approve?.transactionHash);
      setApprovalRequired(false);
      setApprovalTxStatus(ApprovalTransactionStatus.APPROVAL_CONFIRMED);
    } catch (err) {
      console.log("useApproval Failed", err);
      setApprovalTxStatus(ApprovalTransactionStatus.APPROVAL_ERROR);
    }
  }, [spender, library, account, amount, iface, tokenId]);

  return {
    isApprovalRequired,
    approvalTxStatus,
    triggeredApproval,
    tx,
  };
};

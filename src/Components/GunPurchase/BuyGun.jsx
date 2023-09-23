import React, { useState } from "react";
// import {currency} from "../../config/"
// import  gunImg  from "../../Assets/gun.png";
import { ClipLoader } from "react-spinners";
import {
  FaEye,
  FaHeart,
  FaGlobeAmericas,
  FaTag,
  FaWallet,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import "./Gunpurchase.css";
import { useAppChainId } from "../../store/app/hook";
import { BUY_TRANSACTION_STATUS, useBuy } from "../../hooks/useBuy";
import { currency } from "../../config/networks";
import { ApprovalTransactionStatus, useAllowance, useApproval } from "../../hooks/useApprove";
import { useWeb3React } from "@web3-react/core";
import { marketplaceContracts, mtrgAddress, tokenContracts } from "../../config/contracts";
import { unitParser } from "../../utilities";
const BuyGun = ({
  createdBy,
  data,
  polygon,
  heading,
  headingNumber,
  gamingAsset,
  itemId,
  price,
  inGameAsset,
  quantity,
  availbleToBuy,
  // polygon,
  contractAddress,
  image,
}) => {
  const [counter, setCounter] = React.useState(1);

  const handleMinusCount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleBuy = () => {
    let a = buyCallback(Number(itemId), counter, Number(price));
    
    // console.log(a);
  };

  const handlePlusCount = () => {
    setCounter(counter + 1);
  };
  const appChainId = useAppChainId();

  const {account} = useWeb3React()

  const allowance = useAllowance(account, marketplaceContracts?.[appChainId], mtrgAddress)

  const {isApprovalRequired, triggeredApproval, approvalTxStatus} = useApproval(allowance, unitParser(counter * Number(price)), marketplaceContracts?.[appChainId], mtrgAddress) 

  console.log("isApprovalRequired", isApprovalRequired)

  const {
    buyCallback,
    buyTransactionStatus,
    transactionHash,
    buyErrorMessage,
  } = useBuy();
  
  
  return (
    <div className="gradientColor">
      <div className="">
        <div className="p-16 flex text-white flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex media mx-28 items-center md:w-1/4">
            <img
              className="rounded-md w-full"
              src={image}
              alt="NFT"
              height={800}
              width={600}
            />
          </div>
          <div className="md:ml-8">
            <h2 className="font-bold md:4xl text-6xl mb-6">
              {heading} {headingNumber}
            </h2>
            {/* <p className="font-sans text-2xl">
              Obtain a 700% increase in your income.
            </p> */}
            <div className="flex mb-4">
              <div className=" flex items-center bg-black rounded-md p-2 text-sm my-2">
                <FaEye className="text-white mr-2" />
                <span className="text-white font-sans">0</span>
              </div>
              <div className="ml-1 flex items-center bg-black rounded-md p-2 text-sm my-2">
                <FaHeart className="text-white mr-2" />
                <span className="text-white font-sans">0</span>
              </div>
              <div className="ml-1 flex items-center bg-black rounded-md p-2 text-sm my-2">
                <FaGlobeAmericas className="text-white mr-2" />
                <span className="text-white font-sans">{polygon}</span>
              </div>
              <div className="ml-1 flex items-center bg-black rounded-md p-2 text-sm my-2">
                <FaTag className="text-white mr-2" />
                <span className="text-white font-sans">{gamingAsset}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-2 rounded-md shadow bg-[#343444]">
                <p className="font-sans text-gray-400">{createdBy}</p>
                <p className="font-bold">Hypermove</p>
              </div>

              <div className="p-2 rounded-md shadow bg-[#343444]">
                <p className="font-sans text-gray-400">Contract Address</p>
                <p>
                  {/* 0x8b9c8CaD...f4a3 */}
                  {contractAddress.slice(0, 10) +
                    "..." +
                    contractAddress.slice(-4)}
                </p>
              </div>

              <div className="p-2 rounded-md flex justify-between shadow bg-[#343444]">
                <div className="flex justify-between gap-2">
                  <p className="font-sans text-gray-400">ITEM ID</p>
                  <p>{itemId}</p>
                </div>
                <div>
                  <p>{price} {currency[appChainId]}{/* {price + " "} {currency?.[appChainId]} */}</p>
                </div>
              </div>

              <div className="p-2 rounded-md flex justify-between shadow bg-[#343444]">
                <div className="flex justify-between">
                  <p className="font-sans text-gray-400 mr-3">Collection</p>
                  <p>{inGameAsset}</p>
                </div>
              </div>
            </div>

            <p>Select no. of tokens ({quantity} Tokens available for sale.)</p>

            <div className="flex items-center my-4 mr-2">
              <div className="flex items-center justify-center rounded-full border-2 border-blue-500 w-10 h-10">
                <button onClick={handleMinusCount} className="text-blue-500">
                  <FaMinus />
                </button>
              </div>
              <div className="mx-4 text-center w-12">
                <input
                  type="number"
                  value={counter}
                  onChange={(e) => setCounter(parseInt(e.target.value))}
                  className="text-center bg-transparent border-b-2 border-blue-500 text-white w-full"
                />
              </div>
              <div className="flex items-center justify-center rounded-full border-2 border-blue-500 w-10 h-10">
                <button onClick={handlePlusCount} className="text-blue-500">
                  <FaPlus />
                </button>
              </div>

              { appChainId === 82 ? 
              (
                <button
                  onClick={triggeredApproval}
                  className={`ml-12 flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-blue-500 hover:bg-white hover:border-white`}
                  disabled={!isApprovalRequired}
                >
                  { approvalTxStatus === ApprovalTransactionStatus.APPROVAL_LOADING ? (
                    <>
                    <ClipLoader/>
                    <span>Approve</span></>
                  ) : (
                    <>
                    <FaWallet size={16} className="text-blue-500" />
                    <span>Approve</span>
                    </>
                  )}
                  
                </button>
              ) : ""}
              

              <button
                onClick={handleBuy}
                className={`ml-12 flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-blue-500 hover:bg-white hover:border-white`}
                disabled={availbleToBuy && isApprovalRequired}
              >
                { buyTransactionStatus === BUY_TRANSACTION_STATUS.BUY_LOADING ? (
                  <>
                  <ClipLoader/>
                  <span>Buy Now</span></>
                ) : (
                  <>
                  <FaWallet size={16} className="text-blue-500" />
                  <span>Buy Now</span>
                  </>
                )}
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyGun;

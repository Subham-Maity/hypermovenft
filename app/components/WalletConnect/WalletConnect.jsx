
"use client"
import React from "react";
import { FaWallet } from "react-icons/fa";

const WalletConnect = () => {
  const handleConnect = () => {
    // do something to connect the wallet
  };

  return (
    <button
      onClick={handleConnect}
      className="flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-white text-xl"
    >
      <FaWallet size={16} />
      <span>Connect Wallet</span>
    </button>
  );
};

export default WalletConnect;
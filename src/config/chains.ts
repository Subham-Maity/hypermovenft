interface ChainConfig {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string;
  blockExplorerUrls: string[];
  iconUrls: string[];
}

export enum SUPPORTED_CHAIN_IDS {
  Binance = 56,
  Polygon = 137,
}

export const chainConfig: { [chainId: number]: ChainConfig[] } = {
  [SUPPORTED_CHAIN_IDS.Binance]: [
    {
      chainId: "0x38",
      chainName: "Binance Smart Chain (Mainnet)",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: "",
      blockExplorerUrls: ["https://bscscan.com/"],
      iconUrls: ["/images/chains/ethereum.png"],
    },
  ],
  [SUPPORTED_CHAIN_IDS.Polygon]: [
    {
      chainId: "0x89",
      chainName: "POLYGON Mainnet",
      nativeCurrency: {
        name: "MATIC TOKEN",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: "",
      blockExplorerUrls: ["https://polygonscan.com/"],
      iconUrls: ["/images/chains/polygon.png"],
    },
  ],
};

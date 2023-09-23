export const SUPPORTED_CHAIN_IDS = [56, 137, 56288, 82, 40, 66, 25, 8082];

export const CHAINS = {
  56: {
    name: "BNB",
    icon: "/chains/binance.png",
    rpc_url: process.env.REACT_APP_BSC_RPC_URL,
    nativeCurrency: "BSC",
    explorer: "https://bscscan.com/",
  },
  137: {
    name: "POLYGON",
    icon: "/chains/polygon.png",
    rpc_url: process.env.REACT_APP_POLYGON_RPC_URL,
    nativeCurrency: "MATIC",
    explorer: "https://polygonscan.com/",
  },
  56288: {
    name: "BOBA",
    icon: "/chains/boba.png",
    rpc_url: process.env.REACT_APP_BOBA_RPC_URL,
    nativeCurrency: "ETH",
    explorer: "https://blockexplorer.bnb.boba.network",
  },
  82: {
    name: "METER",
    icon: "/chains/meter.png",
    rpc_url: process.env.REACT_APP_METER_RPC_URL,
    nativeCurrency: "MTRG",
    explorer: "https://scan.meter.io/",
  },
  40: {
    name: "TELOS",
    icon: "/chains/telos.svg",
    rpc_url: process.env.REACT_APP_TELOS_RPC_URL,
    nativeCurrency: "TLOS",
    explorer: "https://explorer.telos.net/",
  },
  25: {
    name: "CRONOS",
    icon: "/chains/cronos.png",
    rpc_url: process.env.REACT_APP_CRONOS_RPC_URL,
    nativeCurrency: "CRO",
    explorer: "https://cronoscan.com/",
  },
  66: {
    name: "OKX",
    icon: "/chains/okx.jpg",
    rpc_url: process.env.REACT_APP_OKX_RPC_URL,
    nativeCurrency: "OKT",
    explorer: "https://www.okx.com/explorer/oktc",
  },
  8082: {
    name: "SHARDEUM",
    icon: "/chains/shardeum.png",
    rpc_url: process.env.REACT_APP_SHARDEUM_RPC_URL,
    nativeCurrency: "SHM",
    explorer: "https://explorer-sphinx.shardeum.org/",
  },
};

export const chainConfig = {
  56: [
    {
      chainId: "0x38",
      chainName: "Binance Smart Chain (Mainnet)",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: [""],
      blockExplorerUrls: ["https://bscscan.com/"],
      iconUrls: ["/chains/binance.png"],
    },
  ],
  137: [
    {
      chainId: "0x89",
      chainName: "POLYGON Mainnet",
      nativeCurrency: {
        name: "MATIC TOKEN",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: [""],
      blockExplorerUrls: ["https://polygonscan.com/"],
      iconUrls: ["/chains/polygon.png"],
    },
  ],
  56228: [
    {
      chainId: "0xdbe0",
      chainName: "BOBA Network",
      nativeCurrency: {
        name: "BOBA BNB",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://bnb.boba.network"],
      blockExplorerUrls: ["https://blockexplorer.bnb.boba.network"],
      iconUrls: ["/chains/boba.png"],
    },
  ],
  82: [
    {
      chainId: "0x52",
      chainName: "METER Mainnet",
      nativeCurrency: {
        name: "METER",
        symbol: "MTRG",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.meter.io"],
      blockExplorerUrls: ["https://scan.meter.io/"],
      iconUrls: ["/chains/meter.png"],
    },
  ],
  40: [
    {
      chainId: "0x28",
      chainName: "Telos EVM Mainnet",
      nativeCurrency: {
        name: "TELOS",
        symbol: "TLOS",
        decimals: 18,
      },
      rpcUrls: ["https://rpc1.eu.telos.net/evm"],
      blockExplorerUrls: ["https://explorer.telos.net/"],
      iconUrls: ["/chains/telos.svg"],
    },
  ],
  66: [
    {
      chainId: "0x42",
      chainName: "OKXCHAIN Mainnet",
      nativeCurrency: {
        name: "OKX",
        symbol: "OKT",
        decimals: 18,
      },
      rpcUrls: ["https://exchainrpc.okex.org"],
      blockExplorerUrls: ["https://www.okx.com/explorer/oktc"],
      iconUrls: ["/chains/okx.png"],
    },
  ],
  25: [
    {
      chainId: "0x19",
      chainName: "CRONOS MAINNET CHAIN",
      nativeCurrency: {
        name: "CRONOS",
        symbol: "CRO",
        decimals: 18,
      },
      rpcUrls: ["https://cronos-evm.publicnode.com"],
      blockExplorerUrls: ["https://cronoscan.com/"],
      iconUrls: ["/chains/cronos.png"],
    },
  ],
  8082: [
    {
      chainId: "0x1f92",
      chainName: "Shardeum Sphinx 1.X",
      nativeCurrency: {
        name: "Shardeum",
        symbol: "SHM",
        decimals: 18,
      },
      rpcUrls: ["https://sphinx.shardeum.org"],
      blockExplorerUrls: ["https://explorer-sphinx.shardeum.org/"],
      iconUrls: ["/chains/shardeum.png"],
    },
  ],
};

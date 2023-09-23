export const telosRpc = String(process.env.REACT_APP_TELOS_RPC_URL);
export const meterRpc = String(process.env.REACT_APP_METER_RPC_URL);
export const bobaRpc = String(process.env.REACT_APP_BOBA_RPC_URL);
export const okxRpc = String(process.env.REACT_APP_OKX_RPC_URL);
export const cronosRpc = String(process.env.REACT_APP_CRONOS_RPC_URL);
export const bscRpc = String(process.env.REACT_APP_BSC_RPC_URL);
export const polygonRpc = String(process.env.REACT_APP_POLYGON_RPC_URL);
export const shardeumRpc = String(process.env.REACT_APP_SHARDEUM_RPC_URL);

export const rpcUrls = {
  56: bscRpc, // bnb
  137: polygonRpc, // polygon
  56288: bobaRpc, // boba
  25: cronosRpc, // cronos
  82: meterRpc, // meter
  66: okxRpc, // okx
  40: telosRpc, // telos
  8082: shardeumRpc, // shardeum
};

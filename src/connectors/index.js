import { chainConfig, SUPPORTED_CHAIN_IDS } from "../config/chains";
import { APP_LOGO, APP_NAME } from "../config";

// connectors
import { InjectedConnector } from "@web3-react/injected-connector";

let rpcUrls = {};

for (let k = 0; k < SUPPORTED_CHAIN_IDS?.length; k++) {
  rpcUrls[SUPPORTED_CHAIN_IDS[k]] = chainConfig?.[k]?.[0]?.rpcUrls?.[0];
}

export const injected = new InjectedConnector({
  SUPPORTED_CHAIN_IDS,
});

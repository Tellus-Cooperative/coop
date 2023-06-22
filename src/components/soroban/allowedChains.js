import {Networks} from "soroban-client";
import  {WalletChain} from '@soroban-react/types';

export const allowedChains = [
  {
    id: "public",
    name: "Public",
    // eslint-disable-next-line
    networkPassphrase: Networks.PUBLIC,
  },
  {
    id: "testnet",
    name: "Testnet",
    // eslint-disable-next-line
    networkPassphrase: Networks.TESTNET,
  },
  {
    id: "futurenet",
    name: "Futurenet",
    networkPassphrase: Networks.FUTURENET,
  },
  {
    id: "sandbox",
    name: "Sandbox",
    networkPassphrase: Networks.SANDBOX,
  },
  {
    id: "standalone",
    name: "Standalone",
    networkPassphrase: "Standalone Network ; February 2017",
  },
];
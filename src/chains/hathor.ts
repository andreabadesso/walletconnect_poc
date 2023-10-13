import { NamespaceMetadata, ChainMetadata, ChainsMap } from "../helpers";

export const HathorChainData: ChainsMap = {
  "mainnet": {
    id: "hathor:mainnet",
    name: "Hathor Mainnet",
    rpc: [],
    slip44: 280,
    testnet: false,
  },
  "testnet": {
    id: "hathor:testnet",
    name: "Hathor Testnet",
    rpc: [],
    slip44: 280,
    testnet: true,
  },
};

export const HathorMetadata: NamespaceMetadata = {
  // Hathor Mainnet
  "mainnet": {
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5552.png",
    rgb: "183, 62, 49",
  },
  // Hathor TestNet
  "testnet": {
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5552.png",
    rgb: "183, 62, 49",
  },
};

export function getChainMetadata(chainId: string): ChainMetadata {
  const reference = chainId.split(":")[1];
  const metadata = HathorMetadata[reference];
  if (typeof metadata === "undefined") {
    throw new Error(`No chain metadata found for chainId: ${chainId}`);
  }
  return metadata;
}

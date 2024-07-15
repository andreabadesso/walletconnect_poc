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
    logo: "https://icoholder.com/media/cache/ico_logo_view_page/files/img/3da29e8fcf45923a8ccefa52e91f107d.jpeg",
    rgb: "183, 62, 49",
  },
  // Hathor TestNet
  "testnet": {
    logo: "https://icoholder.com/media/cache/ico_logo_view_page/files/img/3da29e8fcf45923a8ccefa52e91f107d.jpeg",
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

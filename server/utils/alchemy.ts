// Setup
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "RbaNz21spjoEBQ3FdmXv0w3vNX68TYb0",
    network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings)

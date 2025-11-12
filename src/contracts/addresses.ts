// Smart Contract Addresses
// Update these after deploying contracts

export const P2P_EXCHANGE_ADDRESS = import.meta.env.VITE_P2P_EXCHANGE_ADDRESS || '0x0000000000000000000000000000000000000000'

export const USDT_ADDRESS = import.meta.env.VITE_USDT_ADDRESS || '0x55d398326f99059fF775485246999027B3197955' // BSC Mainnet USDT

export const ADDRESSES = {
  P2P_EXCHANGE: P2P_EXCHANGE_ADDRESS,
  USDT: USDT_ADDRESS,
} as const

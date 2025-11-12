/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALLETCONNECT_PROJECT_ID: string
  readonly VITE_P2P_EXCHANGE_ADDRESS: string
  readonly VITE_USDT_ADDRESS: string
  readonly VITE_BSC_MAINNET_RPC: string
  readonly VITE_BSC_TESTNET_RPC: string
  readonly VITE_ENVIRONMENT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import { http, createConfig } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo-project-id'

export const config = createConfig({
  chains: [bsc, bscTestnet],
  connectors: [
    injected({
      target: 'metaMask',
    }),
    injected({
      target() {
        return {
          id: 'trust',
          name: 'Trust Wallet',
          provider: (window as any).trustwallet,
        }
      },
    }),
    walletConnect({
      projectId,
      showQrModal: true,
    }),
  ],
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

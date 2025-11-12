import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from 'wagmi'
import { bsc } from 'wagmi/chains'
import toast from 'react-hot-toast'

export function useWallet() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, error } = useConnect()
  const { disconnect } = useDisconnect()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()

  const isWrongNetwork = isConnected && chainId !== bsc.id

  const connectWallet = async (connectorId?: string) => {
    try {
      const connector = connectorId
        ? connectors.find(c => c.id === connectorId)
        : connectors[0]

      if (!connector) {
        throw new Error('Connector not found')
      }

      await connect({ connector })
      toast.success('Wallet connected successfully!')
    } catch (error: any) {
      console.error('Connection error:', error)
      if (error.message?.includes('User rejected')) {
        toast.error('Connection cancelled')
      } else {
        toast.error('Failed to connect wallet')
      }
    }
  }

  const switchToBSC = async () => {
    try {
      await switchChain?.({ chainId: bsc.id })
      toast.success('Switched to BSC network')
    } catch (error) {
      console.error('Network switch error:', error)
      toast.error('Failed to switch network')
    }
  }

  const disconnectWallet = () => {
    disconnect()
    toast.success('Wallet disconnected')
  }

  return {
    address,
    isConnected,
    isWrongNetwork,
    chainId,
    connectWallet,
    switchToBSC,
    disconnectWallet,
    connectors,
    error,
  }
}

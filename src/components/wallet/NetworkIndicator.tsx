import { useWallet } from '@/hooks/useWallet'
import Button from '../ui/Button'
import { bsc, bscTestnet } from 'wagmi/chains'

export default function NetworkIndicator() {
  const { chainId, isWrongNetwork, switchToBSC, isConnected } = useWallet()

  if (!isConnected) return null

  const currentChain = chainId === bsc.id ? bsc : chainId === bscTestnet.id ? bscTestnet : null

  if (isWrongNetwork) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-warning-100 text-warning-700 rounded-lg border border-warning-300">
        <span className="text-sm font-medium">⚠️ Wrong Network</span>
        <Button size="sm" variant="primary" onClick={switchToBSC}>
          Switch to BSC
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-success-100 text-success-700 rounded-lg border border-success-300">
      <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
      <span className="text-sm font-medium">{currentChain?.name || 'BSC'}</span>
    </div>
  )
}

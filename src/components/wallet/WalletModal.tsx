import { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import { useWallet } from '@/hooks/useWallet'

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

const walletOptions = [
  {
    id: 'metaMask',
    name: 'MetaMask',
    description: 'Most popular Ethereum wallet',
    icon: '🦊',
  },
  {
    id: 'trust',
    name: 'Trust Wallet',
    description: 'Secure mobile crypto wallet',
    icon: '🛡️',
  },
  {
    id: 'walletConnect',
    name: 'WalletConnect',
    description: 'Connect with mobile wallets',
    icon: '📱',
  },
]

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const { connectWallet } = useWallet()
  const [connecting, setConnecting] = useState<string | null>(null)

  const handleConnect = async (walletId: string) => {
    setConnecting(walletId)
    try {
      await connectWallet(walletId)
      onClose()
    } catch (error) {
      console.error('Connection failed:', error)
    } finally {
      setConnecting(null)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Connect Your Wallet" size="sm">
      <div className="space-y-3">
        <p className="text-neutral-600 text-sm mb-6">
          Choose your preferred wallet provider:
        </p>

        {walletOptions.map((wallet) => (
          <button
            key={wallet.id}
            onClick={() => handleConnect(wallet.id)}
            disabled={connecting !== null}
            className="w-full p-4 border border-neutral-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all text-left group disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">{wallet.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700">
                  {wallet.name}
                </h3>
                <p className="text-sm text-neutral-600">{wallet.description}</p>
              </div>
              {connecting === wallet.id ? (
                <div className="animate-spin h-5 w-5 border-2 border-primary-500 border-t-transparent rounded-full" />
              ) : (
                <span className="text-neutral-400 group-hover:text-primary-500">→</span>
              )}
            </div>
          </button>
        ))}

        <div className="pt-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-500 text-center">
            Don't have a wallet?{' '}
            <a
              href="https://metamask.io/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 hover:underline"
            >
              Learn how to set up →
            </a>
          </p>
        </div>
      </div>
    </Modal>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useWallet } from '@/hooks/useWallet'
import Button from '../ui/Button'
import WalletInfo from '../wallet/WalletInfo'
import NetworkIndicator from '../wallet/NetworkIndicator'
import WalletModal from '../wallet/WalletModal'

export default function Header() {
  const { isConnected } = useWallet()
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="text-xl font-bold text-neutral-900 hidden sm:inline">
                P2P Exchange
              </span>
            </Link>

            {/* Desktop Navigation */}
            {isConnected && (
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  to="/dashboard"
                  className="text-neutral-700 hover:text-primary-700 font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/browse"
                  className="text-neutral-700 hover:text-primary-700 font-medium transition-colors"
                >
                  Browse
                </Link>
                <Link
                  to="/my-orders"
                  className="text-neutral-700 hover:text-primary-700 font-medium transition-colors"
                >
                  My Orders
                </Link>
                <Link
                  to="/create-offer"
                  className="text-neutral-700 hover:text-primary-700 font-medium transition-colors"
                >
                  Create Offer
                </Link>
              </nav>
            )}

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <NetworkIndicator />

              {isConnected ? (
                <WalletInfo />
              ) : (
                <Button onClick={() => setIsWalletModalOpen(true)}>
                  Connect Wallet
                </Button>
              )}

              {/* Mobile Menu Button */}
              {isConnected && (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
                >
                  <Bars3Icon className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && isConnected && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <nav className="flex flex-col p-4 space-y-2">
              <Link
                to="/dashboard"
                className="px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/browse"
                className="px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse
              </Link>
              <Link
                to="/my-orders"
                className="px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Orders
              </Link>
              <Link
                to="/create-offer"
                className="px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create Offer
              </Link>
            </nav>
          </div>
        )}
      </header>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </>
  )
}

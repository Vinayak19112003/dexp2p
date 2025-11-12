import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWallet } from '@/hooks/useWallet'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import WalletModal from '@/components/wallet/WalletModal'

export default function Landing() {
  const navigate = useNavigate()
  const { isConnected } = useWallet()
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  const handleGetStarted = () => {
    if (isConnected) {
      navigate('/dashboard')
    } else {
      setIsWalletModalOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Decentralized INR/USDT
            <br />
            <span className="text-primary-700">P2P Trading</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Trade crypto directly with peers. Secure, trustless, and decentralized on Binance Smart Chain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={handleGetStarted}>
              🦊 Connect Wallet
            </Button>
            <Button size="lg" variant="secondary" onClick={() => navigate('/browse')}>
              Browse Offers
            </Button>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            Supported: MetaMask • Trust Wallet
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <Card elevation="md" padding="lg">
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Escrow</h3>
              <p className="text-neutral-600">
                Smart contract escrow protects both buyers and sellers throughout the trade.
              </p>
            </div>
          </Card>

          <Card elevation="md" padding="lg">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Settlement</h3>
              <p className="text-neutral-600">
                Direct P2P transfers with quick payment confirmations and instant USDT release.
              </p>
            </div>
          </Card>

          <Card elevation="md" padding="lg">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
              <p className="text-neutral-600">
                No middlemen. Only minimal gas fees on Binance Smart Chain network.
              </p>
            </div>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: '📝',
                title: 'Create Offer',
                description: 'Post your buy/sell offer with your price and payment method',
              },
              {
                step: '2',
                icon: '🤝',
                title: 'Find Match',
                description: 'Browse offers and connect with other traders',
              },
              {
                step: '3',
                icon: '💸',
                title: 'Send Payment',
                description: 'Transfer INR via UPI/IMPS to seller securely',
              },
              {
                step: '4',
                icon: '✅',
                title: 'Get USDT',
                description: 'Receive USDT in your wallet after confirmation',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-700 mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Offers Preview */}
        <div className="mt-24">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Offers</h2>
            <Button variant="ghost" onClick={() => navigate('/browse')}>
              Browse All →
            </Button>
          </div>
          <div className="space-y-4">
            {/* Mock offers */}
            <Card hoverable>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    AK
                  </div>
                  <div>
                    <div className="font-semibold">Sell 1,000 USDT @ ₹83.50</div>
                    <div className="text-sm text-neutral-600">
                      ⭐⭐⭐⭐⭐ • UPI, IMPS • Active 2 min ago
                    </div>
                  </div>
                </div>
                <Button size="sm">Buy USDT</Button>
              </div>
            </Card>
            <Card hoverable>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    RJ
                  </div>
                  <div>
                    <div className="font-semibold">Buy 500 USDT @ ₹83.20</div>
                    <div className="text-sm text-neutral-600">
                      ⭐⭐⭐⭐ • Bank Transfer • Active 5 min ago
                    </div>
                  </div>
                </div>
                <Button size="sm">Sell USDT</Button>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Card className="bg-gradient-to-r from-primary-700 to-primary-500 border-none text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-primary-100 mb-6">
              Connect your wallet and start trading USDT for INR on BSC today.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleGetStarted}
              className="bg-white text-primary-700 hover:bg-neutral-100"
            >
              Get Started Now
            </Button>
          </Card>
        </div>
      </div>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </div>
  )
}

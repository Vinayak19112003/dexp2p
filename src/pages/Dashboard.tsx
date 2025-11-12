import { useNavigate } from 'react-router-dom'
import { useWallet } from '@/hooks/useWallet'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import StatusBadge from '@/components/ui/Badge'
import { formatINR, formatUSDT } from '@/utils/helpers'

export default function Dashboard() {
  const navigate = useNavigate()
  const { address } = useWallet()

  // Mock data - replace with actual data from smart contract
  const stats = {
    balance: 5243.5,
    totalTrades: 47,
    successRate: 98.5,
    totalVolume: 1245670,
  }

  const activeTrades = [
    {
      id: 'T12345',
      type: 'Buying',
      amount: 1000,
      status: 'payment_sent' as const,
      timeLeft: '23:15',
    },
    {
      id: 'T12346',
      type: 'Selling',
      amount: 500,
      status: 'awaiting_payment' as const,
      timeLeft: '45:10',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-neutral-600 mt-2">
          Hello, {address?.slice(0, 6)}...{address?.slice(-4)}! 👋
        </p>
      </div>

      {/* Wallet Balance */}
      <Card className="bg-gradient-to-r from-primary-700 to-primary-500 text-white border-none">
        <h2 className="text-xl font-semibold mb-4">💰 Wallet Balance</h2>
        <div className="flex items-baseline gap-4">
          <span className="text-5xl font-bold">{formatUSDT(stats.balance)}</span>
          <span className="text-2xl">USDT</span>
        </div>
        <p className="text-primary-100 mt-2">≈ {formatINR(stats.balance * 83.5)}</p>
        <div className="mt-6 flex gap-3">
          <Button variant="secondary" className="bg-white text-primary-700 hover:bg-primary-50">
            Deposit
          </Button>
          <Button variant="ghost" className="text-white hover:bg-primary-600">
            Withdraw
          </Button>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <p className="text-sm text-neutral-600">Total Trades</p>
          <p className="text-3xl font-bold mt-2">{stats.totalTrades}</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">Success Rate</p>
          <p className="text-3xl font-bold mt-2 text-success-700">{stats.successRate}%</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">Total Volume</p>
          <p className="text-3xl font-bold mt-2">{formatINR(stats.totalVolume)}</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">Reputation</p>
          <p className="text-3xl mt-2">⭐⭐⭐⭐⭐</p>
        </Card>
      </div>

      {/* Active Trades */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">
            Active Trades ({activeTrades.length})
          </h2>
          <Button variant="ghost" size="sm" onClick={() => navigate('/my-orders')}>
            View All →
          </Button>
        </div>

        {activeTrades.length > 0 ? (
          <div className="space-y-4">
            {activeTrades.map((trade) => (
              <Card key={trade.id} hoverable onClick={() => navigate(`/trade/${trade.id}`)}>
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <StatusBadge status={trade.status} />
                      <span className="font-semibold">#{trade.id}</span>
                      <span className="text-sm text-neutral-500">⏱️ {trade.timeLeft} left</span>
                    </div>
                    <p className="text-neutral-700">
                      {trade.type} {formatUSDT(trade.amount)} USDT
                    </p>
                  </div>
                  <Button size="sm">View Trade →</Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-neutral-500 mb-4">No active trades</p>
              <Button onClick={() => navigate('/browse')}>Browse Offers</Button>
            </div>
          </Card>
        )}
      </div>

      {/* Your Offers */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Your Offers (3 active)</h2>
          <Button variant="ghost" size="sm">
            Manage All →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card hoverable>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-sm font-medium text-success-700 bg-success-100 px-2 py-1 rounded">
                  Selling
                </span>
              </div>
              <span className="text-xs text-neutral-500">Active</span>
            </div>
            <p className="font-semibold text-lg mb-1">2,000 USDT @ ₹83.75</p>
            <p className="text-sm text-neutral-600">2 pending trades</p>
          </Card>

          <Card hoverable>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-sm font-medium text-primary-700 bg-primary-100 px-2 py-1 rounded">
                  Buying
                </span>
              </div>
              <span className="text-xs text-neutral-500">Active</span>
            </div>
            <p className="font-semibold text-lg mb-1">1,500 USDT @ ₹83.00</p>
            <p className="text-sm text-neutral-600">No trades yet</p>
          </Card>
        </div>

        <div className="mt-4">
          <Button fullWidth variant="secondary" onClick={() => navigate('/create-offer')}>
            + Create New Offer
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-200">
              <span>✅</span>
              <div className="flex-1">
                <p className="font-medium">Trade #T12344 completed - Bought 800 USDT</p>
                <p className="text-sm text-neutral-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-200">
              <span>💬</span>
              <div className="flex-1">
                <p className="font-medium">New message from Seller123 on Trade #T12345</p>
                <p className="text-sm text-neutral-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span>📊</span>
              <div className="flex-1">
                <p className="font-medium">New offer created - Sell 2,000 USDT</p>
                <p className="text-sm text-neutral-500">1 day ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-neutral-50 border-dashed">
        <h3 className="font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Button variant="primary" onClick={() => navigate('/create-offer')}>
            Create New Offer
          </Button>
          <Button variant="secondary" onClick={() => navigate('/browse')}>
            Browse Offers
          </Button>
          <Button variant="ghost" onClick={() => navigate('/my-orders')}>
            View All Trades
          </Button>
        </div>
      </Card>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import StatusBadge from '@/components/ui/Badge'
import { formatINR, formatUSDT } from '@/utils/helpers'
import { TradeStatus } from '@/types'

export default function MyOrders() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'cancelled'>('active')

  // Mock trade data
  const mockTrades = {
    active: [
      {
        id: 'T12345',
        type: 'Buy',
        amount: 1000,
        price: 83.50,
        status: 'payment_sent' as TradeStatus,
        counterparty: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        timeLeft: '23:15',
        createdAt: '2024-01-10 10:30 AM',
      },
      {
        id: 'T12346',
        type: 'Sell',
        amount: 500,
        price: 83.60,
        status: 'awaiting_payment' as TradeStatus,
        counterparty: '0x8f742d35Cc6634C0532925a3b844Bc454e443',
        timeLeft: '45:10',
        createdAt: '2024-01-10 09:15 AM',
      },
    ],
    completed: [
      {
        id: 'T12344',
        type: 'Buy',
        amount: 800,
        price: 83.40,
        status: 'completed' as TradeStatus,
        counterparty: '0x9f742d35Cc6634C0532925a3b844Bc454e444',
        completedAt: '2024-01-09 08:20 PM',
      },
      {
        id: 'T12343',
        type: 'Sell',
        amount: 1500,
        price: 83.55,
        status: 'completed' as TradeStatus,
        counterparty: '0xaf742d35Cc6634C0532925a3b844Bc454e445',
        completedAt: '2024-01-08 02:15 PM',
      },
    ],
    cancelled: [
      {
        id: 'T12342',
        type: 'Buy',
        amount: 600,
        price: 83.45,
        status: 'cancelled' as TradeStatus,
        counterparty: '0xbf742d35Cc6634C0532925a3b844Bc454e446',
        cancelledAt: '2024-01-07 11:30 AM',
        reason: 'Payment not received in time',
      },
    ],
  }

  const currentTrades = mockTrades[activeTab]

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Orders</h1>
        <p className="text-neutral-600">Track all your trades and their status</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        <Button
          variant={activeTab === 'active' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('active')}
        >
          Active ({mockTrades.active.length})
        </Button>
        <Button
          variant={activeTab === 'completed' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('completed')}
        >
          Completed ({mockTrades.completed.length})
        </Button>
        <Button
          variant={activeTab === 'cancelled' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled ({mockTrades.cancelled.length})
        </Button>
      </div>

      {/* Trades List */}
      {currentTrades.length > 0 ? (
        <div className="space-y-4">
          {currentTrades.map((trade: any) => (
            <Card key={trade.id} hoverable>
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <StatusBadge status={trade.status} />
                    <div>
                      <h3 className="font-semibold text-lg">Trade #{trade.id}</h3>
                      <p className="text-sm text-neutral-600">
                        {trade.createdAt || trade.completedAt || trade.cancelledAt}
                      </p>
                    </div>
                  </div>
                  {trade.timeLeft && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-warning-100 text-warning-700 rounded-lg">
                      <span>⏱️</span>
                      <span className="font-semibold">{trade.timeLeft} left</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Type</p>
                    <p className="font-semibold">{trade.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Amount</p>
                    <p className="font-semibold">{formatUSDT(trade.amount)} USDT</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Price</p>
                    <p className="font-semibold">{formatINR(trade.price)} per USDT</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Total</p>
                    <p className="font-semibold">{formatINR(trade.amount * trade.price)}</p>
                  </div>
                </div>

                {/* Counterparty */}
                <div>
                  <p className="text-xs text-neutral-500 mb-1">
                    {trade.type === 'Buy' ? 'Seller' : 'Buyer'}
                  </p>
                  <p className="font-mono text-sm">
                    {trade.counterparty.slice(0, 10)}...{trade.counterparty.slice(-8)}
                  </p>
                </div>

                {/* Reason for cancelled */}
                {trade.reason && (
                  <div className="p-3 bg-error-50 border border-error-200 rounded-lg">
                    <p className="text-sm text-error-700">
                      <span className="font-semibold">Reason:</span> {trade.reason}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-2 border-t border-neutral-200">
                  {activeTab === 'active' ? (
                    <>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/trade/${trade.id}`)}
                      >
                        View Trade
                      </Button>
                      <Button variant="danger">Cancel Trade</Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="secondary"
                        onClick={() => navigate(`/trade/${trade.id}`)}
                      >
                        View Details
                      </Button>
                      {activeTab === 'completed' && (
                        <Button variant="ghost">Trade Again</Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">No {activeTab} trades</h3>
            <p className="text-neutral-600 mb-6">
              {activeTab === 'active'
                ? 'You don\'t have any active trades at the moment.'
                : `You don't have any ${activeTab} trades.`}
            </p>
            <Button onClick={() => navigate('/browse')}>
              Browse Offers
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}

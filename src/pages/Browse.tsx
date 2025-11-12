import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Avatar from '@/components/ui/Avatar'
import { formatINR, formatUSDT } from '@/utils/helpers'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Browse() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock offers data
  const mockOffers = [
    {
      id: '1',
      seller: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      sellerName: 'Trader_AK',
      reputation: 4.9,
      totalTrades: 47,
      price: 83.50,
      amount: 1200,
      minLimit: 1000,
      maxLimit: 50000,
      paymentMethods: ['UPI', 'IMPS', 'Bank Transfer'],
      timeLimit: 30,
      lastActive: '5 min ago',
    },
    {
      id: '2',
      seller: '0x8f742d35Cc6634C0532925a3b844Bc454e443',
      sellerName: 'Crypto_RJ',
      reputation: 4.7,
      totalTrades: 23,
      price: 83.45,
      amount: 800,
      minLimit: 5000,
      maxLimit: 30000,
      paymentMethods: ['UPI'],
      timeLimit: 45,
      lastActive: '1 hour ago',
    },
    {
      id: '3',
      seller: '0x9f742d35Cc6634C0532925a3b844Bc454e444',
      sellerName: 'P2P_Master',
      reputation: 5.0,
      totalTrades: 152,
      price: 83.60,
      amount: 5000,
      minLimit: 10000,
      maxLimit: 100000,
      paymentMethods: ['UPI', 'IMPS', 'Bank Transfer', 'PayTM'],
      timeLimit: 60,
      lastActive: '2 hours ago',
    },
  ]

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    return (
      <>
        {'⭐'.repeat(fullStars)}
        {hasHalfStar && '⭐'}
      </>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Browse Offers</h1>
        <p className="text-neutral-600">Find the best offers to trade USDT for INR</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={activeTab === 'buy' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('buy')}
          className="flex-1 md:flex-none"
        >
          Buy USDT
        </Button>
        <Button
          variant={activeTab === 'sell' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('sell')}
          className="flex-1 md:flex-none"
        >
          Sell USDT
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <h3 className="font-semibold mb-4">Filters</h3>

            <div className="space-y-4">
              <Input
                label="Search"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
              />

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Price Range (₹)
                </label>
                <div className="flex gap-2">
                  <Input placeholder="Min" type="number" />
                  <Input placeholder="Max" type="number" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Amount Range (USDT)
                </label>
                <div className="flex gap-2">
                  <Input placeholder="Min" type="number" />
                  <Input placeholder="Max" type="number" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Payment Methods
                </label>
                <div className="space-y-2">
                  {['UPI', 'IMPS', 'Bank Transfer', 'PayTM'].map((method) => (
                    <label key={method} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Minimum Reputation
                </label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>0</span>
                  <span>5</span>
                </div>
              </div>

              <Button fullWidth variant="primary">
                Apply Filters
              </Button>
              <Button fullWidth variant="ghost">
                Reset
              </Button>
            </div>
          </Card>
        </div>

        {/* Offers List */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <p className="text-neutral-600">Showing {mockOffers.length} offers</p>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm">
              <option>Best Price</option>
              <option>Highest Reputation</option>
              <option>Fastest</option>
            </select>
          </div>

          <div className="space-y-4">
            {mockOffers.map((offer) => (
              <Card key={offer.id} hoverable elevation="md">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar address={offer.seller} size="lg" />
                      <div>
                        <h3 className="font-semibold text-lg">{offer.sellerName}</h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span>{renderStars(offer.reputation)} {offer.reputation}/5.0</span>
                          <span className="text-neutral-500">•</span>
                          <span className="text-neutral-600">{offer.totalTrades} trades</span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">
                          Last active: {offer.lastActive}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">Price</p>
                      <p className="font-bold text-lg">{formatINR(offer.price)}</p>
                      <p className="text-xs text-neutral-500">per USDT</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">Available</p>
                      <p className="font-semibold">{formatUSDT(offer.amount)} USDT</p>
                      <p className="text-xs text-neutral-500">{formatINR(offer.amount * offer.price)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">Limits</p>
                      <p className="font-semibold text-sm">
                        {formatINR(offer.minLimit)} - {formatINR(offer.maxLimit)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">Time Limit</p>
                      <p className="font-semibold">{offer.timeLimit} minutes</p>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <p className="text-xs text-neutral-500 mb-2">Payment Methods</p>
                    <div className="flex flex-wrap gap-2">
                      {offer.paymentMethods.map((method) => (
                        <span
                          key={method}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2 border-t border-neutral-200">
                    <Button fullWidth variant="primary">
                      {activeTab === 'buy' ? 'Buy USDT' : 'Sell USDT'} →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-6 text-center">
            <Button variant="secondary">Load More Offers</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

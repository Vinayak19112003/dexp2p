export interface User {
  address: string
  reputation: number
  totalTrades: number
  successRate: number
  memberSince: Date
}

export interface Offer {
  id: string
  seller: string
  offerType: 'buy' | 'sell'
  usdtAmount: number
  pricePerUsdt: number
  minLimit: number
  maxLimit: number
  paymentMethods: PaymentMethod[]
  timeLimit: number
  terms: string
  status: 'active' | 'paused' | 'completed' | 'cancelled'
  createdAt: Date
}

export interface PaymentMethod {
  type: 'upi' | 'imps' | 'bank_transfer' | 'paytm'
  details: string
}

export type TradeStatus =
  | 'awaiting_payment'
  | 'payment_sent'
  | 'payment_confirmed'
  | 'in_dispute'
  | 'completed'
  | 'cancelled'

export interface Trade {
  id: string
  offerId: string
  buyer: string
  seller: string
  usdtAmount: number
  inrAmount: number
  status: TradeStatus
  paymentMethod: PaymentMethod
  createdAt: Date
  expiresAt: Date
  messages: ChatMessage[]
}

export interface ChatMessage {
  id: string
  sender: string
  message: string
  timestamp: Date
}

export interface Dispute {
  id: string
  tradeId: string
  claimant: string
  respondent: string
  reason: string
  evidence: Evidence[]
  status: 'open' | 'voting' | 'resolved'
  votesFor: number
  votesAgainst: number
  resolution?: 'release_to_buyer' | 'release_to_seller' | 'split'
  createdAt: Date
}

export interface Evidence {
  type: 'image' | 'document' | 'text'
  url?: string
  content?: string
  uploadedAt: Date
}

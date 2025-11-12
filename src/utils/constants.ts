export const APP_NAME = 'P2P Exchange'

export const SUPPORTED_CHAINS = {
  BSC_MAINNET: 56,
  BSC_TESTNET: 97,
}

export const PAYMENT_METHODS = [
  { value: 'upi', label: 'UPI', icon: '💳' },
  { value: 'imps', label: 'IMPS', icon: '🏦' },
  { value: 'bank_transfer', label: 'Bank Transfer', icon: '🏦' },
  { value: 'paytm', label: 'PayTM', icon: '📱' },
]

export const TIME_LIMITS = [
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 45, label: '45 minutes' },
  { value: 60, label: '1 hour' },
  { value: 120, label: '2 hours' },
]

export const MIN_USDT_AMOUNT = 10
export const MAX_USDT_AMOUNT = 100000

export const MIN_INR_LIMIT = 500
export const MAX_INR_LIMIT = 500000

export const TRADE_STATUSES = {
  AWAITING_PAYMENT: 'awaiting_payment',
  PAYMENT_SENT: 'payment_sent',
  PAYMENT_CONFIRMED: 'payment_confirmed',
  IN_DISPUTE: 'in_dispute',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const

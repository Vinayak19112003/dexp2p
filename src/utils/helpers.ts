import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Truncate Ethereum address
 */
export function truncateAddress(address: string, start = 6, end = 4): string {
  if (!address) return ''
  return `${address.slice(0, start)}...${address.slice(-end)}`
}

/**
 * Format number with Indian numbering system
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format USDT amount
 */
export function formatUSDT(amount: number, decimals = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount)
}

/**
 * Format time remaining
 */
export function formatTimeRemaining(expiresAt: Date): string {
  const now = new Date()
  const diff = expiresAt.getTime() - now.getTime()

  if (diff <= 0) return 'Expired'

  const minutes = Math.floor(diff / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

/**
 * Copy to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy:', error)
    return false
  }
}

/**
 * Get BSCScan link
 */
export function getBSCScanLink(
  type: 'tx' | 'address' | 'token',
  value: string,
  chainId: number = 56
): string {
  const baseUrl = chainId === 56 ? 'https://bscscan.com' : 'https://testnet.bscscan.com'
  return `${baseUrl}/${type}/${value}`
}

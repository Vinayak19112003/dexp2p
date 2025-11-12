import { HTMLAttributes } from 'react'
import { cn } from '@/utils/helpers'
import { TradeStatus } from '@/types'

interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: TradeStatus
  showIcon?: boolean
}

const statusConfig: Record<TradeStatus, { label: string; color: string; icon: string }> = {
  awaiting_payment: {
    label: 'Awaiting Payment',
    color: 'bg-warning-100 text-warning-700 border-warning-300',
    icon: '⏱️',
  },
  payment_sent: {
    label: 'Payment Sent',
    color: 'bg-primary-100 text-primary-700 border-primary-300',
    icon: '↗️',
  },
  payment_confirmed: {
    label: 'Payment Confirmed',
    color: 'bg-success-100 text-success-700 border-success-300',
    icon: '✓',
  },
  in_dispute: {
    label: 'In Dispute',
    color: 'bg-error-100 text-error-700 border-error-300',
    icon: '⚠️',
  },
  completed: {
    label: 'Completed',
    color: 'bg-success-100 text-success-700 border-success-300',
    icon: '✓✓',
  },
  cancelled: {
    label: 'Cancelled',
    color: 'bg-neutral-100 text-neutral-700 border-neutral-300',
    icon: '✕',
  },
}

export default function StatusBadge({
  status,
  showIcon = true,
  className,
  ...props
}: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border',
        config.color,
        className
      )}
      {...props}
    >
      {showIcon && <span>{config.icon}</span>}
      <span>{config.label}</span>
    </span>
  )
}

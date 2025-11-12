import { cn } from '@/utils/helpers'

interface AvatarProps {
  address: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showAddress?: boolean
  className?: string
}

const sizes = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-20 h-20',
}

// Generate deterministic color from address
function getColorFromAddress(address: string): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-red-500',
    'bg-teal-500',
  ]

  const hash = address.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)

  return colors[Math.abs(hash) % colors.length]
}

export default function Avatar({ address, size = 'md', showAddress = false, className }: AvatarProps) {
  const initials = address.slice(2, 4).toUpperCase()
  const colorClass = getColorFromAddress(address)

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'rounded-full flex items-center justify-center text-white font-semibold border-2 border-white shadow-md',
          sizes[size],
          colorClass
        )}
      >
        {initials}
      </div>
      {showAddress && (
        <span className="font-mono text-sm text-neutral-700">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
      )}
    </div>
  )
}

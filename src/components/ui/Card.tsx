import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/helpers'

type CardElevation = 'sm' | 'md' | 'lg' | 'xl'
type CardPadding = 'sm' | 'md' | 'lg'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: CardElevation
  padding?: CardPadding
  hoverable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      elevation = 'md',
      padding = 'lg',
      hoverable = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const elevations = {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    }

    const paddings = {
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'bg-white border border-neutral-200 rounded-lg transition-all duration-200',
          elevations[elevation],
          paddings[padding],
          hoverable && 'hover:shadow-lg hover:-translate-y-0.5 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card

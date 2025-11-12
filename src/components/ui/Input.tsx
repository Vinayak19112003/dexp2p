import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/helpers'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helper?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helper,
      error,
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            {label}
            {props.required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full h-12 px-4 text-base border rounded-md transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'placeholder:text-neutral-400',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error
                ? 'border-error-500 focus:ring-error-500'
                : 'border-neutral-300',
              props.disabled && 'bg-neutral-100 cursor-not-allowed opacity-60',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
              {rightIcon}
            </div>
          )}
        </div>

        {helper && !error && (
          <p className="mt-1 text-xs text-neutral-500">{helper}</p>
        )}

        {error && (
          <p className="mt-1 text-xs text-error-700">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

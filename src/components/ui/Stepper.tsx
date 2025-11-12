import { cn } from '@/utils/helpers'

interface Step {
  label: string
  status: 'completed' | 'active' | 'pending'
}

interface StepperProps {
  steps: Step[]
  className?: string
}

export default function Stepper({ steps, className }: StepperProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center relative">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors',
                  step.status === 'completed' && 'bg-success-700 text-white',
                  step.status === 'active' && 'bg-primary-700 text-white',
                  step.status === 'pending' && 'bg-neutral-200 text-neutral-500'
                )}
              >
                {step.status === 'completed' ? (
                  <span>✓</span>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={cn(
                  'mt-2 text-xs text-center whitespace-nowrap',
                  step.status === 'active' && 'font-semibold text-primary-700',
                  step.status === 'completed' && 'text-success-700',
                  step.status === 'pending' && 'text-neutral-500'
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 -mt-8">
                <div
                  className={cn(
                    'h-full transition-colors',
                    step.status === 'completed'
                      ? 'bg-success-700'
                      : 'bg-neutral-200'
                  )}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

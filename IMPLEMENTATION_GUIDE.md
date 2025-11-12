# P2P Crypto Exchange - Implementation Guide

## 🚀 Developer Implementation Roadmap

This guide translates the design system into actionable development steps for building the P2P crypto exchange with React and Web3.

---

## Tech Stack Recommendations

### Frontend Framework
```json
{
  "framework": "React 18+",
  "language": "TypeScript",
  "buildTool": "Vite",
  "styling": "TailwindCSS + CSS Modules",
  "stateManagement": "Zustand or Redux Toolkit",
  "routing": "React Router v6"
}
```

**Rationale:**
- **React 18**: Concurrent features, automatic batching
- **TypeScript**: Type safety for Web3 interactions
- **Vite**: Fast dev server, optimized builds
- **TailwindCSS**: Utility-first, matches design tokens
- **Zustand**: Lightweight, perfect for wallet/user state
- **React Router v6**: Modern routing with hooks

### Web3 Integration
```json
{
  "library": "ethers.js v6 or viem",
  "walletConnection": "wagmi + ConnectKit",
  "smartContracts": "TypeChain for type-safe contracts",
  "chainInteraction": "Binance Smart Chain (BSC)"
}
```

**Rationale:**
- **ethers.js/viem**: Industry standard, well-documented
- **wagmi**: React hooks for Ethereum, built-in wallet management
- **ConnectKit**: Beautiful wallet connection UI out-of-the-box
- **TypeChain**: Generate TypeScript bindings from ABIs

### Additional Libraries
```json
{
  "forms": "React Hook Form + Zod validation",
  "dateTime": "date-fns",
  "notifications": "react-hot-toast",
  "modals": "Headless UI or Radix UI",
  "icons": "Heroicons or Lucide React",
  "charts": "Recharts or Lightweight Charts",
  "addressDisplay": "@davatar/react for avatars",
  "clipboard": "react-copy-to-clipboard"
}
```

---

## Project Structure

```
dexp2p/
├── public/
│   ├── favicon.ico
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── ui/                      # Reusable design system components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── Stepper.tsx
│   │   │   └── index.ts
│   │   ├── wallet/                  # Wallet-specific components
│   │   │   ├── WalletConnectButton.tsx
│   │   │   ├── WalletInfo.tsx
│   │   │   ├── NetworkIndicator.tsx
│   │   │   └── WalletModal.tsx
│   │   ├── trade/                   # Trade-specific components
│   │   │   ├── OfferCard.tsx
│   │   │   ├── TradeProgress.tsx
│   │   │   ├── PaymentInstructions.tsx
│   │   │   ├── TradeChat.tsx
│   │   │   └── TradeTimeline.tsx
│   │   ├── offer/                   # Offer creation components
│   │   │   ├── CreateOfferWizard.tsx
│   │   │   ├── OfferDetailsStep.tsx
│   │   │   ├── PaymentMethodsStep.tsx
│   │   │   ├── TermsStep.tsx
│   │   │   └── ReviewStep.tsx
│   │   ├── dispute/                 # Dispute resolution components
│   │   │   ├── DisputeCard.tsx
│   │   │   ├── DisputeDetail.tsx
│   │   │   ├── EvidenceViewer.tsx
│   │   │   └── VotingInterface.tsx
│   │   └── layout/                  # Layout components
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       ├── BottomNav.tsx
│   │       └── Footer.tsx
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── Dashboard.tsx
│   │   ├── BrowseOffers.tsx
│   │   ├── CreateOffer.tsx
│   │   ├── MyOrders.tsx
│   │   ├── TradePage.tsx
│   │   ├── DisputeResolution.tsx
│   │   └── Profile.tsx
│   ├── hooks/                       # Custom React hooks
│   │   ├── useWallet.ts
│   │   ├── useContract.ts
│   │   ├── useTrade.ts
│   │   ├── useOffer.ts
│   │   ├── useNotifications.ts
│   │   └── useMediaQuery.ts
│   ├── contracts/                   # Smart contract ABIs and addresses
│   │   ├── abis/
│   │   │   ├── P2PExchange.json
│   │   │   ├── USDT.json
│   │   │   └── DisputeDAO.json
│   │   ├── addresses.ts
│   │   └── typechain/               # TypeChain generated types
│   ├── store/                       # State management
│   │   ├── walletStore.ts
│   │   ├── tradeStore.ts
│   │   ├── offerStore.ts
│   │   └── uiStore.ts
│   ├── utils/                       # Utility functions
│   │   ├── formatting.ts            # Address truncation, number formatting
│   │   ├── validation.ts            # Form validation helpers
│   │   ├── constants.ts             # App constants, networks
│   │   └── helpers.ts               # General helpers
│   ├── styles/
│   │   ├── globals.css              # Global styles, CSS variables
│   │   ├── tailwind.css             # Tailwind imports
│   │   └── animations.css           # Custom animations
│   ├── types/
│   │   ├── index.ts                 # TypeScript type definitions
│   │   ├── trade.ts
│   │   ├── offer.ts
│   │   └── user.ts
│   ├── config/
│   │   ├── wagmi.ts                 # Wagmi configuration
│   │   └── chains.ts                # Chain configurations
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── DESIGN_SYSTEM.md
├── USER_FLOWS.md
├── WIREFRAMES.md
└── README.md
```

---

## Phase 1: Foundation Setup (Week 1)

### Step 1.1: Initialize Project

```bash
# Create Vite React TypeScript project
npm create vite@latest dexp2p -- --template react-ts
cd dexp2p

# Install core dependencies
npm install react-router-dom zustand
npm install ethers wagmi viem @tanstack/react-query
npm install @rainbow-me/rainbowkit

# Install UI dependencies
npm install tailwindcss postcss autoprefixer
npm install @headlessui/react @heroicons/react
npm install react-hook-form zod @hookform/resolvers
npm install react-hot-toast
npm install date-fns
npm install clsx tailwind-merge

# Install dev dependencies
npm install -D @types/node
npm install -D @typechain/ethers-v6 typechain
```

### Step 1.2: Configure Tailwind with Design Tokens

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0A2463',
          700: '#1E3A8A',
          500: '#3B82F6',
          300: '#93C5FD',
          100: '#DBEAFE',
        },
        success: {
          700: '#15803D',
          500: '#22C55E',
          100: '#DCFCE7',
        },
        warning: {
          700: '#B45309',
          500: '#F59E0B',
          100: '#FEF3C7',
        },
        error: {
          700: '#B91C1C',
          500: '#EF4444',
          100: '#FEE2E2',
        },
        neutral: {
          900: '#111827',
          700: '#374151',
          500: '#6B7280',
          300: '#D1D5DB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
        crypto: {
          gold: '#F7931A',
          bsc: '#F3BA2F',
          usdt: '#26A17B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        '5xl': '3rem',
        '4xl': '2.25rem',
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        'xl': '1.25rem',
        'lg': '1.125rem',
        'base': '1rem',
        'sm': '0.875rem',
        'xs': '0.75rem',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 250ms ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

### Step 1.3: Setup Global Styles

**src/styles/globals.css:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Design system CSS variables for non-Tailwind usage */
    --primary-blue-900: #0A2463;
    --primary-blue-700: #1E3A8A;
    --primary-blue-500: #3B82F6;

    /* Additional variables... */
  }

  * {
    @apply border-neutral-300;
  }

  body {
    @apply font-sans text-base text-neutral-900 bg-neutral-50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    @apply text-4xl font-bold leading-tight;
  }

  h2 {
    @apply text-3xl font-semibold leading-tight;
  }

  h3 {
    @apply text-2xl font-semibold leading-tight;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-primary-500;
  }

  /* Remove default focus for mouse users */
  *:focus:not(:focus-visible) {
    @apply outline-none;
  }
}

@layer utilities {
  .truncate-address {
    @apply font-mono text-sm;
  }
}

/* Animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Step 1.4: Configure Wagmi for BSC

**src/config/wagmi.ts:**
```typescript
import { createConfig, http } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || ''

export const config = createConfig({
  chains: [bsc, bscTestnet],
  connectors: [
    injected({ target: 'metaMask' }),
    injected({ target: 'trust' }),
    walletConnect({ projectId }),
  ],
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
```

**src/main.tsx:**
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config/wagmi'
import App from './App'
import './styles/globals.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
```

---

## Phase 2: Core UI Components (Week 2)

### Step 2.1: Button Component

**src/components/ui/Button.tsx:**
```typescript
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-medium rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-98'

    const variants = {
      primary: 'bg-primary-700 text-white hover:bg-primary-900 focus:ring-primary-500',
      secondary: 'bg-transparent border-2 border-primary-700 text-primary-700 hover:bg-primary-100 focus:ring-primary-500',
      success: 'bg-success-700 text-white hover:bg-success-900 focus:ring-success-500',
      danger: 'bg-error-700 text-white hover:bg-error-900 focus:ring-error-500',
      ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500',
    }

    const sizes = {
      sm: 'h-8 px-4 text-sm',
      md: 'h-10 px-6 text-base',
      lg: 'h-12 px-8 text-lg',
    }

    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          isDisabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
```

**Design Decision:** Polymorphic component with TypeScript generics ensures type safety while maintaining flexibility. All design system variants implemented as Tailwind classes.

### Step 2.2: Input Component

**src/components/ui/Input.tsx:**
```typescript
import { InputHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

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
            className={clsx(
              'w-full h-12 px-4 text-base border rounded-md transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error
                ? 'border-error-500 focus:ring-error-500'
                : 'border-neutral-300',
              props.disabled && 'bg-neutral-100 cursor-not-allowed',
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
```

### Step 2.3: Card Component

**src/components/ui/Card.tsx:**
```typescript
import { HTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

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
        className={clsx(
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
```

### Step 2.4: Badge/Status Component

**src/components/ui/Badge.tsx:**
```typescript
import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

type TradeStatus =
  | 'awaiting_payment'
  | 'payment_sent'
  | 'payment_confirmed'
  | 'in_dispute'
  | 'completed'
  | 'cancelled'

interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: TradeStatus
  showIcon?: boolean
}

const statusConfig = {
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
      className={clsx(
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
```

### Step 2.5: Modal Component

**src/components/ui/Modal.tsx:**
```typescript
import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

type ModalSize = 'sm' | 'md' | 'lg' | 'xl'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: ModalSize
  children: ReactNode
  showCloseButton?: boolean
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
}

export default function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  children,
  showCloseButton = true,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  'w-full transform overflow-hidden rounded-xl bg-white p-8 shadow-xl transition-all',
                  sizeClasses[size]
                )}
              >
                {(title || showCloseButton) && (
                  <div className="flex items-center justify-between mb-6">
                    {title && (
                      <Dialog.Title className="text-2xl font-semibold text-neutral-900">
                        {title}
                      </Dialog.Title>
                    )}
                    {showCloseButton && (
                      <button
                        onClick={onClose}
                        className="p-2 rounded-md hover:bg-neutral-100 transition-colors"
                        aria-label="Close"
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                )}

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
```

---

## Phase 3: Web3 Integration (Week 3)

### Step 3.1: Wallet Connection Hook

**src/hooks/useWallet.ts:**
```typescript
import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'
import { bsc } from 'wagmi/chains'
import toast from 'react-hot-toast'

export function useWallet() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const isWrongNetwork = isConnected && chain?.id !== bsc.id

  const connectWallet = async (connectorId: string) => {
    try {
      const connector = connectors.find(c => c.id === connectorId)
      if (!connector) {
        throw new Error('Connector not found')
      }
      await connect({ connector })
      toast.success('Wallet connected successfully!')
    } catch (error) {
      console.error('Connection error:', error)
      toast.error('Failed to connect wallet')
    }
  }

  const switchToBSC = async () => {
    try {
      await switchNetwork?.(bsc.id)
      toast.success('Switched to BSC network')
    } catch (error) {
      console.error('Network switch error:', error)
      toast.error('Failed to switch network')
    }
  }

  const disconnectWallet = () => {
    disconnect()
    toast.success('Wallet disconnected')
  }

  return {
    address,
    isConnected,
    isWrongNetwork,
    chain,
    connectWallet,
    switchToBSC,
    disconnectWallet,
    connectors,
  }
}
```

### Step 3.2: Contract Interaction Hook

**src/hooks/useContract.ts:**
```typescript
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { parseUnits, formatUnits } from 'viem'
import P2PExchangeABI from '../contracts/abis/P2PExchange.json'
import { P2P_EXCHANGE_ADDRESS } from '../contracts/addresses'

export function useP2PContract() {
  // Read operations
  const { data: offers, refetch: refetchOffers } = useContractRead({
    address: P2P_EXCHANGE_ADDRESS,
    abi: P2PExchangeABI,
    functionName: 'getAllOffers',
  })

  // Write operations - Create Offer
  const { config: createOfferConfig } = usePrepareContractWrite({
    address: P2P_EXCHANGE_ADDRESS,
    abi: P2PExchangeABI,
    functionName: 'createOffer',
  })

  const { write: createOffer, isLoading: isCreating } = useContractWrite({
    ...createOfferConfig,
    onSuccess: () => {
      refetchOffers()
      toast.success('Offer created successfully!')
    },
    onError: (error) => {
      toast.error('Failed to create offer')
      console.error(error)
    },
  })

  // Accept Offer
  const { config: acceptOfferConfig } = usePrepareContractWrite({
    address: P2P_EXCHANGE_ADDRESS,
    abi: P2PExchangeABI,
    functionName: 'acceptOffer',
  })

  const { write: acceptOffer, isLoading: isAccepting } = useContractWrite(acceptOfferConfig)

  // Confirm Payment (Seller)
  const { config: confirmPaymentConfig } = usePrepareContractWrite({
    address: P2P_EXCHANGE_ADDRESS,
    abi: P2PExchangeABI,
    functionName: 'confirmPayment',
  })

  const { write: confirmPayment, isLoading: isConfirming } = useContractWrite(confirmPaymentConfig)

  return {
    offers,
    createOffer,
    acceptOffer,
    confirmPayment,
    isCreating,
    isAccepting,
    isConfirming,
    refetchOffers,
  }
}
```

---

## Phase 4: Feature Implementation (Weeks 4-6)

### Step 4.1: Dashboard Page

**src/pages/Dashboard.tsx:**
```typescript
import { useWallet } from '../hooks/useWallet'
import { useP2PContract } from '../hooks/useContract'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import StatusBadge from '../components/ui/Badge'

export default function Dashboard() {
  const { address } = useWallet()
  const { offers } = useP2PContract()

  // Filter user's active trades
  const activeTrades = [] // Fetch from contract
  const userOffers = [] // Fetch user's offers

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-neutral-600">Hello, {address?.slice(0, 6)}...{address?.slice(-4)}! 👋</p>
      </div>

      {/* Wallet Balance */}
      <Card className="bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <h2 className="text-xl font-semibold mb-4">💰 Wallet Balance</h2>
        <div className="flex items-baseline gap-4">
          <span className="text-5xl font-bold">5,243.50</span>
          <span className="text-2xl">USDT</span>
        </div>
        <p className="text-primary-100 mt-2">≈ ₹4,37,790</p>
        <div className="mt-6 flex gap-3">
          <Button variant="secondary">Deposit</Button>
          <Button variant="ghost">Withdraw</Button>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <p className="text-sm text-neutral-600">Total Trades</p>
          <p className="text-3xl font-bold mt-2">47</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">Success Rate</p>
          <p className="text-3xl font-bold mt-2 text-success-700">98.5%</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">Total Volume</p>
          <p className="text-3xl font-bold mt-2">₹12,45,670</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">Reputation</p>
          <p className="text-3xl mt-2">⭐⭐⭐⭐⭐</p>
        </Card>
      </div>

      {/* Active Trades */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Active Trades ({activeTrades.length})</h2>
          <Button variant="ghost" size="sm">View All →</Button>
        </div>

        {activeTrades.length > 0 ? (
          <div className="space-y-4">
            {activeTrades.map(trade => (
              <Card key={trade.id} hoverable>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <StatusBadge status={trade.status} />
                      <span className="font-semibold">#{trade.id}</span>
                    </div>
                    <p className="text-neutral-600 mt-1">
                      {trade.type} {trade.amount} USDT
                    </p>
                  </div>
                  <Button>View Trade →</Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <p className="text-center text-neutral-500 py-8">
              No active trades. Browse offers to start trading!
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
```

---

## Phase 5: Testing & Optimization (Week 7)

### Testing Strategy

1. **Unit Tests**: Jest + React Testing Library
   - Test all UI components in isolation
   - Test utility functions
   - Mock Web3 calls

2. **Integration Tests**:
   - Test user flows (wallet connect → browse → trade)
   - Test smart contract interactions on testnet

3. **E2E Tests**: Playwright or Cypress
   - Full user journeys
   - Cross-browser testing

### Performance Optimization

1. **Code Splitting**: Lazy load routes
   ```typescript
   const Dashboard = lazy(() => import('./pages/Dashboard'))
   ```

2. **Image Optimization**: Use WebP, lazy loading

3. **Bundle Analysis**: Use Vite's build analyzer

4. **Memoization**: Use React.memo, useMemo, useCallback

---

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Smart contract addresses verified
- [ ] BSC mainnet RPC endpoints set
- [ ] Error tracking (Sentry) configured
- [ ] Analytics (Plausible/GA) integrated
- [ ] SEO meta tags added
- [ ] PWA manifest configured
- [ ] Build optimized and tested
- [ ] Deploy to Vercel/Netlify
- [ ] Domain configured
- [ ] SSL certificate verified

---

## Summary

This implementation guide provides:

1. **Complete tech stack** with rationale
2. **Project structure** for scalability
3. **Phase-by-phase roadmap** (7 weeks)
4. **Code examples** for core components
5. **Web3 integration** patterns
6. **Testing strategy**
7. **Deployment checklist**

Developers can follow this guide sequentially, implementing features incrementally while maintaining design system consistency. All components use TypeScript for type safety and Tailwind for styling, ensuring the final product matches the design specifications exactly.

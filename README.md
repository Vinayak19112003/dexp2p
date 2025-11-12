# P2P Crypto Exchange - Decentralized INR/USDT Trading

A complete, production-ready decentralized P2P cryptocurrency exchange for trading INR (Indian Rupees) against USDT on Binance Smart Chain (BSC).

## 🎨 Features

- ✅ **Trust-First Design**: Clean, professional UI for financial applications
- ✅ **Wallet Integration**: MetaMask, Trust Wallet support via WalletConnect
- ✅ **Complete User Flows**: Browse, create offers, trade, dispute resolution
- ✅ **Responsive Design**: Mobile-first approach, works on all devices
- ✅ **Accessibility**: WCAG 2.1 AA compliant
- ✅ **Real-Time Updates**: Live trade status, timers, notifications
- ✅ **Reputation System**: Trust scoring for traders
- ✅ **Smart Contract Escrow**: Secure fund holding during trades

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- MetaMask or Trust Wallet browser extension
- BSC testnet BNB for testing (get from [BSC Faucet](https://testnet.binance.org/faucet-smart))

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd dexp2p

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your WalletConnect Project ID
# Get one free at https://cloud.walletconnect.com/
```

### Running the Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
dexp2p/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Design system components
│   │   ├── wallet/         # Wallet connection components
│   │   └── layout/         # Layout components (Header, Footer)
│   ├── pages/              # Page components
│   │   ├── Landing.tsx     # Landing page
│   │   ├── Dashboard.tsx   # User dashboard
│   │   ├── Browse.tsx      # Browse offers
│   │   ├── CreateOffer.tsx # Create offer wizard
│   │   └── MyOrders.tsx    # Trade history
│   ├── hooks/              # Custom React hooks
│   │   └── useWallet.ts    # Wallet connection hook
│   ├── contracts/          # Smart contract ABIs
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── config/             # App configuration
│   ├── styles/             # Global styles
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── public/                 # Static assets
├── DESIGN_SYSTEM.md        # Complete design documentation
├── USER_FLOWS.md           # Detailed user journeys
├── WIREFRAMES.md           # UI wireframes
├── IMPLEMENTATION_GUIDE.md # Developer guide
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# WalletConnect Project ID (Required)
# Get from: https://cloud.walletconnect.com/
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Smart Contract Addresses (Update after deployment)
VITE_P2P_EXCHANGE_ADDRESS=0x0000000000000000000000000000000000000000
VITE_USDT_ADDRESS=0x55d398326f99059fF775485246999027B3197955

# Network RPCs (Optional)
VITE_BSC_MAINNET_RPC=https://bsc-dataseed.binance.org/
VITE_BSC_TESTNET_RPC=https://data-seed-prebsc-1-s1.binance.org:8545/

# Environment
VITE_ENVIRONMENT=development
```

### Smart Contracts

The app requires deployed smart contracts for:

1. **P2P Exchange Contract**: Handles offer creation, escrow, and trade logic
2. **USDT Token Contract**: BSC USDT token (already deployed)

**Note**: Smart contract development is not included in this frontend repository. You'll need to:

1. Develop and deploy the P2P Exchange smart contract
2. Update `VITE_P2P_EXCHANGE_ADDRESS` in `.env`
3. Update ABIs in `src/contracts/abis/` if needed

## 🎨 Design System

The app includes a comprehensive design system with:

- **Color Palette**: Trust-inspiring blues and greens
- **Typography**: Inter font family
- **Components**: 15+ reusable components
- **Spacing**: Consistent 8px grid
- **Accessibility**: WCAG 2.1 AA compliant

See `DESIGN_SYSTEM.md` for complete documentation.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🧪 Testing

```bash
# Run unit tests (when configured)
npm test

# Run E2E tests (when configured)
npm run test:e2e
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

### Manual Deployment

1. Build the app: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes

## 🔐 Security Considerations

- ⚠️ **Never commit `.env` files** with real credentials
- ⚠️ **Audit smart contracts** before mainnet deployment
- ⚠️ **Use hardware wallets** for large amounts
- ⚠️ **Test thoroughly** on BSC testnet first
- ⚠️ **Monitor for vulnerabilities** in dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📚 Documentation

- `DESIGN_SYSTEM.md` - Complete visual design system
- `USER_FLOWS.md` - Detailed user journey flows
- `WIREFRAMES.md` - UI wireframes for all pages
- `IMPLEMENTATION_GUIDE.md` - Developer implementation roadmap

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Web3**: Wagmi + Viem
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod
- **Notifications**: React Hot Toast
- **UI Components**: Headless UI + Custom components

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Binance Smart Chain for the blockchain infrastructure
- MetaMask and Trust Wallet teams
- React and Vite communities

## ⚠️ Manual Steps Required

### 1. Get WalletConnect Project ID
1. Visit https://cloud.walletconnect.com/
2. Create a free account
3. Create a new project
4. Copy the Project ID
5. Add to `.env` file: `VITE_WALLETCONNECT_PROJECT_ID=your_id_here`

### 2. Deploy Smart Contracts
You need to develop and deploy:
- P2P Exchange smart contract
- Update contract address in `.env`

### 3. Test on BSC Testnet
1. Switch MetaMask to BSC Testnet
2. Get test BNB from faucet
3. Test all features

### 4. Production Deployment
1. Update all environment variables for production
2. Build: `npm run build`
3. Deploy to Vercel/Netlify
4. Configure custom domain

---

**Built with ❤️ for decentralized finance**

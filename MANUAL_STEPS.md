# Manual Steps Required - P2P Crypto Exchange

## ⚠️ IMPORTANT: Follow These Steps to Run the Application

The complete application has been built and is ready to run. However, you need to complete a few manual steps first.

---

## 1️⃣ Get WalletConnect Project ID (Required - 5 minutes)

WalletConnect is used to connect mobile wallets like Trust Wallet.

### Steps:
1. Visit **https://cloud.walletconnect.com/**
2. Click "Sign Up" and create a free account
3. After logging in, click "+ Create" to create a new project
4. Give it a name: "P2P Exchange" or any name you like
5. Copy the **Project ID** (looks like: `abc123def456...`)
6. Open the `.env.example` file in the project root
7. Create a new file named `.env` (without .example)
8. Add your Project ID:
   ```
   VITE_WALLETCONNECT_PROJECT_ID=paste_your_project_id_here
   ```

**Why needed?** WalletConnect enables mobile wallet connections. Without it, only browser extension wallets (MetaMask) will work.

---

## 2️⃣ Install Dependencies and Run (2 minutes)

```bash
# Navigate to project directory
cd dexp2p

# Install all dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000` 🎉

---

## 3️⃣ Connect Your Wallet

1. Install MetaMask browser extension if you don't have it:
   - Chrome: https://metamask.io/download/
   - Firefox: https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/

2. Switch to **BSC Testnet** in MetaMask:
   - Open MetaMask
   - Click network dropdown (top)
   - Click "Add Network" → "Add network manually"
   - Enter BSC Testnet details:
     ```
     Network Name: BSC Testnet
     RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/
     Chain ID: 97
     Currency Symbol: BNB
     Block Explorer: https://testnet.bscscan.com
     ```

3. Get test BNB:
   - Visit https://testnet.binance.org/faucet-smart
   - Enter your wallet address
   - Receive free test BNB

4. In the app, click "Connect Wallet"
5. Select MetaMask
6. Approve connection

---

## 4️⃣ Smart Contract Deployment (Required for Full Functionality)

**Current Status:** The app has placeholder smart contract addresses. For full functionality, you need to deploy contracts.

### What's Needed:
1. **P2P Exchange Smart Contract** - Needs to be developed and deployed
2. **USDT Token Contract** - Already deployed on BSC (address included)

### Smart Contract Features Required:
- Create offer (with escrow)
- Accept offer
- Confirm payment
- Release escrow
- Dispute handling
- DAO voting

### After Deployment:
1. Update `.env` with your contract address:
   ```
   VITE_P2P_EXCHANGE_ADDRESS=0xYourContractAddress
   ```

2. Update ABI if different:
   - Replace `src/contracts/abis/P2PExchange.json` with your contract's ABI

**Note:** Smart contract development is a separate project. This frontend is ready to integrate once contracts are deployed.

---

## 5️⃣ Production Deployment (Optional)

### Deploy to Vercel (Recommended):

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### Environment Variables for Production:
In Vercel dashboard, add:
- `VITE_WALLETCONNECT_PROJECT_ID` - Your WalletConnect ID
- `VITE_P2P_EXCHANGE_ADDRESS` - Your deployed contract address
- `VITE_ENVIRONMENT` - Set to `production`

---

## 📋 Summary Checklist

- [ ] Get WalletConnect Project ID from cloud.walletconnect.com
- [ ] Create `.env` file with Project ID
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Install MetaMask browser extension
- [ ] Add BSC Testnet to MetaMask
- [ ] Get test BNB from faucet
- [ ] Connect wallet in the app
- [ ] (Future) Deploy smart contracts
- [ ] (Future) Update contract address in `.env`
- [ ] (Optional) Deploy to production

---

## 🎯 What Works Right Now

✅ **Fully Functional:**
- Landing page with features
- Wallet connection (MetaMask, Trust Wallet)
- Network switching (BSC mainnet/testnet)
- All UI components and pages
- Routing and navigation
- Responsive design
- Mock data for demonstration

⏳ **Requires Smart Contracts:**
- Creating actual offers
- Accepting offers
- Real trades
- Escrow functionality
- Dispute resolution
- On-chain reputation

---

## 🚀 Quick Test (After Step 1 & 2)

1. Start the app: `npm run dev`
2. Visit `http://localhost:3000`
3. Click "Connect Wallet"
4. Connect MetaMask
5. Browse the app:
   - Landing page
   - Dashboard (shows mock data)
   - Browse offers
   - Create offer form
   - My orders

Everything should work perfectly with mock data!

---

## 🆘 Troubleshooting

### "Module not found" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### "Cannot find module '@/...'"
```bash
# Check if vite.config.ts has path alias
# Should have: resolve: { alias: { '@': path.resolve(__dirname, './src') } }
```

### Wallet won't connect
- Make sure MetaMask is installed
- Try refreshing the page
- Check if you're on the correct network (BSC)

### Port 3000 already in use
```bash
# Use different port
npm run dev -- --port 3001
```

---

## 📞 Need Help?

- Check `README.md` for detailed documentation
- Review `DESIGN_SYSTEM.md` for UI components
- See `USER_FLOWS.md` for feature workflows
- Check `IMPLEMENTATION_GUIDE.md` for technical details

---

**That's it! You're ready to run the P2P Exchange application! 🎉**

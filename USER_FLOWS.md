# P2P Crypto Exchange - User Flows

## 🎯 Core User Flows

This document details the step-by-step user journeys for all critical interactions in the P2P crypto exchange.

---

## Flow 1: Wallet Connection

### User Goal
Connect their Web3 wallet to access the platform.

### Entry Point
Landing page or any page while disconnected.

### Steps

1. **Landing State**
   - User sees homepage with "Connect Wallet" button (prominent, primary blue)
   - Supporting text: "Connect your wallet to start trading"
   - Supported wallets shown: MetaMask, Trust Wallet icons

2. **Initiate Connection**
   - User clicks "Connect Wallet"
   - Modal opens: "Select Wallet Provider"
   - Options displayed as large cards:
     ```
     [MetaMask Icon]          [Trust Wallet Icon]
     MetaMask                 Trust Wallet
     [Select Button]          [Select Button]
     ```

3. **Wallet Selection**
   - User clicks wallet option
   - System checks if wallet extension installed
   - **If not installed**: Show error toast "MetaMask not detected. Please install from metamask.io" with link
   - **If installed**: Trigger wallet connection prompt

4. **Wallet Approval**
   - Wallet extension opens (external to app)
   - User sees connection request with app details
   - User approves connection in wallet

5. **Network Check**
   - System checks connected network
   - **If wrong network**: Show warning modal
     ```
     ⚠️ Wrong Network
     Please switch to Binance Smart Chain
     [Switch Network Button] [Cancel]
     ```
   - User clicks "Switch Network"
   - Wallet prompts network switch
   - User approves

6. **Success State**
   - Toast notification: "✅ Wallet connected successfully"
   - Top-right shows:
     ```
     [BSC Logo] BSC | [Avatar] 0x1234...5678 | [Disconnect ▼]
     ```
   - User redirected to Dashboard

### Error Handling
- **User rejects connection**: Toast "Connection cancelled", return to step 1
- **Network switch fails**: Show manual instructions with network details
- **Connection timeout**: Toast "Connection timeout. Please try again"

### Design Decisions
- **Large wallet cards**: Easy tap targets on mobile
- **Clear network indicator**: Prevents trading on wrong chain
- **Abbreviated address**: Saves space, full address on hover/click

---

## Flow 2: Browse Offers

### User Goal
Discover and filter buy/sell offers from other traders.

### Entry Point
Main navigation → "Browse Offers" or Dashboard → "See All Offers"

### Steps

1. **Offers Listing Page**
   - Page title: "Browse Offers"
   - Tab switcher at top:
     ```
     [Buy USDT] [Sell USDT]
     ```
   - Filter panel (left sidebar on desktop, collapsible on mobile):
     ```
     🔍 Search
     [Search input]

     💰 Price Range
     [Min ₹] — [Max ₹]

     💵 Amount Range
     [Min USDT] — [Max USDT]

     💳 Payment Methods
     ☐ UPI
     ☐ IMPS
     ☐ Bank Transfer
     ☐ PayTM

     ⭐ Minimum Reputation
     [Slider: 0-5 stars]

     [Apply Filters] [Reset]
     ```
   - Offers grid/list (right main area)

2. **View Offers**
   - Each offer displayed as card:
     ```
     ┌─────────────────────────────────────────┐
     │ [Avatar] SellersName ⭐⭐⭐⭐⭐ 47 trades │
     │                                         │
     │ Price: ₹83.50 per USDT                  │
     │ Available: 1,200 USDT                   │
     │ Total: ₹1,00,200                        │
     │                                         │
     │ Payment: [UPI] [IMPS] [Bank Transfer]  │
     │ Limits: ₹1,000 - ₹50,000                │
     │                                         │
     │ [Buy USDT Button]                       │
     └─────────────────────────────────────────┘
     ```
   - Sorting options above grid:
     ```
     Sort by: [Best Price ▼] [Highest Reputation] [Fastest]
     ```

3. **Apply Filters**
   - User selects filter criteria
   - Clicks "Apply Filters"
   - Loading skeleton appears
   - Filtered results load (200ms animation)
   - Count shown: "Showing 23 offers"

4. **Search**
   - User types in search box
   - Debounced search (500ms)
   - Filters by seller name, payment methods
   - Results update in real-time

5. **View Offer Details**
   - User clicks on offer card
   - Card expands or modal opens with detailed view:
     ```
     Offer Details

     Seller Information
     [Large Avatar] SellersName
     ⭐⭐⭐⭐⭐ 4.9/5.0 (47 trades)
     Member since: Jan 2024
     Last active: 5 minutes ago

     Offer Terms
     Price: ₹83.50 per USDT
     Available: 1,200 USDT
     Min/Max: ₹1,000 - ₹50,000

     Payment Methods
     [UPI Icon] UPI - Instant
     [Bank Icon] IMPS - 15 minutes
     [Bank Icon] Bank Transfer - 2-24 hours

     Terms & Conditions
     [Seller's custom terms text]

     [Back] [Accept Offer Button]
     ```

6. **Navigate to Trade**
   - User clicks "Accept Offer" / "Buy USDT"
   - System checks wallet connection
   - **If not connected**: Redirect to wallet connection flow
   - **If connected**: Proceed to Trade Initiation (Flow 5)

### Responsive Behavior
- **Desktop**: Filters sidebar + grid view
- **Tablet**: Filters collapsible drawer + 2-column grid
- **Mobile**: Filters bottom sheet + single column list

### Design Decisions
- **Tab-based buy/sell split**: Reduces cognitive load, clear intent
- **Persistent filters**: Improve discovery for repeat searches
- **Reputation prominent**: Builds trust before engagement
- **Real-time search**: Immediate feedback enhances UX

---

## Flow 3: Create Offer

### User Goal
Post a new buy or sell offer for other traders.

### Entry Point
Main navigation → "Create Offer" or Dashboard → "Create New Offer"

### Prerequisites
- Wallet connected
- Sufficient USDT balance (for sell offers)

### Steps

1. **Offer Type Selection**
   - Page title: "Create New Offer"
   - Large card selection:
     ```
     ┌──────────────────┐  ┌──────────────────┐
     │  💵 Sell USDT    │  │  💰 Buy USDT     │
     │                  │  │                  │
     │  I want to sell  │  │  I want to buy   │
     │  USDT for INR    │  │  USDT with INR   │
     │                  │  │                  │
     │  [Select]        │  │  [Select]        │
     └──────────────────┘  └──────────────────┘
     ```
   - User clicks one option

2. **Multi-Step Form - Step 1: Offer Details**
   - Progress stepper:
     ```
     [1. Offer Details] → [2. Payment Methods] → [3. Terms] → [4. Review]
        (Active)
     ```
   - Form fields:
     ```
     USDT Amount *
     [________] USDT
     Your balance: 5,000 USDT
     Helper: Minimum 10 USDT

     Price per USDT *
     ₹ [________]
     Current market: ₹83.20
     Helper: Set competitive price

     Price Type
     ○ Fixed Price
     ○ Market Price (with margin: [__]%)

     Order Limits
     Minimum: ₹ [________]
     Maximum: ₹ [________]
     Helper: Min ₹500, Max ₹5,00,000

     [Back] [Next Step →]
     ```
   - Real-time validation on blur
   - Errors shown immediately below fields

3. **Step 2: Payment Methods**
   - Progress stepper: Step 2 active
   - Payment method selection:
     ```
     Select Payment Methods *
     (Select at least one)

     ☑ UPI
       UPI ID: [____________@paytm]

     ☐ IMPS
       Bank: [Select Bank ▼]
       Account: [____________]
       IFSC: [____________]

     ☐ Bank Transfer (NEFT/RTGS)
       Bank: [Select Bank ▼]
       Account: [____________]
       IFSC: [____________]

     ☐ PayTM
       Mobile: [+91 __________]

     [+ Add Another Method]

     Payment Time Limit
     [30 minutes ▼]
     Helper: Buyer must send payment within this time

     [← Back] [Next Step →]
     ```

4. **Step 3: Terms & Conditions**
   - Progress stepper: Step 3 active
   - Form:
     ```
     Offer Terms (Optional)
     [Text area with rich formatting]
     Helper: Add any specific instructions for traders

     Auto-reply Message (Optional)
     [Text area]
     Helper: Sent automatically when someone accepts your offer

     Trading Hours
     ○ Anytime (24/7)
     ○ Specific hours
       From: [09:00 ▼] To: [21:00 ▼]

     [← Back] [Next: Review →]
     ```

5. **Step 4: Review & Confirm**
   - Progress stepper: Step 4 active
   - Summary card:
     ```
     Review Your Offer

     Type: Sell USDT
     Amount: 1,000 USDT
     Price: ₹83.50 per USDT
     Total Value: ₹83,500

     Limits: ₹1,000 - ₹50,000

     Payment Methods:
     • UPI (username@paytm)
     • IMPS (Ending in 1234)

     Payment Time: 30 minutes

     [Edit Offer] [Confirm & Create]
     ```

6. **Smart Contract Interaction**
   - User clicks "Confirm & Create"
   - **For Sell Offers**: Escrow required
     - Modal: "Approve Escrow"
     - Explanation:
       ```
       🔒 Secure Your USDT

       Your 1,000 USDT will be locked in our smart
       contract escrow until the trade completes.
       This protects both you and the buyer.

       Escrow Address: 0xABCD...1234
       [View on BSCScan]

       [Cancel] [Approve Escrow →]
       ```
   - User clicks "Approve Escrow"
   - Wallet opens for approval transaction
   - Loading state: "Waiting for approval..."
   - **First time**: Two transactions needed
     1. USDT approval
     2. Escrow deposit
   - **Subsequent**: One transaction (deposit)

7. **Transaction Confirmation**
   - Loading modal:
     ```
     Creating Your Offer...

     [Spinner animation]

     Transaction: 0xTX123...
     Confirmations: 3/12
     Estimated time: ~2 minutes

     [View on BSCScan]
     ```
   - Status updates in real-time

8. **Success State**
   - Success modal:
     ```
     ✅ Offer Created Successfully!

     Your offer is now live and visible to traders.
     You'll be notified when someone accepts it.

     [View My Offers] [Create Another]
     ```
   - Redirect to "My Offers" page

### Error Handling
- **Insufficient balance**: Show error, link to deposit page
- **Transaction rejected**: Toast "Transaction cancelled", return to review
- **Transaction failed**: Show error details, "Try Again" button
- **Network error**: Retry logic, fallback to manual retry

### Auto-Save Feature
- Form progress auto-saved to localStorage every 30s
- On page reload: "Continue your draft?" prompt
- Draft expires after 24 hours

### Design Decisions
- **Multi-step form**: Reduces overwhelm, focused input
- **Clear escrow explanation**: Demystifies smart contract interaction
- **Real-time validation**: Prevents submission errors
- **Auto-save**: Respects user's time, prevents data loss
- **Transaction transparency**: Shows hash, confirmations builds trust

---

## Flow 4: Accept Offer & Initiate Trade

### User Goal
Accept an offer and start a trade.

### Entry Point
Browse Offers → Click "Buy/Sell USDT" on offer card

### Steps

1. **Offer Confirmation Modal**
   ```
   Accept Offer

   You are buying: 1,000 USDT
   You will pay: ₹83,500
   Price: ₹83.50 per USDT

   Seller: [Avatar] SellersName ⭐⭐⭐⭐⭐
   Payment: UPI, IMPS
   Time limit: 30 minutes

   Enter Amount
   Amount (USDT): [______] (Max: 1,000)
   You will pay: ₹[calculated]

   Must be between ₹1,000 - ₹50,000

   [Cancel] [Accept Offer →]
   ```

2. **Validation**
   - Check amount within limits
   - Check offer still available
   - **If taken/cancelled**: Error "This offer is no longer available"

3. **Create Trade Transaction**
   - User clicks "Accept Offer"
   - Modal: "Initiating Trade..."
   - **For buy offers**: Smart contract locks trade
   - **For sell offers**: User's USDT goes to escrow
   - Wallet prompts transaction approval
   - Loading: "Confirming transaction..."

4. **Trade Created**
   - Success modal:
     ```
     ✅ Trade Initiated!

     Trade ID: #T12345

     Next Steps:
     1. Send ₹83,500 via UPI to seller
     2. Mark payment as sent
     3. Wait for seller confirmation

     Time remaining: 29:45

     [Go to Trade]
     ```

5. **Redirect to Trade Page**
   - User taken to active trade view (Flow 5)

### Design Decisions
- **Amount confirmation**: Prevents accidental trades
- **Time limit prominent**: Creates urgency awareness
- **Clear next steps**: Reduces confusion post-creation
- **Trade ID**: Enables support and tracking

---

## Flow 5: Complete Trade (Buyer Journey)

### User Goal
Send payment and receive USDT.

### Entry Point
Active trade from "My Orders" or notification

### Steps

1. **Trade Page - Initial State**
   ```
   Trade #T12345 | ⏱️ 28:30 remaining

   [Progress Stepper]
   [1. Payment Pending] → [2. Confirm Payment] → [3. Complete]
      (Active)

   Trade Details
   ┌─────────────────────────────────────────┐
   │ You're buying: 1,000 USDT               │
   │ You pay: ₹83,500                        │
   │ Seller: [Avatar] SellersName ⭐⭐⭐⭐⭐  │
   └─────────────────────────────────────────┘

   Payment Instructions
   ┌─────────────────────────────────────────┐
   │ Send exactly ₹83,500 via UPI to:        │
   │                                         │
   │ UPI ID: seller123@paytm                 │
   │ [Copy UPI ID]                           │
   │                                         │
   │ Reference (Optional): T12345            │
   │                                         │
   │ ⚠️ Important:                            │
   │ • Send exact amount                     │
   │ • Use only your verified UPI account    │
   │ • Complete within 28 minutes            │
   └─────────────────────────────────────────┘

   [Cancel Trade] [I've Sent Payment →]

   Chat with Seller
   [Chat interface]
   ```

2. **Mark Payment Sent**
   - User sends payment via their banking app (external)
   - Returns to trade page
   - Clicks "I've Sent Payment"
   - Modal opens:
     ```
     Confirm Payment Sent

     I confirm that I have sent ₹83,500 to the
     seller via UPI.

     Upload Proof (Optional)
     [📎 Upload Screenshot]

     Transaction Reference (Optional)
     [____________]

     ⚠️ Warning: Only confirm if you've actually
     sent payment. False confirmation may result
     in account suspension.

     [Cancel] [Confirm Payment Sent]
     ```

3. **Awaiting Seller Confirmation**
   - User confirms
   - Status updates:
     ```
     [Progress Stepper]
     [1. Payment Pending ✓] → [2. Awaiting Confirmation] → [3. Complete]
                                  (Active)

     ⏳ Waiting for Seller Confirmation

     You've marked payment as sent.
     Waiting for SellersName to confirm receipt.

     Estimated time: 5-15 minutes

     [Chat with Seller]

     Payment hasn't been confirmed?
     After 30 minutes, you can raise a dispute.

     [Raise Dispute] (disabled, countdown: 28:45)
     ```

4. **Seller Confirms**
   - Seller confirms on their end (their flow)
   - Smart contract releases USDT
   - Buyer's page updates:
     ```
     ✅ Payment Confirmed!

     [Progress Stepper]
     [1. ✓] → [2. ✓] → [3. Releasing USDT]
                           (Active - spinner)

     SellersName has confirmed your payment.
     Releasing 1,000 USDT to your wallet...

     Transaction: 0xABC...
     Confirmations: 5/12
     ```

5. **Trade Complete**
   - USDT arrives in wallet
   - Success screen:
     ```
     🎉 Trade Completed Successfully!

     You received: 1,000 USDT
     View in wallet: [Button]

     Rate your experience with SellersName
     [5 star rating]
     [Optional comment]

     [Submit Rating] [Close]
     ```
   - Redirect to trade history

### Alternative Path: Dispute

6a. **Raise Dispute (if seller doesn't confirm)**
   - After 30 minutes, "Raise Dispute" button enables
   - User clicks
   - Modal:
     ```
     Raise Dispute

     Reason *
     ○ Seller not responding
     ○ Seller denies receiving payment
     ○ Payment sent but not acknowledged
     ○ Other

     Evidence
     [Upload payment proof]
     [Upload chat screenshots]

     Description *
     [Text area - explain situation]

     This will submit your case to the DAO for
     resolution. The community will vote based
     on evidence provided.

     [Cancel] [Submit Dispute]
     ```

6b. **Dispute Submitted**
   - Status updates:
     ```
     ⚖️ Dispute Raised

     Your dispute has been submitted to the DAO.
     Case ID: #D789

     What happens next:
     1. Community reviews evidence (24-48 hours)
     2. DAO members vote on resolution
     3. Funds released based on verdict

     [View Dispute Status]
     ```

6c. **DAO Voting (Simplified View)**
   - User can view voting progress:
     ```
     Dispute #D789 Status

     Current Votes:
     Release to Buyer: 68% (34 votes)
     Release to Seller: 32% (16 votes)

     Voting ends in: 18 hours

     [View Full Evidence] [Vote (if DAO member)]
     ```

6d. **Dispute Resolution**
   - Final verdict:
     ```
     ✅ Dispute Resolved in Your Favor

     The DAO voted to release USDT to you.
     1,000 USDT is being transferred to your wallet.

     Transaction: 0xDEF...

     [Close]
     ```

### Error Handling
- **Timer expires**: Auto-cancels trade, funds returned
- **Transaction fails**: Retry logic with manual option
- **Network issues**: Offline mode with sync on reconnect

### Design Decisions
- **Clear payment instructions**: Reduces payment errors
- **Payment proof upload**: Supports dispute resolution
- **Real-time status updates**: Reduces anxiety
- **Timer prominent**: Creates urgency, prevents abandonment
- **DAO transparency**: Shows fair dispute process

---

## Flow 6: Complete Trade (Seller Journey)

### User Goal
Receive payment and release USDT.

### Entry Point
Notification: "New trade on your offer" → Trade page

### Steps

1. **Trade Notification**
   - Toast: "🔔 New trade! BuyersName wants to buy 1,000 USDT"
   - Click notification → Trade page

2. **Trade Page - Awaiting Payment**
   ```
   Trade #T12345 | ⏱️ 29:45 remaining

   [Progress Stepper]
   [1. Awaiting Payment] → [2. Confirm Receipt] → [3. Complete]
      (Active)

   Trade Details
   ┌─────────────────────────────────────────┐
   │ You're selling: 1,000 USDT              │
   │ You receive: ₹83,500                    │
   │ Buyer: [Avatar] BuyersName ⭐⭐⭐⭐      │
   └─────────────────────────────────────────┘

   ⏳ Waiting for Buyer Payment

   BuyersName should send ₹83,500 via UPI to:
   seller123@paytm

   Check your UPI app for incoming payment.

   [Chat with Buyer]
   [Cancel Trade]
   ```

3. **Buyer Marks Payment Sent**
   - Page updates:
     ```
     [Progress Stepper]
     [1. Payment Pending ✓] → [2. Confirm Receipt] → [3. Complete]
                                  (Active)

     💳 Buyer Claims Payment Sent

     BuyersName says they've sent ₹83,500.
     Check your UPI account for payment.

     Payment Reference: UPI123456789
     Proof: [View Screenshot]

     ⚠️ Only confirm if you've received the full
     amount in your account.

     [Payment Not Received] [Confirm Payment ✓]
     ```

4. **Verify Payment**
   - Seller checks banking app (external)
   - Verifies amount, sender

5. **Confirm Payment**
   - Seller clicks "Confirm Payment"
   - Modal:
     ```
     Confirm Payment Received

     I confirm I've received ₹83,500 in my
     account from BuyersName.

     This will release 1,000 USDT from escrow
     to the buyer. This action cannot be undone.

     ☑ I have verified the payment

     [Cancel] [Confirm & Release USDT]
     ```

6. **Release USDT**
   - Seller confirms
   - Wallet prompts transaction to release escrow
   - Loading:
     ```
     Releasing USDT...

     [Spinner]

     Transaction: 0xGHI...
     Confirmations: 4/12
     ```

7. **Trade Complete**
   - Success:
     ```
     ✅ Trade Completed!

     1,000 USDT released to BuyersName.
     You received ₹83,500.

     Rate your experience with BuyersName
     [5 star rating]

     [Submit] [Close]
     ```

### Alternative Path: Payment Issue

5a. **Payment Not Received**
   - Seller clicks "Payment Not Received"
   - Modal:
     ```
     Report Payment Issue

     Issue type:
     ○ Payment not received
     ○ Wrong amount received
     ○ Payment from different account

     Details:
     [Text area]

     This notifies the buyer. If unresolved,
     either party can raise a dispute.

     [Cancel] [Report Issue]
     ```

5b. **Buyer Notified**
   - Buyer sees notification
   - Chat opens for resolution
   - If unresolved after timer: Dispute option enabled

### Design Decisions
- **Clear verification steps**: Prevents premature release
- **Payment proof visible**: Helps seller verify quickly
- **Irreversible warning**: Prevents accidental confirmations
- **Real-time notifications**: Ensures timely responses

---

## Flow 7: Dashboard Overview

### User Goal
View account status, active trades, and quick actions.

### Entry Point
Post wallet connection, main navigation → "Dashboard"

### Layout

```
┌──────────────────────────────────────────────────────────────────┐
│ Header: P2P Exchange | [Dashboard] [Browse] [My Orders] [Create] │
│ [BSC] [0x1234...5678 ▼]                                          │
└──────────────────────────────────────────────────────────────────┘

Dashboard

Hello, 0x1234...5678! 👋

┌─────────────────────────────────────────────────────────────────┐
│ Wallet Balance                                                  │
│ ─────────────────                                               │
│ USDT: 5,243.50 | INR Equivalent: ₹4,37,790                     │
│ [Deposit] [Withdraw]                                            │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Total Trades │ │ Success Rate │ │ Total Volume │ │ Reputation   │
│ 47           │ │ 98.5%        │ │ ₹12,45,670   │ │ ⭐⭐⭐⭐⭐    │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘

Active Trades (2)
┌─────────────────────────────────────────────────────────────────┐
│ #T12345 | Buying 1,000 USDT | ⏱️ 23:15 remaining                 │
│ Status: Awaiting payment confirmation                           │
│ [View Trade →]                                                  │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│ #T12346 | Selling 500 USDT | ⏱️ 45:10 remaining                  │
│ Status: Buyer sent payment                                      │
│ [Confirm Payment →]                                             │
└─────────────────────────────────────────────────────────────────┘

Your Offers (3 active)
[View All Offers →]

Recent Activity
┌─────────────────────────────────────────────────────────────────┐
│ ✅ Trade #T12344 completed - Bought 800 USDT     2 hours ago    │
│ 💬 New message from SellerName on Trade #T12345  5 hours ago    │
│ 📊 New offer created - Sell 2,000 USDT          1 day ago       │
└─────────────────────────────────────────────────────────────────┘

Quick Actions
[Create New Offer] [Browse Offers] [View All Trades]
```

### Key Features
- **Wallet balance**: Prominent, with fiat conversion
- **Stats cards**: At-a-glance performance metrics
- **Active trades**: Prioritized, action buttons
- **Recent activity**: Timeline of events
- **Quick actions**: One-click to common tasks

### Design Decisions
- **Information hierarchy**: Most urgent items at top
- **Action-oriented**: Every section has clear CTAs
- **Real-time updates**: Balance, timers update live
- **Responsive**: Cards stack on mobile

---

## Flow 8: Dispute Resolution (DAO Voting)

### User Goal
Vote on disputes as DAO member.

### Entry Point
Notification: "New dispute needs your vote" → Dispute page

### Steps

1. **Dispute List (DAO Members)**
   ```
   Active Disputes

   Filter: [All] [Need Votes] [Resolved]

   ┌─────────────────────────────────────────────────────────────┐
   │ Dispute #D789                                               │
   │ Trade #T12345 | Amount: 1,000 USDT (₹83,500)               │
   │                                                             │
   │ Claim: Buyer sent payment, seller not confirming           │
   │ Votes: 34 For Buyer | 16 For Seller                        │
   │ Time left: 18 hours                                         │
   │                                                             │
   │ [View Details & Vote →]                                     │
   └─────────────────────────────────────────────────────────────┘
   ```

2. **Dispute Detail Page**
   ```
   Dispute #D789
   Trade #T12345 | Amount: 1,000 USDT

   Timeline
   1. Trade created: Jan 10, 2024 10:30 AM
   2. Buyer marked payment sent: 10:45 AM
   3. Seller claim: Payment not received: 11:30 AM
   4. Dispute raised: 12:00 PM

   Buyer's Evidence
   ┌─────────────────────────────────────────────────────────────┐
   │ Payment Screenshot: [View Image]                            │
   │ Transaction ID: UPI123456789                                │
   │ Timestamp: Jan 10, 10:42 AM                                 │
   │ Statement:                                                  │
   │ "I sent ₹83,500 via UPI to seller123@paytm as instructed.  │
   │  Screenshot shows successful transaction."                  │
   └─────────────────────────────────────────────────────────────┘

   Seller's Evidence
   ┌─────────────────────────────────────────────────────────────┐
   │ Bank Statement: [View Image]                                │
   │ Statement:                                                  │
   │ "I haven't received any payment in my account. The UPI ID  │
   │  shown in screenshot doesn't match mine."                   │
   └─────────────────────────────────────────────────────────────┘

   Chat History
   [View full conversation]

   Current Voting Results
   Release to Buyer: ████████████░░░░ 68% (34 votes)
   Release to Seller: ██████░░░░░░░░░░ 32% (16 votes)

   Your Vote
   ○ Release USDT to Buyer
   ○ Release USDT to Seller
   ○ Split 50/50 (rare, requires strong justification)

   Reasoning (optional but encouraged):
   [Text area]

   [Submit Vote]
   ```

3. **Submit Vote**
   - User selects option
   - Clicks "Submit Vote"
   - Wallet transaction for on-chain vote
   - Confirmation:
     ```
     ✅ Vote Submitted

     Your vote has been recorded on-chain.
     Thank you for participating in dispute resolution!

     [View Dispute Status] [Vote on Another]
     ```

4. **Dispute Resolution**
   - After voting period (48 hours):
   - Smart contract executes majority decision
   - Both parties notified
   - Funds distributed automatically

### Design Decisions
- **Evidence prominent**: All information for informed voting
- **Timeline**: Provides context for dispute
- **On-chain voting**: Transparent, immutable
- **Reasoning encouraged**: Improves decision quality

---

## Flow 9: Notifications System

### Notification Types & Triggers

#### Real-time Notifications (Toast)
1. **Wallet connected**: "✅ Wallet connected successfully"
2. **Trade created**: "✅ Trade #T12345 initiated"
3. **Payment sent**: "💳 Payment marked as sent"
4. **Payment confirmed**: "✅ Payment confirmed! Releasing USDT..."
5. **Trade completed**: "🎉 Trade completed successfully!"
6. **Dispute raised**: "⚖️ Dispute submitted"
7. **Error**: "❌ Transaction failed. Please try again."

#### Persistent Notifications (Notification Center)
```
[🔔 Notifications (3)]

Today
• 🆕 New trade on your offer - BuyersName wants to buy 1,000 USDT
  5 minutes ago | [View Trade]

• 💬 New message from SellerName on Trade #T12345
  1 hour ago | [Open Chat]

• ⏰ Payment deadline approaching - 10 minutes left on Trade #T12346
  2 hours ago | [View Trade]

Yesterday
• ✅ Trade #T12344 completed successfully
  [View Details]
```

### Notification Settings
```
Notification Preferences

Email Notifications
☑ New trade on my offer
☑ Trade status updates
☑ Payment received
☑ Dispute updates
☐ Marketing emails

Push Notifications (Browser)
☑ Urgent: Payment deadlines
☑ New messages
☑ Trade completions
☐ Offers matching my preferences

[Save Settings]
```

### Design Decisions
- **Contextual actions**: Every notification actionable
- **Priority levels**: Visual hierarchy (urgent vs. info)
- **Persistent history**: Users can review missed notifications
- **Customizable**: Users control notification frequency

---

## Summary of User Flows

| Flow | Key Screens | Critical Features |
|------|-------------|-------------------|
| 1. Wallet Connection | Landing → Wallet Select → Network Check | Multi-wallet support, network validation |
| 2. Browse Offers | Listing → Filters → Detail | Search, filters, reputation display |
| 3. Create Offer | Type Select → 4-Step Form → Escrow | Multi-step wizard, auto-save, escrow |
| 4. Accept Offer | Offer Detail → Confirm → Trade Created | Amount validation, immediate feedback |
| 5. Complete (Buyer) | Payment → Confirm → Receive | Clear instructions, timer, dispute option |
| 6. Complete (Seller) | Await → Verify → Release | Payment verification, escrow release |
| 7. Dashboard | Overview → Stats → Actions | At-a-glance status, quick actions |
| 8. Dispute Resolution | List → Evidence → Vote | Transparent voting, evidence review |
| 9. Notifications | Real-time → Persistent → Settings | Multi-channel, actionable, customizable |

### Universal Design Principles Applied
1. **Progressive Disclosure**: Show only relevant info at each step
2. **Immediate Feedback**: Every action has visible response
3. **Error Prevention**: Validation, confirmations before irreversible actions
4. **Clear Mental Models**: Flow matches real-world trading process
5. **Undo/Escape**: Cancel options at every step
6. **Consistency**: Same patterns across all flows
7. **Visibility of System Status**: Always show current state, next step
8. **Help & Documentation**: Contextual tooltips, help links

This comprehensive flow design ensures users can confidently navigate the P2P exchange from wallet connection through trade completion and dispute resolution.

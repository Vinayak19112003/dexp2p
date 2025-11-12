# P2P Crypto Exchange - Wireframes & Layouts

## 📐 Page Layouts & Wireframes

This document provides ASCII wireframes and detailed layout specifications for all major pages.

---

## 1. Landing Page (Disconnected State)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [Logo] P2P Exchange        [Features] [How It Works] [About]   [Language▼]│
└────────────────────────────────────────────────────────────────────────────┘

                        ╔══════════════════════════════════╗
                        ║   Decentralized INR/USDT P2P     ║
                        ║        Trading on BSC            ║
                        ╚══════════════════════════════════╝

                    Trade crypto directly with peers
                  Secure • Trustless • Decentralized

                     [🦊 Connect Wallet Button]
                         (Primary, Large)

              Supported: [MetaMask Icon] [Trust Wallet Icon]


┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   🔒 Secure      │  │   ⚡ Fast         │  │   💰 Low Fees     │
│   Escrow         │  │   Settlement      │  │   No Middlemen   │
│                  │  │                  │  │                  │
│   Smart contract │  │   Direct P2P     │  │   Only gas fees  │
│   protection     │  │   transfers      │  │   on BSC         │
└──────────────────┘  └──────────────────┘  └──────────────────┘


                         How It Works
                         ────────────

      1               2                 3                 4
  [Create Icon]   [Handshake Icon]  [Payment Icon]   [Check Icon]
  Create Offer    Find Match        Send Payment    Get USDT
  ────────────────────────────────────────────────────────────────
  Post your buy/  Browse offers    Transfer INR     Receive USDT
  sell offer      and connect       securely        in wallet


                    Latest Offers Preview
            ┌─────────────────────────────────────────┐
            │ ⭐⭐⭐⭐⭐ | Sell 1,000 USDT @ ₹83.50  │
            │ Payment: UPI, IMPS                     │
            └─────────────────────────────────────────┘
            ┌─────────────────────────────────────────┐
            │ ⭐⭐⭐⭐ | Buy 500 USDT @ ₹83.20       │
            │ Payment: Bank Transfer                  │
            └─────────────────────────────────────────┘

                    [Browse All Offers →]

┌────────────────────────────────────────────────────────────────────────────┐
│ Footer: About | Terms | Privacy | Docs | BSCScan | Discord | Twitter      │
└────────────────────────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Hero section with clear value proposition
- Prominent connect wallet CTA
- Trust indicators (features, process)
- Preview of active offers
- Mobile: Stack all elements vertically

---

## 2. Dashboard (Connected State)

### Desktop Layout (≥1024px)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [Logo] P2P Exchange  [Dashboard][Browse][My Orders][Create]  [BSC][0x12...▼]│
└────────────────────────────────────────────────────────────────────────────┘

┌──────┬─────────────────────────────────────────────────────────────────────┐
│      │  Dashboard                                   Hello, 0x1234! 👋      │
│  D   ├─────────────────────────────────────────────────────────────────────┤
│  A   │  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  S   │  ┃ 💰 Wallet Balance                                            ┃  │
│  H   │  ┃ ──────────────────                                           ┃  │
│  B   │  ┃ USDT: 5,243.50  |  INR Equivalent: ₹4,37,790                ┃  │
│  O   │  ┃ [Deposit] [Withdraw]                                         ┃  │
│  A   │  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│  R   │                                                                      │
│  D   │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────┐ │
│      │  │Total Trades  │ │Success Rate  │ │Total Volume  │ │Reputation  │ │
│  B   │  │     47       │ │    98.5%     │ │ ₹12,45,670   │ │⭐⭐⭐⭐⭐   │ │
│  R   │  └──────────────┘ └──────────────┘ └──────────────┘ └────────────┘ │
│  O   │                                                                      │
│  W   │  Active Trades (2)                                [View All →]      │
│  S   │  ┌────────────────────────────────────────────────────────────────┐ │
│  E   │  │ 🟡 #T12345 | Buying 1,000 USDT | ⏱️ 23:15 remaining            │ │
│      │  │ Status: Awaiting payment confirmation                          │ │
│  C   │  │ [View Trade →]                                                 │ │
│  R   │  └────────────────────────────────────────────────────────────────┘ │
│  E   │  ┌────────────────────────────────────────────────────────────────┐ │
│  A   │  │ 🟢 #T12346 | Selling 500 USDT | ⏱️ 45:10 remaining             │ │
│  T   │  │ Status: Buyer sent payment  [Action Required]                 │ │
│  E   │  │ [Confirm Payment →]                                            │ │
│      │  └────────────────────────────────────────────────────────────────┘ │
│  M   │                                                                      │
│  Y   │  Your Active Offers (3)                           [Manage All →]   │
│      │  ┌──────────────────────┐ ┌──────────────────────┐                 │
│  O   │  │Sell 2,000 USDT       │ │Buy 1,500 USDT        │                 │
│  R   │  │@ ₹83.75              │ │@ ₹83.00              │  [+ Create]     │
│  D   │  │2 pending trades      │ │No trades yet         │                 │
│  E   │  └──────────────────────┘ └──────────────────────┘                 │
│  R   │                                                                      │
│  S   │  Recent Activity                                                    │
│      │  ┌────────────────────────────────────────────────────────────────┐ │
│      │  │ ✅ Trade #T12344 completed - Bought 800 USDT   2 hours ago    │ │
│      │  │ 💬 New message from Seller123                  5 hours ago    │ │
│      │  │ 📊 New offer created - Sell 2,000 USDT         1 day ago      │ │
│      │  └────────────────────────────────────────────────────────────────┘ │
└──────┴─────────────────────────────────────────────────────────────────────┘
```

**Sidebar (240px):**
- Vertical navigation
- Icons + labels
- Collapsible on tablet

**Main Content (Remaining width, max 1200px):**
- Wallet balance card (full width, highlighted)
- Stats cards (4-column grid)
- Active trades (stacked cards, most urgent first)
- Offers (2-3 column grid)
- Activity feed (timeline)

### Mobile Layout (<768px)

```
┌──────────────────────────────────┐
│ [☰] P2P Exchange      [🔔][👤]  │
└──────────────────────────────────┘

 Dashboard

 ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 ┃ 💰 Balance: 5,243.50 USDT    ┃
 ┃ ≈ ₹4,37,790                  ┃
 ┃ [Deposit][Withdraw]          ┃
 ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

 ┌──────────────┬──────────────┐
 │Total Trades  │Success Rate  │
 │     47       │    98.5%     │
 ├──────────────┼──────────────┤
 │Total Volume  │Reputation    │
 │ ₹12,45,670   │⭐⭐⭐⭐⭐     │
 └──────────────┴──────────────┘

 ⚡ Action Required
 ┌────────────────────────────────┐
 │ 🟢 #T12346                     │
 │ Selling 500 USDT               │
 │ Buyer sent payment             │
 │ [Confirm Payment →]            │
 └────────────────────────────────┘

 Active Trades (1 more)
 [View All →]

 Your Offers (3)
 [Manage →]

 Recent Activity
 • Trade completed  2h ago
 • New message      5h ago

┌──────────────────────────────────┐
│ [🏠][🔍][➕][📋][👤]             │
└──────────────────────────────────┘
(Bottom Navigation)
```

**Mobile Specifics:**
- Bottom navigation (thumb-friendly)
- Hamburger menu for secondary items
- 2-column stat grid
- Swipeable active trades
- Condensed activity feed

---

## 3. Browse Offers Page

### Desktop Layout

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [Logo] P2P Exchange  [Dashboard][Browse][My Orders][Create]  [BSC][0x12...▼]│
└────────────────────────────────────────────────────────────────────────────┘

Browse Offers

┌─────────────┬──────────┐                                    Sort by: [Best Price ▼]
│ [Buy USDT]  │ Sell USDT│  (Tab switcher)
└─────────────┴──────────┘

┌──────────────────┬─────────────────────────────────────────────────────────┐
│ Filters          │  Showing 23 offers                                      │
│ ───────          ├─────────────────────────────────────────────────────────┤
│                  │ ┌─────────────────────────────────────────────────────┐ │
│ 🔍 Search        │ │ [Avatar] SellerName ⭐⭐⭐⭐⭐ 47 trades             │ │
│ [__________]     │ │ Last active: 5 min ago                              │ │
│                  │ │                                                     │ │
│ 💰 Price Range   │ │ Price: ₹83.50 per USDT                              │ │
│ Min: [____]      │ │ Available: 1,200 USDT                               │ │
│ Max: [____]      │ │ Total: ₹1,00,200                                    │ │
│                  │ │                                                     │ │
│ 💵 Amount        │ │ Payment: [UPI][IMPS][Bank]                          │ │
│ Min: [____]      │ │ Limits: ₹1,000 - ₹50,000                            │ │
│ Max: [____]      │ │ Time: 30 minutes                                    │ │
│                  │ │                                                     │ │
│ 💳 Payment       │ │                        [Buy USDT →]                 │ │
│ ☑ UPI            │ └─────────────────────────────────────────────────────┘ │
│ ☐ IMPS           │                                                         │
│ ☐ Bank Transfer  │ ┌─────────────────────────────────────────────────────┐ │
│ ☐ PayTM          │ │ [Avatar] Trader456 ⭐⭐⭐⭐ 23 trades                │ │
│                  │ │ Last active: 1 hour ago                             │ │
│ ⭐ Reputation     │ │                                                     │ │
│ Min: ★★★★☆       │ │ Price: ₹83.45 per USDT                              │ │
│ [────●───]       │ │ Available: 800 USDT                                 │ │
│                  │ │ Total: ₹66,760                                      │ │
│ [Apply Filters]  │ │                                                     │ │
│ [Reset]          │ │ Payment: [UPI]                                      │ │
│                  │ │ Limits: ₹5,000 - ₹30,000                            │ │
│                  │ │ Time: 45 minutes                                    │ │
│                  │ │                                                     │ │
│                  │ │                        [Buy USDT →]                 │ │
│                  │ └─────────────────────────────────────────────────────┘ │
│                  │                                                         │
│                  │ [Load More Offers]                                      │
└──────────────────┴─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- Filters: 280px fixed left sidebar
- Offers: Remaining width, max 900px
- Card spacing: 24px vertical
- Sticky filters on scroll
- Infinite scroll or pagination

### Mobile Layout

```
┌──────────────────────────────────┐
│ [←] Browse Offers    [🔍][⚙️]   │
└──────────────────────────────────┘

┌─────────────┬──────────┐
│ [Buy USDT]  │ Sell USDT│
└─────────────┴──────────┘

Sort: [Best Price ▼]
[Filters ▼] 23 offers

┌────────────────────────────────┐
│ [Avatar] SellerName ⭐⭐⭐⭐⭐  │
│ 47 trades • 5 min ago          │
│                                │
│ ₹83.50/USDT                    │
│ 1,200 USDT available           │
│                                │
│ [UPI][IMPS][Bank]              │
│ ₹1,000 - ₹50,000               │
│                                │
│ [Buy USDT →]                   │
└────────────────────────────────┘

┌────────────────────────────────┐
│ [Avatar] Trader456 ⭐⭐⭐⭐     │
│ 23 trades • 1h ago             │
│                                │
│ ₹83.45/USDT                    │
│ 800 USDT available             │
│                                │
│ [UPI]                          │
│ ₹5,000 - ₹30,000               │
│                                │
│ [Buy USDT →]                   │
└────────────────────────────────┘

(Scroll for more)
```

**Mobile Specifics:**
- Filters in bottom sheet (tap ⚙️)
- Full-width offer cards
- Swipe between Buy/Sell tabs
- Pull-to-refresh

---

## 4. Create Offer - Multi-Step Form

### Step 1: Offer Details

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [Logo] P2P Exchange  [Dashboard][Browse][My Orders][Create]  [BSC][0x12...▼]│
└────────────────────────────────────────────────────────────────────────────┘

Create New Offer

Progress: [●━━━○━━━○━━━○] Step 1 of 4: Offer Details

┌────────────────────────────────────────────────────────────────────────────┐
│                              [Max Width: 600px]                            │
│                                                                            │
│  Offer Type *                                                              │
│  ○ Sell USDT (I have USDT, want INR)                                       │
│  ● Buy USDT (I have INR, want USDT)                                        │
│                                                                            │
│  ────────────────────────────────────────────────────────────────────────  │
│                                                                            │
│  USDT Amount *                                                             │
│  ┌────────────────────────────────────────┐                               │
│  │ 1000                              USDT │                               │
│  └────────────────────────────────────────┘                               │
│  Your balance: 5,000 USDT                                                  │
│  Minimum: 10 USDT                                                          │
│                                                                            │
│  Price per USDT *                                                          │
│  ┌────────────────────────────────────────┐                               │
│  │ ₹ 83.50                                │                               │
│  └────────────────────────────────────────┘                               │
│  Current market: ₹83.20 | Your margin: +0.36%                             │
│                                                                            │
│  Price Type                                                                │
│  ● Fixed Price: ₹83.50                                                     │
│  ○ Floating: Market price + [__]% margin                                   │
│                                                                            │
│  ────────────────────────────────────────────────────────────────────────  │
│                                                                            │
│  Order Limits *                                                            │
│  Minimum: ┌──────────┐   Maximum: ┌──────────┐                            │
│           │ ₹ 1000   │            │ ₹ 50000  │                            │
│           └──────────┘            └──────────┘                            │
│  Allowed range: ₹500 - ₹5,00,000                                           │
│                                                                            │
│                                                                            │
│                           [Cancel] [Next: Payment Methods →]               │
└────────────────────────────────────────────────────────────────────────────┘
```

**Validation:**
- Real-time on blur
- Errors below fields in red
- Next button disabled until valid
- Auto-calculate total value

### Step 2: Payment Methods

```
Progress: [●━━━●━━━○━━━○] Step 2 of 4: Payment Methods

┌────────────────────────────────────────────────────────────────────────────┐
│  Payment Methods * (Select at least one)                                   │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ ☑ UPI                                                               │  │
│  │   ┌─────────────────────────────────────────────────────────────┐   │  │
│  │   │ UPI ID: seller123@paytm                                     │   │  │
│  │   │ [Verify UPI ID]                                             │   │  │
│  │   └─────────────────────────────────────────────────────────────┘   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ ☐ IMPS / NEFT / RTGS                                                │  │
│  │   (Click to expand and add bank details)                            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ ☐ PayTM                                                             │  │
│  │   (Click to expand and add PayTM number)                            │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  [+ Add Custom Payment Method]                                             │
│                                                                            │
│  ────────────────────────────────────────────────────────────────────────  │
│                                                                            │
│  Payment Time Limit *                                                      │
│  ┌────────────────────────────────────────┐                               │
│  │ 30 minutes                          ▼  │                               │
│  └────────────────────────────────────────┘                               │
│  Options: 15 min, 30 min, 45 min, 1 hour, 2 hours                          │
│  Buyers must complete payment within this time.                           │
│                                                                            │
│                                                                            │
│                          [← Back] [Next: Terms & Conditions →]             │
└────────────────────────────────────────────────────────────────────────────┘
```

**Features:**
- Expandable sections for each method
- Validation for payment details
- At least one method required
- Recommended time limits highlighted

---

## 5. Active Trade Page (Buyer View)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [Logo] P2P Exchange  [Dashboard][Browse][My Orders][Create]  [BSC][0x12...▼]│
└────────────────────────────────────────────────────────────────────────────┘

[←] Trade #T12345                                    ⏱️ Time Left: 23:15

┌────────────────────────────────────────────────────────────────────────────┐
│ Progress                                                                   │
│ [●━━━━━━━━━━━━━●━━━━━━━━━━━━○]                                            │
│ ① Payment Pending  ② Awaiting Confirmation  ③ Complete                    │
│    (Completed)           (Active)            (Pending)                     │
└────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────┬───────────────────────────────────────────────────┐
│ Trade Details          │ Payment Instructions                              │
│ ──────────────         │ ────────────────────                              │
│                        │                                                   │
│ You're buying:         │ Send exactly ₹83,500 to seller via UPI:           │
│ 1,000 USDT             │                                                   │
│                        │ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓   │
│ You pay:               │ ┃ UPI ID: seller123@paytm                     ┃   │
│ ₹83,500                │ ┃ [📋 Copy UPI ID]                            ┃   │
│                        │ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛   │
│ Price:                 │                                                   │
│ ₹83.50 per USDT        │ Reference (optional): T12345                      │
│                        │                                                   │
│ ─────────────          │ ⚠️ Important:                                      │
│                        │ • Send exact amount: ₹83,500                      │
│ Seller:                │ • Complete within 23:15                           │
│ [Avatar] SellerName    │ • Use only your verified account                  │
│ ⭐⭐⭐⭐⭐ (47 trades)   │                                                   │
│ 98.5% completion       │ ────────────────────────────────────────────────  │
│                        │                                                   │
│ [View Profile]         │ [Cancel Trade]  [I've Sent Payment →]             │
│                        │                                                   │
└────────────────────────┴───────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│ 💬 Chat with SellerName                                           [⚙️]     │
│ ──────────────────────────────────────────────────────────────────────────│
│                                                                            │
│ SellerName: Hi! Please send payment to the UPI above. 5 min ago           │
│                                                                            │
│ You: Sure, sending now.                                    Just now        │
│                                                                            │
│ ──────────────────────────────────────────────────────────────────────────│
│ [Type your message...]                                  [📎] [Send]        │
└────────────────────────────────────────────────────────────────────────────┘

Trade Timeline
• Trade created: Jan 10, 2024 10:30 AM
• You accepted offer: 10:30 AM
• Current: Awaiting payment confirmation

[View on BSCScan] | [Need Help?]
```

**Layout:**
- 2-column: Details left (30%), Instructions right (70%)
- Sticky timer at top
- Chat below (collapsible)
- Timeline accordion at bottom

### Mobile Layout

```
┌──────────────────────────────────┐
│ [←] Trade #T12345    [⋮]         │
│ ⏱️ 23:15 left                     │
└──────────────────────────────────┘

[●━━━●━━○]
① Payment ② Confirm ③ Done

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ You're buying: 1,000 USDT    ┃
┃ You pay: ₹83,500             ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Send Payment via UPI
──────────────────────
UPI ID: seller123@paytm
[Copy UPI ID]

⚠️ Send exactly ₹83,500
⏱️ Complete within 23:15

[Cancel] [I've Sent Payment →]

─────────────────────────────

💬 Chat [Tap to expand]

─────────────────────────────

Seller: [Avatar] SellerName
⭐⭐⭐⭐⭐ 47 trades
[View Profile]
```

**Mobile Specifics:**
- Vertical stack
- Collapsible sections
- Large action buttons
- Quick copy UPI button

---

## 6. Offer Detail Modal

```
┌────────────────────────────────────────────────────────────────────────────┐
│                             [Overlay: 50% black blur]                      │
│                                                                            │
│   ┌──────────────────────────────────────────────────────────────────┐   │
│   │ Offer Details                                               [×]  │   │
│   ├──────────────────────────────────────────────────────────────────┤   │
│   │                                                                  │   │
│   │  ┌────────────────────────────────────────────────────────────┐ │   │
│   │  │ Seller Information                                         │ │   │
│   │  │                                                            │ │   │
│   │  │ [Large Avatar - 80px]   SellerName                         │ │   │
│   │  │                         ⭐⭐⭐⭐⭐ 4.9/5.0 (47 trades)       │ │   │
│   │  │                         Member since: Jan 2024             │ │   │
│   │  │                         Last active: 5 minutes ago         │ │   │
│   │  │                         [View Full Profile →]              │ │   │
│   │  └────────────────────────────────────────────────────────────┘ │   │
│   │                                                                  │   │
│   │  ┌────────────────────────────────────────────────────────────┐ │   │
│   │  │ Offer Terms                                                │ │   │
│   │  │                                                            │ │   │
│   │  │ Price:       ₹83.50 per USDT                               │ │   │
│   │  │ Available:   1,200 USDT                                    │ │   │
│   │  │ Total Value: ₹1,00,200                                     │ │   │
│   │  │ Min/Max:     ₹1,000 - ₹50,000                              │ │   │
│   │  │ Time Limit:  30 minutes                                    │ │   │
│   │  └────────────────────────────────────────────────────────────┘ │   │
│   │                                                                  │   │
│   │  ┌────────────────────────────────────────────────────────────┐ │   │
│   │  │ Payment Methods                                            │ │   │
│   │  │                                                            │ │   │
│   │  │ [UPI Icon] UPI - Instant                                   │ │   │
│   │  │ [Bank Icon] IMPS - ~15 minutes                             │ │   │
│   │  │ [Bank Icon] Bank Transfer - 2-24 hours                     │ │   │
│   │  └────────────────────────────────────────────────────────────┘ │   │
│   │                                                                  │   │
│   │  ┌────────────────────────────────────────────────────────────┐ │   │
│   │  │ Seller's Terms & Conditions                                │ │   │
│   │  │                                                            │ │   │
│   │  │ • Please send exact amount mentioned                       │ │   │
│   │  │ • Include trade reference in payment notes                 │ │   │
│   │  │ • I respond within 5-10 minutes usually                    │ │   │
│   │  │ • Available for trading: 9 AM - 9 PM IST                   │ │   │
│   │  └────────────────────────────────────────────────────────────┘ │   │
│   │                                                                  │   │
│   │                                                                  │   │
│   │                 [Back to List]  [Accept Offer →]                │   │
│   │                                                                  │   │
│   └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Modal size: 800px width
- Centered on screen
- Backdrop blur effect
- Scroll if content exceeds viewport
- Close: × button, Esc key, or backdrop click

---

## 7. Wallet Connection Modal

```
┌────────────────────────────────────────────────────────────────────────────┐
│                             [Overlay: 50% black blur]                      │
│                                                                            │
│        ┌───────────────────────────────────────────────────────┐          │
│        │ Connect Your Wallet                              [×]  │          │
│        ├───────────────────────────────────────────────────────┤          │
│        │                                                       │          │
│        │  Choose your preferred wallet provider:              │          │
│        │                                                       │          │
│        │  ┌──────────────────────────────────────────────┐    │          │
│        │  │                                              │    │          │
│        │  │  [MetaMask Fox Icon - 64px]                  │    │          │
│        │  │                                              │    │          │
│        │  │  MetaMask                                    │    │          │
│        │  │  Most popular Ethereum wallet                │    │          │
│        │  │                                              │    │          │
│        │  │                 [Connect →]                  │    │          │
│        │  │                                              │    │          │
│        │  └──────────────────────────────────────────────┘    │          │
│        │                                                       │          │
│        │  ┌──────────────────────────────────────────────┐    │          │
│        │  │                                              │    │          │
│        │  │  [Trust Wallet Icon - 64px]                  │    │          │
│        │  │                                              │    │          │
│        │  │  Trust Wallet                                │    │          │
│        │  │  Secure mobile crypto wallet                 │    │          │
│        │  │                                              │    │          │
│        │  │                 [Connect →]                  │    │          │
│        │  │                                              │    │          │
│        │  └──────────────────────────────────────────────┘    │          │
│        │                                                       │          │
│        │  ────────────────────────────────────────────────    │          │
│        │                                                       │          │
│        │  Don't have a wallet?                                │          │
│        │  [Learn how to set up →]                             │          │
│        │                                                       │          │
│        └───────────────────────────────────────────────────────┘          │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

**Interaction:**
- Large, tappable wallet cards
- Hover: Subtle lift effect
- Click: Trigger wallet extension
- If not installed: Show installation link

---

## 8. Dispute Resolution Page (DAO Member View)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [Logo] P2P Exchange  [Dashboard][Browse][My Orders][Create]  [BSC][0x12...▼]│
└────────────────────────────────────────────────────────────────────────────┘

DAO Dispute Resolution

Filter: [All Disputes ▼] [Need Votes] [Resolved] [My Votes]

┌────────────────────────────────────────────────────────────────────────────┐
│ Dispute #D789                                       Status: ⏱️ Voting Open │
├────────────────────────────────────────────────────────────────────────────┤
│ Trade: #T12345 | Amount: 1,000 USDT (₹83,500)                             │
│ Created: 6 hours ago | Voting ends: 18 hours remaining                     │
│                                                                            │
│ Claim: Buyer sent payment, seller not confirming receipt                  │
│                                                                            │
│ Current Votes:                                                             │
│ Release to Buyer:  ████████████████████░░░░░ 68% (34 votes)               │
│ Release to Seller: ████████░░░░░░░░░░░░░░░░ 32% (16 votes)               │
│                                                                            │
│                                                [View Details & Vote →]     │
└────────────────────────────────────────────────────────────────────────────┘

[Previous Disputes - Resolved]
...
```

### Dispute Detail View

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [←] Back to Disputes                      Dispute #D789 | ⏱️ 18h to vote   │
└────────────────────────────────────────────────────────────────────────────┘

Trade Details: #T12345 | 1,000 USDT @ ₹83.50 = ₹83,500

┌──────────────────────────┬─────────────────────────────────────────────────┐
│ Timeline                 │ Evidence                                        │
│ ────────                 │ ────────                                        │
│                          │                                                 │
│ ● Trade created          │ Buyer's Submission                              │
│   Jan 10, 10:30 AM       │ ┌─────────────────────────────────────────────┐ │
│                          │ │ Payment Screenshot:                         │ │
│ ● Buyer accepted         │ │ [View Image - 300x400px thumbnail]          │ │
│   10:30 AM               │ │ Click to enlarge                            │ │
│                          │ │                                             │ │
│ ● Buyer marked payment   │ │ Transaction ID: UPI123456789                │ │
│   sent: 10:45 AM         │ │ Timestamp: Jan 10, 10:42 AM                 │ │
│                          │ │                                             │ │
│ ● Seller: Payment not    │ │ Statement:                                  │ │
│   received: 11:30 AM     │ │ "I sent ₹83,500 via UPI to seller123@paytm  │ │
│                          │ │  as instructed. Screenshot shows successful │ │
│ ● Dispute raised         │ │  transaction at 10:42 AM."                  │ │
│   12:00 PM               │ └─────────────────────────────────────────────┘ │
│                          │                                                 │
│                          │ Seller's Submission                             │
│                          │ ┌─────────────────────────────────────────────┐ │
│                          │ │ Bank Statement:                             │ │
│                          │ │ [View PDF]                                  │ │
│                          │ │                                             │ │
│                          │ │ Statement:                                  │ │
│                          │ │ "I have not received any payment in my      │ │
│                          │ │  account. The UPI ID in buyer's screenshot  │ │
│                          │ │  (seller123@paytm) doesn't match my actual  │ │
│                          │ │  UPI (seller321@paytm). Buyer sent to wrong │ │
│                          │ │  account."                                  │ │
│                          │ └─────────────────────────────────────────────┘ │
│                          │                                                 │
│                          │ Chat History                                    │
│                          │ [View Full Conversation - 23 messages]          │
│                          │                                                 │
└──────────────────────────┴─────────────────────────────────────────────────┘

Current Voting Results
Release to Buyer:  ████████████████████░░░░░ 68% (34 votes)
Release to Seller: ████████░░░░░░░░░░░░░░░░ 32% (16 votes)

┌────────────────────────────────────────────────────────────────────────────┐
│ Your Vote                                                                  │
│                                                                            │
│ ○ Release 1,000 USDT to Buyer                                              │
│   Buyer provided valid proof of payment.                                   │
│                                                                            │
│ ○ Release 1,000 USDT to Seller                                             │
│   Seller didn't receive payment, buyer error.                              │
│                                                                            │
│ ○ Split 50/50 (500 USDT each)                                              │
│   Both parties partially at fault.                                         │
│                                                                            │
│ Reasoning (optional, but encouraged):                                      │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │ The UPI IDs don't match. Buyer sent to wrong account due to...        │ │
│ │                                                                        │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│                                          [Cancel] [Submit Vote →]          │
└────────────────────────────────────────────────────────────────────────────┘
```

**Features:**
- Clear timeline visualization
- Image/document viewers
- Vote with reasoning
- Real-time vote counts
- On-chain transaction for vote

---

## 9. Responsive Component Examples

### Offer Card - All Breakpoints

**Desktop (>1024px):**
```
┌───────────────────────────────────────────────────────────────┐
│ [Avatar] SellerName ⭐⭐⭐⭐⭐ 47 trades    Last active: 5 min │
│                                                               │
│ Price: ₹83.50 per USDT          Available: 1,200 USDT        │
│                                  Total: ₹1,00,200            │
│                                                               │
│ Payment: [UPI] [IMPS] [Bank Transfer]                        │
│ Limits: ₹1,000 - ₹50,000        Time: 30 minutes             │
│                                                               │
│                                         [Buy USDT →]          │
└───────────────────────────────────────────────────────────────┘
```

**Tablet (768px - 1023px):**
```
┌─────────────────────────────────────────────┐
│ [Avatar] SellerName ⭐⭐⭐⭐⭐               │
│ 47 trades • Last active: 5 min              │
│                                             │
│ Price: ₹83.50/USDT                          │
│ Available: 1,200 USDT (₹1,00,200)           │
│                                             │
│ Payment: [UPI] [IMPS] [Bank]                │
│ Limits: ₹1,000 - ₹50,000 • 30 min           │
│                                             │
│ [Buy USDT →]                                │
└─────────────────────────────────────────────┘
```

**Mobile (<768px):**
```
┌──────────────────────────────────┐
│ [Avatar] SellerName ⭐⭐⭐⭐⭐     │
│ 47 trades • 5 min ago            │
│                                  │
│ ₹83.50/USDT                      │
│ 1,200 USDT available             │
│                                  │
│ [UPI][IMPS][Bank]                │
│ ₹1K - ₹50K • 30 min              │
│                                  │
│ [Buy USDT →]                     │
└──────────────────────────────────┘
```

---

## Summary

These wireframes demonstrate:

1. **Clear Information Hierarchy**: Most important info prominent
2. **Responsive Layouts**: Graceful degradation across devices
3. **Consistent Patterns**: Same components used throughout
4. **Action-Oriented**: CTAs clear and accessible
5. **Progressive Disclosure**: Details revealed as needed
6. **Trust Indicators**: Reputation, status, blockchain links visible
7. **Real-Time Updates**: Timers, status badges, live data
8. **Accessibility**: Large tap targets, clear labels, keyboard nav

### Implementation Notes for Developers

- Use CSS Grid for 2-column layouts (details + instructions)
- Flexbox for card internals and navigation
- CSS custom properties for theming (already defined in DESIGN_SYSTEM.md)
- React Router for page navigation
- Web3Modal or similar for wallet connections
- WebSocket or polling for real-time trade updates
- Optimistic UI updates for better perceived performance
- Lazy loading for images and heavy components
- Skeleton screens for loading states

The wireframes provide pixel-perfect guidance while remaining flexible for implementation details. All measurements, colors, and spacing reference the design system tokens.

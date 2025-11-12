# P2P Crypto Exchange - Design System

## 🎨 Design Philosophy

This design system is built for a **decentralized P2P crypto exchange** focused on INR/USDT trading on Binance Smart Chain. Our design principles prioritize:

- **Trust & Transparency**: Clear visual hierarchy and status indicators build user confidence
- **Simplicity**: Minimize cognitive load for financial transactions
- **Decentralization**: UI clearly communicates blockchain interactions and peer relationships
- **Accessibility**: Inclusive design for diverse users and contexts
- **Responsiveness**: Seamless experience across desktop, tablet, and mobile devices

---

## 🎨 Visual Identity

### Color Palette

#### Primary Colors
```css
--primary-blue-900: #0A2463;      /* Deep trust blue - headers, CTAs */
--primary-blue-700: #1E3A8A;      /* Primary actions */
--primary-blue-500: #3B82F6;      /* Links, active states */
--primary-blue-300: #93C5FD;      /* Hover states */
--primary-blue-100: #DBEAFE;      /* Backgrounds, highlights */
```

**Design Decision**: Blue conveys trust, security, and professionalism—essential for financial applications.

#### Secondary Colors
```css
--success-green-700: #15803D;     /* Completed trades, confirmations */
--success-green-500: #22C55E;     /* Success states */
--success-green-100: #DCFCE7;     /* Success backgrounds */

--warning-amber-700: #B45309;     /* Pending actions */
--warning-amber-500: #F59E0B;     /* Warning states */
--warning-amber-100: #FEF3C7;     /* Warning backgrounds */

--error-red-700: #B91C1C;         /* Disputes, errors */
--error-red-500: #EF4444;         /* Error states */
--error-red-100: #FEE2E2;         /* Error backgrounds */
```

#### Neutral Colors
```css
--neutral-900: #111827;           /* Primary text */
--neutral-700: #374151;           /* Secondary text */
--neutral-500: #6B7280;           /* Tertiary text, disabled */
--neutral-300: #D1D5DB;           /* Borders, dividers */
--neutral-100: #F3F4F6;           /* Backgrounds */
--neutral-50: #F9FAFB;            /* Page backgrounds */
--white: #FFFFFF;                 /* Cards, surfaces */
```

#### Accent Colors
```css
--crypto-gold: #F7931A;           /* Crypto highlights (Bitcoin orange) */
--bsc-yellow: #F3BA2F;            /* BSC network indicator */
--usdt-green: #26A17B;            /* USDT branding */
```

### Typography

#### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

**Design Decision**: Inter provides excellent readability at all sizes, with geometric clarity perfect for financial data. Monospace fonts ensure proper alignment of addresses and transaction hashes.

#### Type Scale
```css
/* Headings */
--text-5xl: 3rem;      /* 48px - Page titles */
--text-4xl: 2.25rem;   /* 36px - Section headers */
--text-3xl: 1.875rem;  /* 30px - Card headers */
--text-2xl: 1.5rem;    /* 24px - Subsections */
--text-xl: 1.25rem;    /* 20px - Large labels */

/* Body */
--text-lg: 1.125rem;   /* 18px - Emphasized body */
--text-base: 1rem;     /* 16px - Default body */
--text-sm: 0.875rem;   /* 14px - Secondary info */
--text-xs: 0.75rem;    /* 12px - Captions, labels */
```

#### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

#### Line Heights
```css
--leading-tight: 1.25;    /* Headings */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.75;  /* Large paragraphs */
```

### Spacing Scale

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

### Border Radius

```css
--radius-sm: 0.25rem;   /* 4px - Small elements */
--radius-md: 0.5rem;    /* 8px - Buttons, inputs */
--radius-lg: 0.75rem;   /* 12px - Cards */
--radius-xl: 1rem;      /* 16px - Modal dialogs */
--radius-full: 9999px;  /* Pills, avatars */
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3);  /* For active states */
```

---

## 🧱 Component Library

### Buttons

#### Primary Button
```jsx
<Button variant="primary" size="lg">
  Connect Wallet
</Button>
```

**Specs:**
- Background: `--primary-blue-700`
- Text: `--white`, `--font-medium`
- Padding: `--space-3` (vertical), `--space-6` (horizontal)
- Border Radius: `--radius-md`
- Hover: `--primary-blue-900`, scale(1.02)
- Active: scale(0.98)
- Transition: all 150ms ease
- Min-width: 120px
- Height: 48px (lg), 40px (md), 32px (sm)

**Design Decision**: Large touch targets (48px) ensure mobile accessibility. Subtle scale animations provide tactile feedback.

#### Secondary Button
- Background: transparent
- Border: 2px solid `--primary-blue-700`
- Text: `--primary-blue-700`
- Hover: Background `--primary-blue-100`

#### Success Button
- Background: `--success-green-700`
- Used for: Confirm Payment, Complete Trade
- Hover: `--success-green-900`

#### Danger Button
- Background: `--error-red-700`
- Used for: Cancel Order, Raise Dispute
- Hover: `--error-red-900`

#### Ghost Button
- Background: transparent
- Text: `--neutral-700`
- Hover: Background `--neutral-100`

### Input Fields

#### Text Input
```jsx
<Input
  label="USDT Amount"
  placeholder="Enter amount"
  type="number"
  helper="Minimum 10 USDT"
/>
```

**Specs:**
- Height: 48px
- Padding: `--space-3` (vertical), `--space-4` (horizontal)
- Border: 1px solid `--neutral-300`
- Border Radius: `--radius-md`
- Font: `--text-base`, `--font-regular`
- Focus: Border `--primary-blue-500`, Shadow `--shadow-glow`
- Label: `--text-sm`, `--font-medium`, `--neutral-700`
- Helper Text: `--text-xs`, `--neutral-500`
- Error State: Border `--error-red-500`, Helper text `--error-red-700`

**Design Decision**: High contrast borders and large input areas support users with visual impairments and touch interfaces.

#### Search Input
- Prefix icon: Magnifying glass
- Background: `--neutral-50`
- Border: none
- Placeholder: "Search offers by price, amount, or payment method..."

### Cards

#### Base Card
```jsx
<Card elevation="md" padding="lg">
  {/* Content */}
</Card>
```

**Specs:**
- Background: `--white`
- Border: 1px solid `--neutral-200`
- Border Radius: `--radius-lg`
- Padding: `--space-6` (lg), `--space-4` (md), `--space-3` (sm)
- Shadow: `--shadow-md`
- Hover: Shadow `--shadow-lg`, translate Y -2px
- Transition: all 200ms ease

#### Offer Card
**Special Features:**
- Seller avatar and reputation badge (top)
- Price highlight with large, bold text
- Payment methods as chips
- Action button (bottom)
- Status indicator (colored left border: 4px)

**Design Decision**: Cards are the primary content container. Elevation changes on hover provide depth and interactivity cues.

### Navigation

#### Top Navigation Bar
```
[Logo] [Dashboard] [Browse] [My Orders] [Create Offer] ... [Network: BSC] [0x1234...5678] [Disconnect]
```

**Specs:**
- Height: 72px
- Background: `--white`
- Border Bottom: 1px solid `--neutral-200`
- Shadow: `--shadow-sm`
- Logo: 40px height
- Nav Links: `--text-base`, `--font-medium`, `--neutral-700`
- Active Link: `--primary-blue-700`, 3px bottom border
- Wallet Address: Monospace font, truncated with tooltip
- Network Indicator: Chip with BSC logo, `--bsc-yellow` background

**Design Decision**: Fixed top navigation ensures critical functions (wallet status, network) are always visible. Truncated wallet address with tooltip balances space and information.

#### Side Navigation (Desktop)
- Width: 240px
- Icons + Text labels
- Collapsible on mobile
- Active state: Background `--primary-blue-100`, Left border 4px `--primary-blue-700`

### Status Indicators

#### Trade Status Badge
```jsx
<StatusBadge status="awaiting_payment" />
```

**States:**
1. **Awaiting Payment**: Amber background, Clock icon
2. **Payment Sent**: Blue background, Arrow icon
3. **Payment Confirmed**: Green background, Check icon
4. **In Dispute**: Red background, Alert icon
5. **Completed**: Green background, Double check icon
6. **Cancelled**: Gray background, X icon

**Specs:**
- Height: 32px
- Padding: `--space-2` (vertical), `--space-3` (horizontal)
- Border Radius: `--radius-full`
- Font: `--text-sm`, `--font-medium`
- Icon: 16px, aligned left

**Design Decision**: Color-coded badges with icons provide immediate visual status recognition. Full border radius creates friendly, approachable feel.

### Progress Stepper

```
[1. Accept Offer] ━━━> [2. Confirm Payment] ━━━> [3. Complete Trade]
     (Active)              (Pending)                 (Pending)
```

**Specs:**
- Step circles: 40px diameter
- Active: Background `--primary-blue-700`, White text, White checkmark
- Completed: Background `--success-green-700`
- Pending: Border 2px `--neutral-300`, Gray text
- Connector line: 2px height, `--neutral-300` (pending), `--primary-blue-700` (completed)

**Design Decision**: Linear stepper shows trade progress clearly, reducing user anxiety about transaction state.

### Modals & Dialogs

#### Modal Container
```jsx
<Modal
  title="Confirm Payment"
  size="md"
  onClose={handleClose}
>
  {/* Content */}
</Modal>
```

**Specs:**
- Sizes: sm (400px), md (600px), lg (800px), xl (1000px)
- Background: `--white`
- Border Radius: `--radius-xl`
- Shadow: `--shadow-xl`
- Backdrop: rgba(0, 0, 0, 0.5), blur 4px
- Title: `--text-2xl`, `--font-semibold`
- Close button: Top right, 40px tap target
- Padding: `--space-8`
- Animation: Fade + scale from 0.95 to 1

**Design Decision**: Large modals with backdrop blur focus attention. Generous padding and tap targets ensure accessibility.

### Toast Notifications

```jsx
<Toast variant="success" position="top-right">
  Trade completed successfully!
</Toast>
```

**Specs:**
- Width: Max 400px
- Padding: `--space-4`
- Border Radius: `--radius-md`
- Shadow: `--shadow-lg`
- Position: Top-right, `--space-6` from edges
- Duration: 5 seconds (auto-dismiss)
- Icon: 24px, aligned left
- Close button: Optional, 32px tap target
- Variants: success, error, warning, info

**Design Decision**: Top-right position doesn't obscure main content. Auto-dismiss with option to manually close provides flexibility.

### Data Tables

#### Offer Table
```
| Seller | Price (INR) | Amount (USDT) | Payment Methods | Limits | Actions |
```

**Specs:**
- Header: `--text-sm`, `--font-semibold`, `--neutral-700`, Background `--neutral-50`
- Row: `--text-base`, Padding `--space-4` vertical
- Hover: Background `--neutral-50`
- Borders: 1px solid `--neutral-200` (horizontal only)
- Alternating rows: Optional, Background `--neutral-50`
- Sortable columns: Arrow icon, hover cursor pointer
- Responsive: Stack cells vertically on mobile

**Design Decision**: Horizontal-only borders reduce visual clutter. Generous row padding improves scannability.

### Forms

#### Multi-Step Form
Used for Create Offer flow.

**Specs:**
- Progress indicator at top
- Single column layout, max-width 600px
- Field groups with subtle backgrounds `--neutral-50`
- Validation: Real-time with debounce
- Error messages: Below field, `--error-red-700`
- Navigation: Back, Next, Submit buttons at bottom
- Auto-save: Draft indicator, periodic save

**Design Decision**: Single column reduces eye movement. Auto-save prevents data loss during complex form completion.

### Avatars & Identicons

```jsx
<Avatar
  address="0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
  size="lg"
  showAddress={true}
/>
```

**Specs:**
- Sizes: xs (24px), sm (32px), md (40px), lg (56px), xl (80px)
- Shape: Circle
- Generated: Jazzicon or Blockies based on wallet address
- Border: 2px solid `--white`, Shadow `--shadow-md`
- Address display: Truncated, monospace, below avatar
- Reputation badge: Overlaid top-right, 16px

**Design Decision**: Deterministic identicons provide visual identity for wallet addresses. Consistent styling reinforces trust.

### Charts & Visualizations

#### Price Chart
- Library: Lightweight-charts or Chart.js
- Colors: `--primary-blue-500` (line), `--success-green-500` (up), `--error-red-500` (down)
- Background: `--white`
- Grid: `--neutral-200`, subtle
- Tooltips: Dark background, white text
- Responsive: Touch-enabled zoom/pan on mobile

#### Stats Cards
```jsx
<StatCard
  label="Total Volume (24h)"
  value="₹2,45,678"
  change="+12.5%"
  trend="up"
/>
```

**Specs:**
- Value: `--text-3xl`, `--font-bold`
- Label: `--text-sm`, `--neutral-700`
- Change: `--text-sm`, Green/Red based on trend
- Icon: Trend arrow, 16px
- Background: `--white`, Card styling

---

## 📱 Responsive Design

### Breakpoints
```css
--breakpoint-sm: 640px;    /* Mobile */
--breakpoint-md: 768px;    /* Tablet */
--breakpoint-lg: 1024px;   /* Desktop */
--breakpoint-xl: 1280px;   /* Large desktop */
```

### Layout Patterns

#### Desktop (≥1024px)
- Side navigation: 240px fixed left
- Content area: Remaining width, max 1200px centered
- Cards: Grid 2-3 columns
- Modals: Centered, size-controlled

#### Tablet (768px - 1023px)
- Top navigation only (hamburger menu)
- Content: Full width, max 900px centered
- Cards: Grid 2 columns
- Tables: Horizontal scroll if needed

#### Mobile (<768px)
- Bottom navigation bar (Dashboard, Browse, Orders, Profile)
- Content: Full width, single column
- Cards: Stack vertically
- Tables: Card-based layout (each row becomes card)
- Modals: Full screen on very small devices

**Design Decision**: Mobile-first approach with progressive enhancement. Bottom navigation on mobile optimizes thumb reach.

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

#### Color Contrast
- Text on background: Minimum 4.5:1 ratio
- Large text (≥18pt): Minimum 3:1 ratio
- Interactive elements: Minimum 3:1 against background
- Status indicators: Never rely on color alone (use icons + text)

#### Keyboard Navigation
- All interactive elements: Tab-accessible
- Focus indicators: 2px outline, `--primary-blue-500`, offset 2px
- Skip links: "Skip to main content" hidden until focused
- Modal traps: Focus locked within modal, Esc to close
- Keyboard shortcuts: Documented, non-conflicting

#### Screen Reader Support
- Semantic HTML: Proper heading hierarchy (h1 → h6)
- ARIA labels: All icon buttons, complex interactions
- ARIA live regions: Trade status updates, notifications
- Alt text: All meaningful images, decorative marked as ""
- Form labels: Explicitly associated with inputs

#### Touch Targets
- Minimum size: 44x44px (WCAG 2.5.5)
- Spacing: Minimum 8px between targets
- Gesture alternatives: All swipe/drag actions have button alternatives

#### Motion & Animation
- Respects `prefers-reduced-motion` media query
- Essential animations only (status changes)
- No auto-playing carousels
- Pause/stop controls for any continuous motion

**Design Decision**: Accessibility isn't an add-on—it's foundational. Users with disabilities include our target audience, and accessibility improves experience for everyone.

---

## 🎭 Animations & Transitions

### Principles
- **Purposeful**: Only animate to provide feedback or guide attention
- **Subtle**: Gentle, professional motion (no bouncing, spinning)
- **Fast**: 150-300ms for most interactions
- **Smooth**: Easing functions (ease-out for entrances, ease-in for exits)

### Common Animations

#### Button Press
```css
.button:active {
  transform: scale(0.98);
  transition: transform 100ms ease-in;
}
```

#### Card Hover
```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  transition: all 200ms ease-out;
}
```

#### Modal Enter/Exit
```css
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
}
.modal-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 250ms ease-out;
}
```

#### Loading States
- Skeleton screens: Pulse animation, `--neutral-200` to `--neutral-100`
- Spinners: Rotating circle, `--primary-blue-500`, 1s linear infinite
- Progress bars: Animated width, smooth transition

**Design Decision**: Subtle animations make the interface feel responsive and alive without distracting from financial tasks.

---

## 🔒 Trust & Security Visual Language

### Security Indicators

#### Wallet Connection Status
- **Connected**: Green dot + "Connected" label + abbreviated address
- **Disconnected**: Red dot + "Connect Wallet" button
- **Wrong Network**: Amber warning + "Switch to BSC" button
- Position: Top-right, always visible

#### Transaction Confirmations
- Blockchain confirmations: Progress indicator "2/12 confirmations"
- Estimated time remaining: "~3 minutes"
- Transaction hash: Monospace, truncated, clickable (opens BSCScan)

#### User Reputation
```jsx
<ReputationBadge
  trades={47}
  successRate={98.5}
  verified={true}
/>
```

- Star rating: 1-5 stars, filled `--crypto-gold`
- Trade count: "47 trades"
- Success rate: "98.5% completion"
- Verified badge: Blue checkmark if identity verified
- Position: Next to username/avatar

**Design Decision**: Transparent reputation metrics build trust in peer-to-peer environment. Direct blockchain links provide verifiability.

### Escrow Visualization

```
[Buyer] --USDT--> [Smart Contract] --USDT--> [Seller]
                       (Escrow)
                          ↑
                   Funds locked until
                   payment confirmed
```

- Visual diagram in onboarding and trade flow
- Color: `--primary-blue-500` for locked funds
- Icons: Lock icon for escrow state
- Tooltip: Explains smart contract address, funds safety

**Design Decision**: Visual escrow representation demystifies smart contract functionality, increasing user confidence.

---

## 🌐 Internationalization (i18n)

### Prepared for:
- Right-to-left (RTL) layout support
- Number formatting: Indian numbering system (1,00,000 vs 100,000)
- Currency: ₹ symbol, proper placement
- Date/time: Locale-specific formats
- Text expansion: Allow 30% expansion for translations

**Design Decision**: Though initially English/Hindi, design accommodates future languages without layout breaks.

---

## 📊 Data Visualization Patterns

### Trading Activity
- Line chart: Price trends over time
- Volume bars: Trading volume by time period
- Heat map: Active trading hours

### Personal Stats
- Donut chart: Trade distribution (buy/sell)
- Progress rings: Completion rates, reputation score
- Mini sparklines: Quick trend indicators

### Network Status
- Live indicator: BSC network status (green/amber/red)
- Gas price: Current Gwei, visual indicator (low/medium/high)
- Block height: Latest block number, updating

**Design Decision**: Data viz provides at-a-glance insights without requiring deep analysis, supporting quick decision-making.

---

## 🎯 Component Composition Example

### Complete Offer Card

```jsx
<Card className="offer-card" elevation="md">
  <div className="offer-card__header">
    <Avatar address={seller.address} size="md" />
    <div className="offer-card__seller-info">
      <h3>{seller.name}</h3>
      <ReputationBadge {...seller.reputation} />
    </div>
    <StatusBadge status={offer.status} />
  </div>

  <div className="offer-card__body">
    <div className="offer-card__price">
      <span className="label">Price</span>
      <span className="value">₹{offer.price}</span>
      <span className="subtext">per USDT</span>
    </div>

    <div className="offer-card__amount">
      <span className="label">Available</span>
      <span className="value">{offer.amount} USDT</span>
      <span className="subtext">₹{offer.amount * offer.price} total</span>
    </div>

    <div className="offer-card__payment-methods">
      <span className="label">Payment Methods</span>
      <div className="chips">
        {offer.paymentMethods.map(method => (
          <Chip key={method} label={method} size="sm" />
        ))}
      </div>
    </div>

    <div className="offer-card__limits">
      <span className="label">Limits</span>
      <span className="value">₹{offer.minLimit} - ₹{offer.maxLimit}</span>
    </div>
  </div>

  <div className="offer-card__footer">
    <Button variant="primary" fullWidth onClick={handleAccept}>
      {offer.type === 'sell' ? 'Buy USDT' : 'Sell USDT'}
    </Button>
  </div>
</Card>
```

**Design Decision**: Hierarchical card structure with clear header/body/footer promotes scannability. All critical information visible without interaction.

---

## 🎨 Dark Mode (Future Consideration)

While not in initial scope, design system prepared for dark mode:

```css
/* Dark mode color overrides */
[data-theme="dark"] {
  --neutral-900: #F9FAFB;  /* Inverted for text */
  --neutral-50: #111827;    /* Inverted for backgrounds */
  --white: #1F2937;         /* Dark surface */
  /* Adjust other colors for contrast */
}
```

**Design Decision**: Design tokens structure enables theming. Semantic naming (--primary, --surface) rather than color names (--blue-500) facilitates theme switching.

---

## 📐 Grid System

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(12, 1fr);
}

/* Example usage */
.offer-grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
```

**Design Decision**: 12-column grid provides flexibility. Auto-fill with minmax creates responsive layouts without media queries.

---

## 🎪 Loading States

### Skeleton Screens
- Match actual content layout
- Pulse animation: 1.5s ease-in-out
- Colors: `--neutral-200` → `--neutral-100`
- Used for: Offer lists, trade history, user profiles

### Spinners
- Size: 24px (inline), 48px (page)
- Color: `--primary-blue-500`
- Used for: Button loading, form submissions

### Progress Bars
- Height: 4px
- Indeterminate: Animated slide
- Determinate: Smooth width transition
- Used for: File uploads, multi-step processes

**Design Decision**: Skeleton screens reduce perceived loading time by showing structure immediately.

---

## 🧪 Interactive States

### Focus States
- All interactive elements: 2px outline `--primary-blue-500`, 2px offset
- Keyboard focus only: `:focus-visible` (not `:focus`)
- Never remove focus indicators

### Hover States
- Buttons: Darker background, subtle scale
- Links: Underline appears
- Cards: Elevation increase, subtle lift

### Active States
- Buttons: Scale down (0.98)
- Links: Color change
- Cards: Elevation decrease

### Disabled States
- Opacity: 0.5
- Cursor: not-allowed
- Clearly communicate why disabled (helper text)

### Loading States
- Button: Spinner replaces text, disabled
- Form: Overlay with spinner
- Section: Skeleton or spinner based on content type

**Design Decision**: Consistent interactive states across all components provide predictable UX.

---

## Summary

This design system provides a **comprehensive foundation** for building a trust-inspiring, accessible, and user-friendly decentralized P2P crypto exchange. Key highlights:

1. **Trust-first color palette**: Blues and greens convey security and success
2. **Accessibility baked in**: WCAG 2.1 AA compliance, keyboard nav, screen readers
3. **Comprehensive components**: All UI building blocks specified
4. **Responsive by default**: Mobile-first with progressive enhancement
5. **Blockchain-aware**: Special components for wallet states, transactions, reputation
6. **Developer-ready**: CSS variables, clear specs, implementation guidance

Next steps: See `USER_FLOWS.md` for detailed interaction flows and `WIREFRAMES.md` for visual layouts.

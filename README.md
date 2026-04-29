# RenewalIQ

**Real-time license data for B2B sales teams**

RenewalIQ is a government-fed license database that helps B2B sales reps find professionals whose licenses are renewing—before their competitors know they exist.

## What It Does

- **Daily-updated license data** from all 50 state licensing boards
- **Renewal timeline visualization** showing 30/60/90 day renewal windows
- **Advanced search & filtering** by profession, state, specialty, and renewal date
- **CSV export & CRM sync** (Salesforce + HubSpot on Professional tier)
- **Renewal alerts** for perfectly-timed outreach

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** shadcn/ui + Tailwind CSS (dark mode default)
- **Database:** PostgreSQL (shared instance) + Drizzle ORM
- **Auth:** NextAuth.js (email/password + Google OAuth)
- **Payments:** Stripe (test mode for MVP)
- **Deploy:** Coolify

## Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL database
- Google OAuth credentials
- Stripe account (test mode)

### Installation

```bash
# Clone the repo
git clone https://github.com/ashtalksai/renewal-signal.git
cd renewal-signal

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your credentials
# - DATABASE_URL
# - NEXTAUTH_SECRET (generate with: openssl rand -base64 32)
# - GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET
# - STRIPE_SECRET_KEY

# Run migrations
npm run db:migrate

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Database Schema

### Core Tables

- `users` — User accounts (NextAuth)
- `licenses` — License records (profession, state, renewal date, status)
- `subscriptions` — Stripe subscriptions (tier, status, billing period)
- `searches` — Search analytics (query, filters, results count)
- `saved_filters` — User-saved filter presets

Run `npm run db:migrate` to create tables.

## API Routes

### Authentication

- `POST /api/auth/signin` — Sign in
- `POST /api/auth/signout` — Sign out
- `GET /api/auth/session` — Get current session

### Licenses (protected)

- `GET /api/licenses` — Search licenses (query params: state, profession, renewalWindow, status)
- `GET /api/licenses/[id]` — Get license details
- `POST /api/licenses/export` — Export filtered results to CSV

### Subscriptions (protected)

- `GET /api/subscription` — Get current user's subscription
- `POST /api/subscription/checkout` — Create Stripe checkout session
- `POST /api/subscription/webhook` — Stripe webhook handler

## Pricing Tiers

| Tier | Price | Searches | States | CRM Sync | Renewal Alerts |
|------|-------|----------|--------|----------|----------------|
| Explorer | $99/mo | 100/mo | 3 | ❌ | ❌ |
| Professional | $499/mo | Unlimited | 50 | ✅ | ✅ |
| Enterprise | $999/mo | Unlimited | 50 | Custom | ✅ + SMS |

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Coolify deployment instructions.

## License

© 2026 RenewalIQ. All rights reserved.

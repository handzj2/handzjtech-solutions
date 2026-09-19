# CONTENT CONTRACT

## Verified Content (usable now)
- Company name: HandzJ Tech Solutions
- Tagline: We Build Brands. We Power Systems. We Drive Growth.
- Phone: 0781909507 / display 0781 909 507
- WhatsApp: 0757632884 / display 0757 632 884
- Email: handzj2@gmail.com
- Service model: Phone / WhatsApp / Email / Remote / Arranged on-site
- Primary market: Uganda (services potentially extending beyond Uganda)
- Product names only (no detailed feature claims): Bingo Vintage, HZ SENTE, HZ Finance, HZ POS
- Product: HandzJ Digital Receipts — "Create professional digital receipts that customers can verify online." Core concept: Record · Issue · Verify. Live, separately-deployed application at https://recipting.vercel.app/ (owner-supplied, integration directive 2026-09-19)
- Client project name only: Busia Agro
- Automation categories (high level only): Excel/data automation, Collections automation, Reconciliation, Browser tools/extensions, Custom business automation

## Presentational Fields (approved, Increment 2)
- `category` on each product entry in `lib/content.ts` (e.g. "Lending", "Business management") — a presentational grouping label for card display, not a new factual claim about the product.
- `description` on each automation category in `lib/content.ts` — a generic, dictionary-level definition of the term itself (e.g. what "reconciliation" means), not a claim about work performed or results delivered.
- `appUrl` on a product entry in `lib/content.ts` (Digital Receipts integration, 2026-09-19) — the verified live URL of that product's own, separately-deployed application. Only set for products that are actually live and self-serve; renders as a direct external CTA on `/products` instead of the demo-request CTA. Must never be invented — set only from an owner-confirmed deployment URL.

## PENDING (must not be invented)
- Physical address / office location / map coordinates
- Customer statistics, revenue figures, client counts
- Testimonials, certifications, awards, ratings/reviews
- Detailed product features and screenshots
- Official logo, favicon, OG image, brand palette, typography guide
- Additional email addresses beyond handzj2@gmail.com

## Rule
Any page or component that would require PENDING content must either omit that content or display a clearly marked placeholder state — never a fabricated value.

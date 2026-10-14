# ROUTE CONTRACT

## Primary Routes (approved)
- /
- /solutions
- /products
- /projects
- /about
- /contact
- /privacy-policy
- /terms-of-service
- /cookie-policy
- /disclaimer
- /accessibility
- /404 (not-found)

## Conditional Detail Routes (NOT built in Increment 1)
- /products/bingo-vintage
- /products/hz-sente
- /products/hz-finance
- /products/hz-pos
- /projects/busia-agro
- /projects/automation

These are created only when verified content is available and the route is explicitly approved.

**HandzJ Digital Receipts is not a conditional detail route.** It is presented as a
product entry on `/products` (and the `/` and `/solutions` product grids) that links
directly to its own, separately-deployed application at https://recipting.vercel.app/
(external link, `target="_blank"`). No `/products/digital-receipts` route exists or is
planned — the product already has a live application, so a HandzJ Tech-hosted detail
page would duplicate rather than serve it. See DECISIONS.md, 2026-09-19.
## Rules
- No city doorway URLs.
- Legal pages are linked from the footer, not primary navigation.
- "Request a Demo" in primary navigation routes to /contact (no separate demo backend in V1).

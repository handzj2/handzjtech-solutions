# COMPONENT CONTRACT

## Increment 1 Primitives
- **Container** — max-width content wrapper (~1200–1280px), responsive horizontal padding.
- **Button** — primary/secondary variants, accepts internal link, external link, or button semantics; visible focus state; ~44px touch target.
- **SectionHeading** — eyebrow-free heading block (kicker optional only if content is genuinely sequential/labelled), one H1 per page enforced at page level, not component level.

## Global Structure
- **Header** — logo/wordmark (text-based; no invented logo asset), primary navigation, CTA button.
- **MobileNavigation** — client component, disclosure pattern, keyboard-operable, closes on route change/Escape.
- **Footer** — company name, verified contact channels, legal page links, copyright.
- **RootLayout** — wraps SkipLink, Header, page content (`<main id="main-content">`), Footer.
- **SkipLink** — visually hidden until focused, jumps to `#main-content`.
- **NotFound (404)** — branded, on-tone messaging, links back to Home and Contact.

## Rules
- Build reusable components only where justified by actual reuse in Increment 1 (no speculative abstraction).
- No component may render invented content (addresses, stats, testimonials, logos).
- All interactive components must be keyboard-operable and expose visible focus states.

# ARCHITECTURE

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Structure (approved)
```
app/
  layout.tsx            root layout (Header, Footer, SkipLink)
  globals.css            design tokens + Tailwind layers
  page.tsx                Home
  solutions/page.tsx
  products/page.tsx
  projects/page.tsx
  about/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  terms-of-service/page.tsx
  cookie-policy/page.tsx
  disclaimer/page.tsx
  accessibility/page.tsx
  not-found.tsx
components/
  Container.tsx
  Button.tsx
  SectionHeading.tsx
  Header.tsx
  MobileNav.tsx
  Footer.tsx
  SkipLink.tsx
lib/
  content.ts              single source of verified site content (contact, nav, copy)
```

## Principles
- Server Components by default; Client Components only where interactivity is required (e.g. MobileNav toggle).
- No premature abstraction — only the primitives named in COMPONENT_CONTRACT.md are built in Increment 1.
- Verified content lives in one place (`lib/content.ts`) so pages do not duplicate copy or contact details.
- Conditional detail routes (product/project) are not created until content is verified and the route is approved.

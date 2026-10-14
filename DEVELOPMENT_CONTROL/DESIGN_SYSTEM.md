# DESIGN SYSTEM

## Status
Candidate visual identity established in Phase 5 Increment 4.  
Official logo, favicon, OG image, and final client-signed brand guide remain PENDING.  
The palette below is the **authorized candidate** for implementation; it is not yet declared the final official HandzJ Tech brand palette.

## Candidate Palette (Increment 4)

| Role         | Hex       | Use                                              |
|--------------|-----------|--------------------------------------------------|
| Deep Ink     | `#101820` | Main dark sections, header/footer, strong text   |
| Graphite     | `#263238` | Secondary dark surfaces                          |
| Warm Ivory   | `#F7F5EF` | Main light background                            |
| Pure White   | `#FFFFFF` | Cards / content surfaces                         |
| Signal Green | `#16836A` | Primary brand / action colour (candidate)        |
| Deep Green   | `#0D5C4A` | Hover / pressed states                           |
| Amber Signal | `#D99A2B` | Small highlights, status accents only            |
| Mist         | `#E5E8E6` | Borders / dividers                               |

**Previous provisional teal `#0f766e` is retired.**

## Section Rhythm
The primary identity pattern is alternating light and dark sections:

```
LIGHT  (Warm Ivory → white content → Signal Green actions)
────────────
DARK   (Deep Ink → Graphite surfaces → green structural accents → tiny amber signals)
────────────
LIGHT
────────────
DARK
```

Not every section requires a card. Rhythm itself is part of the identity.

## Technical Motif — System Line
Extremely subtle structural motif used for visual association:

```
●───────────────●
       │
       └─────────●
```

Thin lines, small connection points, restrained grid/border relationships.  
Represents Brand → Systems → Automation → Growth without simulating real data diagrams.

## Typography
System UI font stack (no external font fetch). One family; weight and size variation for hierarchy.

## Layout
- Mobile-first.
- Tailwind default breakpoints.
- 4px spacing scale.
- Content container ~1200–1280px.
- Responsive grid: 1 → 2 → 3 columns as content requires.

## Interaction
- Visible keyboard focus on all interactive elements.
- Subtle hover states only; no heavy motion.
- `prefers-reduced-motion` respected.
- Touch targets ~44px minimum.

## Explicitly Avoided
- AI-tech teal / blue / purple palettes
- Neon gradients, glassmorphism, huge abstract blobs
- Tracked-out uppercase eyebrow labels on every heading
- Generic SaaS identical rounded cards with uniform shadow
- Government-site or generic-fintech aesthetics
- Fake dashboards, statistics, charts, or client logos

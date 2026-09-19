# MASTER DEVELOPMENT CONTROL WORKFLOW — V1

## Purpose
This document is the top-level control workflow for the HandzJ Tech website project. It governs how work is planned, executed, validated, and recorded across all phases.

## Governing Principles
1. Inspect before changing.
2. Preserve approved decisions.
3. Do not rewrite working implementation without justification.
4. Do not invent missing information.
5. Do not silently change architecture.
6. Work in phases.
7. Work in controlled increments.
8. Validate every increment.
9. Record material changes.
10. Stop at every required gate.
11. Never skip a failed validation.
12. Do not expand scope without authorization.

## Phase Structure
- Phase 0 — Repository + Development Control
- Phase 1 — Brand / Content Inventory
- Phase 2 — Legal / Privacy / Cookie / Accessibility
- Phase 3 — Information Architecture + SEO
- Phase 4 — Design System
- Phase 5 — Next.js Implementation (incremental)
- Phase 6+ — Reserved (content expansion, legal finalization, SEO activation, production release)

See PHASE_STATUS.md for current status of each phase.

## Increment Discipline
Each implementation increment must:
1. State its scope explicitly (what is in / out).
2. Be implemented only against approved contracts.
3. Be validated (install, typecheck, build, lint where configured).
4. Be reported using the standard stop-gate format:
   - FILES CREATED/CHANGED
   - VALIDATION RESULTS
   - CONTRACT DEVIATIONS
   - UNRESOLVED ITEMS
   - PHASE STATUS: PASS/BLOCKED
5. Stop and wait for authorization before the next increment.

## Change Control
Material changes to any contract require: identify affected contract → inspect existing state → make justified change → validate → record in CHANGE_LOG.md → record significant decisions in DECISIONS.md. No silent changes.

## Content Integrity
No invented address, coordinates, statistics, testimonials, certifications, awards, client counts, product features, screenshots, logos, domain emails, ratings, or reviews. Missing information is marked PENDING, never guessed.

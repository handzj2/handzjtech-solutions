# LE-1 — Measurement event definitions & capability-growth foundation

**Status:** LE-1 **ACCEPTED** (2026-09-14). Evidence/measurement period **IN PROGRESS**. Documentation only for analytics events — no analytics SDK installed. LE-2 **NOT AUTHORIZED**.

## Measurement objective (owner amendment)

LE-1 tests which problems, capabilities, products, solutions, and contact intents generate **qualified conversations** — not mere button clicks.

Illustrative future funnel (not live data):

```
visitors → interest by capability/intent → WhatsApp/email conversations
  → qualified opportunities → demos → customers
```

## Documented event points (for a future authorized analytics increment)

| Event | Meaning |
|-------|---------|
| CTA viewed | Context block visible (manual observation in LE-1) |
| CTA clicked | User activates contact path |
| WhatsApp clicked | `wa.me` with prefill opened |
| Email clicked | `mailto` with subject/body opened |
| Contact context opened | `/contact` with allowlisted query params |
| Product intent | intent=product or demo + product slug |
| Automation intent | intent=automation or assessment + capability |
| Project intent | intent=project + project slug |
| General intent | intent=general or bare /contact |

**LE-1 practice:** Owner/sales tag inbound messages by intent + subject from prefill; weekly qualitative review. No hidden tracking.

## Capability-growth foundation (process)

Aligns with `HANDZJ_LEAD_ENGINE_EXTENSION_SPEC_V2.md` and amendments:

1. Capability may exist internally without public offering.  
2. Commercial score prioritizes work; never sets evidence level or claim strength.  
3. Lifecycle: proposed → evidence review → classification → commercial review → content approval → implementation → validation → published → measured → expand/modify/retire.  
4. Classes: Solution | Product | Tool | Project | Service | Experiment.  
5. Public claims capped by evidence level.  
6. IA insertion by class slots — no architectural drift.

Current `products` / `automationCategories` / `projects` in `lib/content.ts` are **current verified inventory**, not a permanent ceiling. New items enter only via verified content + control docs + authorized increment.

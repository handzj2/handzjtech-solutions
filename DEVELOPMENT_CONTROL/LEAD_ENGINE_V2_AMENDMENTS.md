# LEAD ENGINE SPEC V2 — OWNER AMENDMENTS

**Date:** 2026-09-14  
**Status:** Accepted with amendments below.  
**Coding:** NOT authorized by this document.

Parent: `HANDZJ_LEAD_ENGINE_EXTENSION_SPEC_V2.md`  
Related: `PHASE1_FEATURE_DEFINITION_AND_TEST_SPEC.md`

---

## Amendment 1 — Capability vs Public Offering

**Rule:** A capability may exist internally without becoming a public product, service, or page.

- Internal existence (build, experiment, client delivery under NDA) does **not** obligate a marketing route, nav item, or public claim.
- Publication requires explicit progression through the capability lifecycle (validated → content approval → published).
- Experiments and internal tools default to **non-public** until reclassified and approved.

**Why:** Prevents pressure to expose unfinished or non-commercial work; keeps the site honest.

---

## Amendment 2 — Evidence-over-claims

**Rule:** Commercial opportunity score may determine **priority** of work. It must **never** determine evidence level or public claim strength.

| May influence | Must not influence |
|---------------|-------------------|
| Order of intake / implementation effort | Evidence level (E0–E5) |
| Whether to invest in a page or tool | Wording strength of public claims |
| Resource allocation | Whether outcomes may be stated |

**Why:** High commercial excitement must not inflate claims beyond proof.

---

## Amendment 3 — LE-1 measurement objective

**LE-1 is a test of:**

> Which problems, capabilities, products, solutions, and contact intents actually generate **qualified conversations**.

**LE-1 is not merely a test of:**

> Whether people clicked the buttons.

Illustrative (not real data) funnel for the eventual evidence loop:

```
100 visitors
   ↓
23 interested in automation
   ↓
8 WhatsApp conversations
   ↓
4 qualified opportunities
   ↓
2 demos
   ↓
1 paying customer
```

Phase 1 / LE-1 still installs **no analytics SDK**. Measurement is qualitative/manual at first (inbox/WhatsApp themes, intent tags in prefill, sales notes), with event definitions documented for a later authorized measurement increment.

**Why:** Aligns the commercial experiment with HandzJ’s real sales motion, not vanity clicks.

---

## Acceptance statement

**V2 = accepted, with these three explicit amendments.**  
Sequence remains:

```
V2 SPEC (+ amendments)
   ↓
Owner acceptance          ← current step complete for V2
   ↓
LE-1 implementation handoff
   ↓
Current-code audit
   ↓
Exact file/change map
   ↓
Implementation authorization   ← NOT YET
   ↓
Controlled implementation
   ↓
Automated validation
   ↓
Manual acceptance
   ↓
LE-1 live test
   ↓
Evidence review
   ↓
LE-2 decision
```


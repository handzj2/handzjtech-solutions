# HANDZJ TECH — LEAD ENGINE EXTENSION SPECIFICATION V2

**Status:** Planning / controlled specification only. **No application code.**  
**Supersedes:** Lead Engine Extension Specification V1 (directional approval retained; strategic correction applied).  
**Governing contracts:** All documents under `DEVELOPMENT_CONTROL/`, especially MASTER workflow, CONTENT_CONTRACT, ROUTE_CONTRACT, COMPONENT_CONTRACT, DESIGN_SYSTEM, PROJECT_SCOPE, PROJECT_BASELINE, CHANGE_CONTROL.

---

## 0. Strategic correction (V1 → V2)

### What was wrong with V1 framing

V1 correctly forbade inventing claims and correctly kept Lead Engine V1 thin (no CRM/backend by default).  
It was **too static** in commercial architecture: it treated the *current* verified product list, automation categories, and capabilities as if they defined the permanent shape of the business and the site.

HandzJ Tech is not only a fixed SaaS catalogue. It continuously discovers real business problems and turns them into software, automation, and tools. Development control must **control change, not prevent growth**.

### What V2 changes

| Area | V1 | V2 |
|------|----|----|
| Product / automation lists | Treated as fixed commercial architecture | **Current verified state only** — not the ceiling |
| Future capabilities | Implicit / ad hoc | **Evidence-driven capability-growth model** (intake → classify → evidence → score → publish → measure) |
| CONTENT_CONTRACT | Prevent unsupported claims | Still prevents unsupported claims; **explicitly allows future verified capabilities** via controlled intake |
| IA | Prefer zero new routes | Same bias toward minimal IA, but **explicit insertion rules** so growth does not cause architectural drift |
| Experiments | Not distinguished | **Experiment vs Production** gates |
| Tools | Evaluated as one-off ideas | **Tool qualification** + lifecycle |
| Feedback | Light | **Customer/market feedback loop** as a first-class input |
| Proof | Mentioned as “required before publish” | **Proof/evidence repository requirements** |

### What V2 does *not* change

- No implementation in this document  
- No invented business claims, features, stats, testimonials, pricing  
- No CRM, database, auth, payments, analytics unless later authorized  
- Design identity protection (candidate palette, rhythm, system-line)  
- Option A (no backend) remains the default for first lead-engine ship  
- Existing routes and components remain the baseline  

---

## 1. Absolute rules

1. **Do not implement application code from this spec alone.** Implementation requires a separate owner-authorized increment.  
2. **Current website = current state, not the definition of the future business.**  
3. **CONTENT_CONTRACT remains binding** for anything public. Missing evidence → do not publish; mark OWNER INPUT / PENDING.  
4. **Growth is allowed only through verified capability intake**, not through speculative marketing pages.  
5. **IA and architecture expand by rule**, not by one-off page creation.  
6. Prefer the smallest change that enables the commercial path.

---

## 2. Current verified state (baseline — not the ceiling)

*Source: `lib/content.ts`, PROJECT_BASELINE, CONTENT_CONTRACT.*

| Domain | Current verified items |
|--------|-------------------------|
| Company | HandzJ Tech Solutions; tagline; Uganda-primary market; phone/WhatsApp/email; remote or arranged on-site |
| Products | Bingo Vintage, HZ SENTE, HZ Finance, HZ POS (name + short summary + presentational category) |
| Automation categories | Excel/data, Collections, Reconciliation, Browser tools/extensions, Custom business automation |
| Projects | Busia Agro (client project; no outcomes published) |
| Contact | Phone, WhatsApp, Email only — no form backend |
| Stack | Next.js 14 App Router, TS, React, Tailwind; no backend/DB/CMS/analytics |

Anything **not** in the above remains non-public until it passes the capability-growth model and content control.

---

## 3. Commercial objective (unchanged intent, growth-aware)

```
TRAFFIC → USEFUL ENTRY → PROBLEM IDENTIFICATION → SOLUTION / PRODUCT / TOOL
  → QUALIFIED CONTACT → DEMO / DISCOVERY → QUOTE / SALE → RECURRING REVENUE
```

The site moves from “here is who we are” toward “you have a problem; here is something useful; start a conversation” — while remaining industrial/technical and **able to absorb new verified capabilities** without redesign or claim inflation.

---

## 4. Evidence-driven capability-growth model

This is the core V2 addition. It sits **beside** (not instead of) Lead Engine conversion mechanics.

### 4.1 Capability Intake

**Purpose:** Single controlled entry for anything that might become public or commercial on the site.

**Intake sources (non-exhaustive):**
- Owner / internal product work  
- Client engagements (with permission)  
- Recurring operational problems observed in the field  
- Customer/market feedback (see §4.5)  
- Experiments that produced reusable artifacts  

**Minimum intake record (process artifact — not necessarily a public page):**

| Field | Required |
|-------|----------|
| Working name | Yes |
| Problem statement (plain language) | Yes |
| Proposed class (see §4.2) | Yes |
| Source of demand (who asked / observed) | Yes |
| Evidence available now | Yes |
| Proposed public claim (if any) | Yes — or “none yet” |
| Owner sponsor | Yes |
| Suggested next lifecycle stage | Yes |

**Rule:** No public route, nav item, or marketing claim is created from intake alone.

### 4.2 Capability Classification

Every intake item is classified as **exactly one primary class** (secondary tags allowed):

| Class | Meaning | Typical public form (when validated) | IA tendency |
|-------|---------|--------------------------------------|-------------|
| **Solution** | Problem-framed offering (often spans product + automation) | Section on `/solutions` or dedicated problem page | Solutions cluster |
| **Product** | Named software system | `/products` list; later `/products/[slug]` if content verified | Products cluster |
| **Tool** | Lightweight utility (often free or lead-oriented) | `/tools` or embedded widget — only if qualified | Tools cluster (optional route) |
| **Project** | Client or internal delivery instance | `/projects`; case detail only with permission + evidence | Projects cluster |
| **Experiment** | Unproven exploration | **Not public** (or clearly labelled internal/demo only) | No production IA |

**Reclassification** is allowed as evidence grows (e.g. Experiment → Tool → Product) and must be recorded in DECISIONS / CHANGE_LOG when it affects the public site.

### 4.3 Evidence Levels

Public strength is capped by evidence level:

| Level | Definition | Allowed public treatment |
|-------|------------|---------------------------|
| **E0 — Claim only** | Assertion with no artifact | **Not public** |
| **E1 — Internal existence** | Exists in codebase/ops; no external proof package | Name + one-line non-feature summary *only if* owner confirms publishable (current product pattern) |
| **E2 — Documented capability** | Written verified capability list from source project / owner sign-off | Structured product/solution page sections without performance claims |
| **E3 — Demonstrable** | Screenshots, recorded walkthrough, or live demo path | Demo CTA + limited visual evidence |
| **E4 — Outcome-backed** | Client-permitted results or measurable outcomes | Case-style claims strictly limited to permitted facts |
| **E5 — Repeatable offer** | Packaged, supportable, commercially repeatable | Full offer positioning; still no invented stats |

**CONTENT_CONTRACT mapping:**  
Publishing above E1 without raising evidence is a contract violation. Raising evidence is how growth happens.

### 4.4 Commercial Opportunity Scoring

Before investing in pages, tools, or detail routes, score the capability (owner-facing, not public):

| Dimension | Score guidance (example 1–5) |
|-----------|------------------------------|
| Demand signal | How often does this problem appear in real conversations? |
| Fit to HandzJ delivery model | Software / automation / remote-or-onsite Uganda+ |
| Differentiation | Is this generic commodity content or real HandzJ work? |
| Lead quality | Attracts buyers vs tire-kickers |
| Evidence readiness | Current evidence level vs effort to reach E2+ |
| Maintenance cost | Docs, support, tool upkeep |
| Path to revenue | Demo → quote; assessment → build; tool → product |

**Rule of thumb for V1 lead-engine implementation:**  
Prefer high demand + high fit + evidence ≥ E1 for listing; require ≥ E2 for dedicated problem/product pages; ≥ E3 for demo-heavy promotion.

Scoring is **advisory for prioritization**, not a public claim.

### 4.5 Customer / market feedback loop

```
Public touchpoints / sales conversations / delivery work
        ↓
Structured feedback notes (problem, segment, urgency, what they asked for)
        ↓
Capability Intake (§4.1)
        ↓
Classification + evidence plan
        ↓
Publish only what is verified
        ↓
Measure conversation quality / demo requests (manual until analytics authorized)
        ↓
Expand, reclassify, or retire
```

**Feedback inputs may include:** WhatsApp/email themes, demo objections, delivery retrospectives, rejected work (what was asked but not built).  

**Not required for V1:** analytics SDK, survey product, CRM. Manual notes + owner review are enough to start the loop.

### 4.6 Tool Qualification

A **Tool** may be proposed only if it passes qualification:

| Gate | Requirement |
|------|-------------|
| Problem fit | Maps to a recurring confirmed or likely customer problem |
| Commercial path | Clear path to demo, assessment, or paid work — not “traffic for its own sake” |
| Evidence | At least E1 internal existence or a scoped build plan with owner sponsor |
| Maintenance | Named owner for accuracy and support |
| Scope control | No open-ended “AI assistant”; bounded input/output |
| Content safety | No fabricated benchmarks; disclaimers if illustrative |
| IA placement | Prefer embed or single route under a future `/tools` only after approval |
| Lead quality risk | Reject if primarily attracts irrelevant traffic |

**Lead Engine V1 core still does not require shipping a tool.** Qualification exists so tools can be added later without architectural panic.

### 4.7 Proof / evidence repository requirements

Before elevating a capability’s public presence, store (privately) a minimal evidence pack:

| Evidence type | Examples | Used for level |
|---------------|----------|----------------|
| Source identity | Repo name, internal project code, client codename | E1+ |
| Capability notes | Owner-approved bullet list of what it actually does | E2 |
| Visual proof | Screenshots, short capture (no fake UI) | E3 |
| Permission | Client approval for naming / outcomes | E4 |
| Offer definition | Scope boundaries, support expectations | E5 |

**Repository location:** Owner-controlled (not necessarily in the public Next.js repo).  
**Public site** only receives *approved extracts* via `lib/content.ts` (or successor content module) under CONTENT_CONTRACT.

**Do not** commit client secrets, credentials, or raw customer data into the marketing repo.

### 4.8 Experiment vs Production

| | Experiment | Production (public site) |
|--|------------|---------------------------|
| Audience | Internal / invited only | General public |
| Claims | None or clearly labelled prototype | Evidence-capped only |
| IA | No primary nav; no SEO push | May enter nav/sitemap when authorized |
| Routes | Optional hidden/prototype — only if explicitly approved | Approved routes only |
| Design | May be rough internally | Must obey DESIGN_SYSTEM |
| Exit | Graduate (reclassify + evidence) or retire | Expand, maintain, or retire via lifecycle |

**Experiments must not leak** into primary navigation, homepage hero claims, or footer offers.

### 4.9 Capability lifecycle

```
proposed
  → validated (classification + evidence plan + opportunity score)
    → published (content + IA insertion under contracts)
      → measured (conversation/demo quality; later analytics if authorized)
        → expanded (higher evidence, detail route, tool, case)
        OR retired (remove/reduce public presence; log decision)
```

| Stage | Public site effect | Control artifact |
|-------|--------------------|------------------|
| Proposed | None | Intake record |
| Validated | None yet | Classification + score + evidence target |
| Published | Listing and/or page per evidence cap | content.ts + CHANGE_LOG + route approval if new |
| Measured | CTA/copy iteration only with approval | Notes / DECISIONS |
| Expanded | Stronger page, detail route, tool | Evidence upgrade + ROUTE/CONTENT updates |
| Retired | Remove or downgrade | CHANGE_LOG + DECISIONS |

### 4.10 Future capability insertion into IA (anti-drift rules)

**Principle:** Grow by **slots and rules**, not by inventing new site shapes each time.

| Class | Default insertion point | New route allowed when |
|-------|-------------------------|-------------------------|
| Product | `/products` card list | `/products/[slug]` only if E2+ content package approved |
| Solution / automation problem | `/solutions` section | Dedicated `/solutions/[topic]` only if demand + SEO case + content approved |
| Project | `/projects` list | `/projects/[slug]` only with permission + evidence |
| Tool | None until first tool qualified | `/tools` or `/tools/[slug]` only after tool qualification + route approval |
| Experiment | Nowhere public | Never in primary IA |

**Anti-drift constraints:**
- No parallel “marketing site v2” tree  
- No alternate design system for new capabilities  
- No duplicate content modules — extend `lib/content.ts` (or a single successor module) with typed fields  
- Nav grows slowly; prefer in-page discovery before new top-level items  
- Conditional detail routes already named in ROUTE_CONTRACT remain the pattern for product/project growth  

---

## 5. Lead Engine V1 mechanics (retained from V1, growth-aware)

### 5.1 Default technical option

**Option A — No backend** remains the recommended first ship:
- Phone / WhatsApp / Email  
- Contextual `wa.me?text=` and `mailto:`  
- Optional `/contact?intent=&capability=` display-only context  

Option B (simple form → processor) stays a **later** candidate after privacy/legal inputs.

### 5.2 Contextual CTAs

Same intent family as V1 (demo, discuss product, automate process, assessment, WhatsApp), but:

- CTA targets are bound to **published capabilities**, not a hard-coded eternal list  
- When a new Product/Solution is published via lifecycle, CTAs may reference it **only after** content entry exists  

### 5.3 Entry points

P0: `/contact`, Home CTAs, `/products`  
P1: `/solutions`, automation problem framing  
P2: `/projects`  
P3: `/tools` — only after first qualified tool  

### 5.4 Product & automation pages

Structure guidance from V1 remains valid **as a ceiling per evidence level**, not as mandatory sections for every item:

- E1: name + summary + discuss/demo CTA  
- E2: problem / who for / verified capabilities  
- E3+: workflow visuals, stronger demo path  
- E4+: permitted outcomes only  

---

## 6. CONTENT_CONTRACT — growth without claim inflation

**Unchanged prohibitions:** invented customers, revenue, percentages, testimonials, addresses, certifications, awards, fake features, fake pricing, guarantees.

**Explicit V2 clarification:**

> CONTENT_CONTRACT blocks **unsupported** public claims.  
> It does **not** block introduction of **newly verified** capabilities that complete intake → validation → evidence → publish.

**Process for adding a capability to the public site:**

1. Intake + classification + opportunity score  
2. Evidence level assigned; proof pack stored privately as required  
3. Owner approval to publish  
4. Add typed entry to content module  
5. Update CONTENT_CONTRACT / PROJECT_BASELINE if it is a new baseline fact  
6. PLACE in IA per §4.10  
7. CHANGE_LOG + DECISIONS  
8. Implement in an authorized increment; validate; stop-gate  

---

## 7. Design protection (unchanged)

Preserve candidate identity: Deep Ink, Graphite, Warm Ivory, White, Signal Green, Deep Green, Amber sparingly, system-line, light/dark rhythm, accessibility rules.  

Reject generic AI/SaaS template aesthetics, conversion spam, fake dashboards.

---

## 8. Target customer clarity (growth-aware)

| Class | Use in public copy |
|-------|-------------------|
| **Confirmed** | Directly supported by current verified products/automation/service model |
| **Likely** | Owner confirmation required before use in public copy |
| **Unknown** | Feedback-loop input only; never drives claims until confirmed |

As new capabilities publish, **Confirmed** segments may expand — only via evidence and owner approval, not by speculation.

---

## 9. Revised increment sketch (still not implementation)

| Increment | Focus |
|-----------|--------|
| **LE-0** | Adopt this V2 model in DEVELOPMENT_CONTROL (this doc); no app code |
| **LE-1** | Contextual CTAs + contact context (Option A) for *current* published capabilities |
| **LE-2** | Solutions/automation problem framing at current evidence levels |
| **LE-3** | Capability intake template + private evidence checklist (process, may be markdown only) |
| **LE-4+** | Form (Option B), first detail route, first qualified tool — each gated by evidence + owner approval |

Each remains subject to MASTER workflow validation gates.

---

## 10. Owner decisions still required

1. Accept V2 capability-growth model as governing for future site expansion?  
2. Confirm Option A for first lead-engine implementation increment?  
3. Who is the ongoing **capability intake sponsor**?  
4. Where does the **private evidence repository** live?  
5. Approve or amend commercial scoring dimensions?  
6. Visual: continue with Increment 4 candidate palette as base?  
7. Any capabilities already at E2+ that should enter the next publish queue?

---

## 11. Summary

| Principle | Statement |
|-----------|-----------|
| Control | Development control governs *how* change happens |
| Growth | Future verified capabilities must be insertable without architecture rewrite |
| Evidence | Public strength never exceeds evidence level |
| Honesty | Pending stays pending; no creative filling |
| Lead engine | Conversion layer on a living capability set, not a frozen catalogue |
| Current site | Accurate snapshot of today — not the limit of tomorrow |

---

## 12. Hard stop

This file is **specification only**.  

No application code, routes, components, dependencies, or public copy were changed by producing V2.

**Next step:** Owner acceptance of V2 (or amendments), then an explicit authorization to implement a single increment (recommended first code increment: **LE-1** under Option A).

---

## Appendix A — Diff summary vs V1

| Topic | Change | Why |
|-------|--------|-----|
| Commercial architecture | Decoupled from fixed product/automation lists | HandzJ discovers and builds continuously |
| Capability-growth model | Added §§4.1–4.10 | Controlled growth without claim inflation |
| CONTENT_CONTRACT stance | Clarified: blocks unsupported claims, not verified expansion | Prevent “frozen by compliance” failure mode |
| Experiments | Explicit non-public track | Avoid leaking unproven work into IA |
| Tools | Qualification gates | Avoid random free-tool sprawl |
| Evidence repository | Required for elevation | Repeatable proof discipline |
| Lifecycle | proposed→…→retired | Prevent permanent zombie pages |
| IA insertion rules | Class-based slots | Stop architectural drift |
| Lead Engine mechanics | Retained Option A + contextual CTAs | Still minimal viable conversion layer |
| Implementation | Still forbidden in this phase | Planning-only discipline |


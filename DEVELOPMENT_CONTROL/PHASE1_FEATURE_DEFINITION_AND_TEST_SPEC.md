# HANDZJ TECH SOLUTIONS  
## PHASE 1 FEATURE DEFINITION & TEST SPECIFICATION

**Status:** Planning / feature-definition phase  
**NO IMPLEMENTATION AUTHORIZED BY THIS DOCUMENT**

**Follows:**
- `HANDZJ_LEAD_ENGINE_EXTENSION_SPEC_V2.md` (capability-growth model)
- Directional approval of Lead Engine (V1 → V2 correction)
- All existing `DEVELOPMENT_CONTROL/` contracts

**Purpose of Phase 1:** Test whether a **small, controlled commercial layer** improves:

```
VISITOR → UNDERSTANDS CAPABILITY → IDENTIFIES PROBLEM/INTEREST
       → SELECTS RELEVANT PATH → CONTACTS HANDZJ WITH CONTEXT
```

while preserving architecture, routes, visual identity, verified content, accessibility, deployment controls, and development-control workflow.

---

## 1. Strategic principle

The website is **capability-led**, not permanently inventory-led.

- Current products and automation categories = **verified current state**
- They are **not** the permanent definition of HandzJ Tech
- Future verified capabilities enter through controlled intake (V2 model)
- Phase 1 must not hard-code “only these products forever”

```
CURRENT VERIFIED CAPABILITIES → PHASE 1 TEST → EVIDENCE
  → FUTURE CAPABILITIES → CONTROLLED ADDITION
```

---

## 2. Commercial hypothesis

**If** visitors get clearer, contextual paths from a business problem/capability to a relevant HandzJ conversation,  
**then** more enquiries will contain useful context and be easier to qualify.

Phase 1 tests: **clarity, relevance, context, conversion path, technical stability**.  
Phase 1 does **not** optimize revenue (no baseline analytics yet).

---

## 3. Feature set (defined)

### F1 — Capability-oriented entry structure
**Scope:** Review Home, Solutions, Products, Projects, Contact. Improve only where a gap blocks: what HandzJ does → relevant capability → how to start a conversation.  
**Not:** Full rewrite.  
**Test:** Reviewer can answer those three questions without hunting unrelated pages.

### F2 — Contextual CTA system
**Minimum intent set for Phase 1 (recommended):**

| Intent ID | Label (working) | Primary use |
|-----------|-----------------|-------------|
| `demo` | Request a Demo | Products / software |
| `product` | Discuss This Product | Product cards |
| `automation` | Automate This Process | Automation categories |
| `assessment` | Request an Automation Assessment | Solutions automation block |
| `general` | General Enquiry | Contact / fallback |

Optional / P1: `project` (Talk About a Project), `solution` (Discuss This Solution) if copy stays non-invented.

Every CTA carries: **Intent · Source page · Destination · Context**.

### F3 — Contextual WhatsApp
- Existing number only (`lib/content.ts`)
- Prefill pattern (editable by visitor):

```
Hello HandzJ Tech,

I'm interested in [CAPABILITY/PRODUCT].

I'd like to discuss [INTENT].
```

- No backend, DB, tracking, auto-send, or personal-data collection beyond what WhatsApp already handles outside our stack.

### F4 — Contextual email
- Existing `handzj2@gmail.com` only
- `mailto:?subject=&body=` with capability/intent context
- Editable in the user’s mail client; no fabricated fields

### F5 — Contact context (display-only)
- Optional: `/contact?intent=…&product=…` or `capability=…`
- Display: “You’re asking about …” when values are in an **allowlist**
- Validate allowlist; ignore unknown/malformed safely
- No storage, no arbitrary HTML, no reflected XSS, no sensitive data in query

### F6 — Solutions discovery improvement
- Structure on `/solutions` supports **current + future** verified capabilities
- Visitor path: Problem → Capability → Possible HandzJ path → Conversation
- No invented results; no new categories unless verified + approved
- Architecture must allow adding a capability without redesigning the page system

### F7 — Capability growth foundation (process, not CMS)
Document/adopt lifecycle alignment with V2:

```
PROPOSED → EVIDENCE REVIEW → CLASSIFICATION → COMMERCIAL REVIEW
  → CONTENT APPROVAL → IMPLEMENTATION → VALIDATION → PUBLISHED
  → MEASURED → EXPAND / MODIFY / RETIRE
```

Classes: Solution | Product | Tool | Project | Service | Experiment  

Phase 1 delivers the **contract/process clarity** (and content-module extension points if needed later)—not a database or CMS.

### F8 — Measurement points (documentation only)
Document future events; **do not install analytics**:

- CTA viewed / clicked  
- WhatsApp clicked  
- Email clicked  
- Contact context opened  
- Product intent / Solution (automation) intent  

---

## 4. Feature priority matrix

| ID | Feature | Priority | Purpose | Dependency | Risk | Test focus |
|----|---------|----------|---------|------------|------|------------|
| F1 | Capability-oriented entry structure | **P0** | Clarity of path | Existing pages | Low–med (copy drift) | Reviewer clarity test |
| F2 | Contextual CTA system | **P0** | Intent model | F1 decisions | Low | Intent matrix coverage |
| F3 | Contextual WhatsApp | **P0** | Context in channel | F2, content.ts numbers | Low | Prefill + number + edit |
| F4 | Contextual email | **P0** | Context in channel | F2, content.ts email | Low | Subject/body/recipient |
| F5 | Contact query context UI | **P0** | On-page context | Allowlist of intents/slugs | Med (XSS if mishandled) | Valid/invalid/missing params |
| F6 | Solutions discovery structure | **P1** | Growth-ready solutions | F1, CONTENT_CONTRACT | Med (over-claim) | Addability without redesign |
| F7 | Capability growth foundation | **P0** (docs) | Growth without drift | V2 spec | Low | Process documented |
| F8 | Measurement definitions | **P1** (docs) | Future measurement | None | Low | Doc completeness |
| — | Free tool | **P2** | — | Evidence + qualification | — | Out of Phase 1 |
| — | Contact form backend | **P2** | — | Processor + privacy | — | Out of Phase 1 |
| — | Product detail routes | **P2** | — | E2+ evidence | — | Out of Phase 1 |
| — | Analytics SDK | **P2** | — | Owner auth | — | Out of Phase 1 |

---

## 5. Exact file-level impact analysis

Inspection basis: current Increment 4 codebase.

| File | Current responsibility | Proposed change | Why | Dependencies | Risk | Test |
|------|------------------------|-----------------|-----|--------------|------|------|
| `lib/content.ts` | Verified content + nav + contact links | **Likely:** helper(s) or data for CTA intents, WhatsApp/email URL builders, allowlists for contact query params; **no invented product facts** | Single source for context strings and allowed values | CONTENT_CONTRACT | Low if typed allowlists | Unit-like manual checks of generated URLs |
| `app/page.tsx` | Home sections + CTAs | **Likely:** wire contextual CTAs (demo / WhatsApp) with prefill | Primary entry | Button, content helpers | Low | Home CTA matrix |
| `app/solutions/page.tsx` | Software + automation sections | **Likely:** automation CTAs; **P1:** structure tweaks for growth-ready blocks | F2/F6 | content.ts | Med if copy invents claims | Solutions + growth addability |
| `app/products/page.tsx` | Product cards | **Likely:** per-product discuss/demo CTAs with context | F2–F4 | content.ts products | Low | Each product context |
| `app/projects/page.tsx` | Project list | **P1 / optional:** soft project CTA; else **UNCHANGED** | Low priority | — | Low | Regression |
| `app/contact/page.tsx` | Channel buttons | **Likely:** read allowlisted query params; display-only context; contextual WA/email links | F5 | content.ts allowlists | Med (validation) | Param matrix |
| `app/about/page.tsx` | About | **UNCHANGED** (unless trivial CTA consistency) | Out of P0 | — | — | Regression |
| Legal pages | Placeholders | **UNCHANGED** | No form yet | — | — | Regression |
| `app/not-found.tsx` | 404 | **UNCHANGED** | — | — | — | Regression |
| `app/layout.tsx` | Shell | **UNCHANGED** | — | — | — | Regression |
| `components/Button.tsx` | Primary/secondary links | **Possible:** support passing prebuilt `href` only (already does); avoid new variants unless needed | Prefer composition over API growth | — | Low | Existing button tests |
| `components/Header.tsx` | Nav + Demo CTA | **Likely:** Demo CTA uses contextual pattern (general or demo intent) | Consistency | content.ts | Low | Header CTA |
| `components/Footer.tsx` | Contact + legal | **Possible:** WhatsApp/email links gain optional default prefill; or **UNCHANGED** | Minor | content.ts | Low | Footer links |
| `components/MobileNav.tsx` | Mobile menu | **Likely UNCHANGED** behavior; inherits Header CTA | — | — | Low | Mobile nav |
| `components/SectionHeading.tsx` | Headings | **UNCHANGED** | — | — | — | — |
| `components/Container.tsx` | Width | **UNCHANGED** | — | — | — | — |
| `components/SkipLink.tsx` | A11y | **UNCHANGED** | — | — | — | Keyboard |
| `app/globals.css` | Tokens + system-line | **UNCHANGED** unless tiny context banner style | Design preserve | DESIGN_SYSTEM | Low | Visual |
| `tailwind.config.ts` | Palette | **UNCHANGED** | No rebrand | — | — | — |
| `DEVELOPMENT_CONTROL/*` | Contracts | **Update:** CHANGE_LOG, DECISIONS, PHASE_STATUS, handoff; **optional:** short CTA/capability note | Control | — | Low | Doc review |
| `package.json` / lockfile | Deps | **UNCHANGED** — no new dependencies | Change minimization | — | — | install/lint/typecheck/build |

### Unchanged-file list (default expectation)

- `app/about/page.tsx` (unless trivial)
- `app/privacy-policy/page.tsx`, `terms-of-service`, `cookie-policy`, `disclaimer`, `accessibility`
- `app/not-found.tsx`, `app/layout.tsx`
- `components/Container.tsx`, `SectionHeading.tsx`, `SkipLink.tsx`
- `tailwind.config.ts`, `next.config.mjs`, `tsconfig.json`, `postcss.config.js`
- `package.json`, `package-lock.json`
- Most of DESIGN_SYSTEM tokens (no rebrand in Phase 1)

---

## 6. Dependency list

| Dependency | Phase 1 |
|------------|---------|
| New npm packages | **None** |
| Backend / API routes | **None** |
| Database / CRM | **None** |
| Analytics SDK | **None** |
| Form processor | **None** |
| External services beyond existing `wa.me` / `tel:` / `mailto:` | **None** |

---

## 7. Manual test matrix

### Homepage
| # | Case | Expected |
|---|------|----------|
| H1 | Primary CTA | Opens correct destination with demo/general context as designed |
| H2 | Secondary WhatsApp | Correct number + editable prefill |
| H3 | Nav + MobileNav | All primary routes; Escape closes mobile |
| H4 | Existing product/automation content | Unchanged verified copy |

### Solutions
| # | Case | Expected |
|---|------|----------|
| S1 | Software path clarity | Can identify products path |
| S2 | Automation CTA | Context includes category name |
| S3 | WhatsApp / email from section | Correct context; editable |
| S4 | Growth addability (review) | New capability could slot without full redesign |

### Products
| # | Case | Expected |
|---|------|----------|
| P1 | Each product CTA | Context = that product slug/name |
| P2 | Demo intent | Distinct from general enquiry |
| P3 | Cards still show pending detail honestly | No new feature claims |

### Projects
| # | Case | Expected |
|---|------|----------|
| R1 | Page loads | Busia Agro unchanged facts |
| R2 | If project CTA approved | Context safe; else no broken control |

### Contact
| # | Case | Expected |
|---|------|----------|
| C1 | `/contact` direct | Existing phone/WA/email work |
| C2 | Valid `intent` + `product` | Display context; links match |
| C3 | Missing params | No error; default contact UI |
| C4 | Unknown param values | Ignored safely; no crash; no HTML injection |
| C5 | Malformed query | Ignored safely |
| C6 | Mobile | Targets ≥44px; readable |

### Channels
| # | Case | Expected |
|---|------|----------|
| W1–Wn | Each approved WA CTA | Number = content.ts; prefill correct; user can edit/send |
| E1–En | Each approved mailto CTA | Recipient correct; subject/body meaningful; editable |

### Accessibility
| # | Case | Expected |
|---|------|----------|
| A1 | Keyboard only | All new/ changed controls operable |
| A2 | Focus visible | Outline on interactive elements |
| A3 | Skip link | Still reaches `#main-content` |
| A4 | Reduced motion | No new motion violations |
| A5 | Touch targets | ≥44px |

### Regression
| # | Case | Expected |
|---|------|----------|
| G1 | All 12 routes render | No 500s |
| G2 | Header / Footer | Links correct |
| G3 | Legal pages | Unchanged behavior |
| G4 | 404 | Unchanged |
| G5 | Design identity | No palette/template drift |

---

## 8. Acceptance criteria

**Commercial**
- [ ] Visitor can identify a relevant path (capability → conversation)
- [ ] Product and/or automation intent can be expressed
- [ ] WhatsApp context works for approved CTAs
- [ ] Email context works for approved CTAs
- [ ] Contact context works for allowlisted query params (if F5 implemented)

**Content**
- [ ] No unsupported claims
- [ ] Verified content in `lib/content.ts` remains accurate
- [ ] Growth model does not invent capabilities on the public site

**Architecture**
- [ ] No backend, database, CRM, auth
- [ ] No unnecessary npm dependency

**Design**
- [ ] Candidate identity preserved (Deep Ink / Ivory / Signal Green, rhythm, system-line)
- [ ] No generic SaaS redesign / gradient system
- [ ] Responsive behavior preserved

**Technical**
- [ ] `npm install` / `lint` / `typecheck` / `build` pass in stable environment
- [ ] Manual matrix executed; failures fixed within Phase 1 scope only

**Control**
- [ ] CHANGE_LOG, DECISIONS, PHASE_STATUS, implementation handoff updated
- [ ] No unapproved scope

---

## 9. Risk register

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Query-param XSS / open redirect | Low if allowlisted | High | Allowlist only; never render raw query as HTML |
| Prefill over-claims capability | Med | High | Strings from content.ts only; no feature lists in prefill |
| CTA spam / conversion-heavy UX | Med | Med | Limit intents; one primary + one secondary per block |
| Scope creep into forms/tools/CRM | Med | High | Non-goals list; stop-gate |
| FUSE/env validation failure | Known | Med | Record env failure; require stable FS validation |
| Solutions copy invents results | Med | High | CONTENT_CONTRACT review before merge |
| Hard-coding permanent inventory | Med | High | F7 + V2 lifecycle; content module remains extensible |

---

## 10. Required owner decisions (before implementation)

1. Approve this Phase 1 feature matrix (P0 set)?  
2. Confirm **minimum intent set** (demo, product, automation, assessment, general)?  
3. Approve **WhatsApp prefill** wording pattern?  
4. Approve **F5** contact query-param UI (or defer)?  
5. Projects page: include soft CTA or leave unchanged?  
6. F6 Solutions: allow structural tweak in Phase 1 or docs-only growth foundation?  
7. Confirm validation will be run on a **stable non-FUSE** environment for PASS?  
8. Continue Increment 4 **candidate palette** as base for any UI chrome?

---

## 11. Proposed CHANGE_LOG entry (after implementation — not now)

```
| 2026-XX-XX | Phase 1 Lead Engine commercial layer: contextual CTA intents; WhatsApp/email prefill from allowlisted capability context; optional display-only /contact query context; solutions structure growth-ready without new categories; capability-growth foundation documented. No backend, no analytics, no new dependencies, no invented claims. | Owner-authorized Phase 1 Feature Definition | CONTENT_CONTRACT, ROUTE_CONTRACT, COMPONENT_CONTRACT, DESIGN_SYSTEM, HANDZJ_LEAD_ENGINE_EXTENSION_SPEC_V2 |
```

---

## 12. Proposed DECISIONS entry (after implementation — not now)

```
| 2026-XX-XX | Phase 1 Lead Engine uses Option A (no backend): contextual wa.me and mailto only; contact query params display-only with allowlist validation. |
| 2026-XX-XX | Minimum CTA intents for Phase 1: demo, product, automation, assessment, general. |
| 2026-XX-XX | Website remains capability-led; current product/automation lists are current verified state, not permanent inventory ceiling (per Lead Engine Spec V2). |
| 2026-XX-XX | No analytics SDK, form processor, tools, or product detail routes in Phase 1. |
```

---

## 13. Proposed PHASE_STATUS entry (after implementation — not now)

```
| 5 — Lead Engine Phase 1 | Contextual conversion layer (CTA/WhatsApp/email/contact context); capability-growth foundation | PENDING → PASS only after stable validation + manual matrix |
```

*(Exact row formatting to match existing PHASE_STATUS table at time of update.)*

---

## 14. Proposed implementation handoff (for use only after owner authorization)

**When authorized, implementer must:**

1. Re-read CONTENT_CONTRACT, ROUTE_CONTRACT, COMPONENT_CONTRACT, DESIGN_SYSTEM, Lead Engine Spec V2, this Phase 1 spec.  
2. Implement **only P0** (and approved P1) items.  
3. Prefer helpers in/near `lib/content.ts` for URL building and allowlists.  
4. Introduce **no** new npm dependencies.  
5. Run `npm install` → `lint` → `typecheck` → `build` on stable FS.  
6. Execute manual test matrix; fix only in-scope defects.  
7. Update CHANGE_LOG, DECISIONS, PHASE_STATUS, handoff notes.  
8. **Stop** — no Phase 2 tools/forms/CRM/detail routes without new authorization.

**Out of scope reminder:** CRM, lead DB, auth, payments, analytics, newsletter, chatbot, full contact form, tool marketplace, SEO farm, redesign, invented case studies.

---

## 15. Regression protection baseline

**Before implementation (on stable environment):**

```
npm install
npm run lint
npm run typecheck
npm run build
```

**Known environmental issue:** Prior Increments 3–4 could not complete install reliably on FUSE-mounted workspace.  
**Rule:** Do not claim PASS if commands did not actually pass; record BLOCKED + exact failure if environment still prevents validation.

**After implementation:** Rerun the same four commands + full manual matrix.

---

## 16. Non-goals (explicit)

CRM · lead database · authentication · payment · customer portal · analytics platform · newsletter · AI chatbot · full contact form · tool marketplace · large `/tools` section · product-detail expansion without evidence · SEO content farm · redesign · rebranding · speculative services · invented case studies · new npm deps without justification · backend of any kind in Phase 1.

---

## 17. Final principle

> The HandzJ website must be **stable enough to protect the existing business**, and **flexible enough to grow with the business**.  
> Development control controls **how** capabilities are introduced — not which capabilities HandzJ may eventually develop.  
> Current content is the verified present. The architecture is the controlled foundation for the future.

---

## 18. STOP GATE

**NO CODE IMPLEMENTATION IS AUTHORIZED BY THIS DOCUMENT.**

### Deliverables checklist (this document)

1. Phase 1 feature matrix — §4  
2. Exact file impact map — §5  
3. Unchanged-file list — §5  
4. Dependency list — §6  
5. Manual test matrix — §7  
6. Acceptance criteria — §8  
7. Risk register — §9  
8. Required owner decisions — §10  
9. Proposed CHANGE_LOG entry — §11  
10. Proposed DECISIONS entry — §12  
11. Proposed PHASE_STATUS entry — §13  
12. Proposed implementation handoff — §14  

**Awaiting explicit owner authorization before any implementation.**

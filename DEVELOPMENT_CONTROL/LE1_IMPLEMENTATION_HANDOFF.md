# LE-1 IMPLEMENTATION HANDOFF  
## Lead Engine Phase 1 — Contextual Conversion Layer

**Status:** Handoff for review only. **NO IMPLEMENTATION AUTHORIZED.**  
**Prerequisite:** Lead Engine Spec V2 + Owner Amendments (Capability vs Public Offering; Evidence-over-claims; LE-1 measurement objective).  
**Related:** `PHASE1_FEATURE_DEFINITION_AND_TEST_SPEC.md`

---

## 1. Objective

Implement the **minimum** commercial layer that lets a visitor:

1. Understand a relevant HandzJ capability (from **current published** content only)  
2. Express an intent  
3. Contact HandzJ via WhatsApp or email **with context**  
4. Optionally see display-only context on `/contact`

**Success is measured by** whether intents produce **qualified conversations** (sales judgment + message context), **not** by click counts alone.

**Explicitly out of LE-1:** backend, DB, CRM, form processor, analytics SDK, tools, product detail routes, new capability pages, redesign, invented claims.

---

## 2. Governing rules (must not violate)

| Rule | Source |
|------|--------|
| No unsupported public claims | CONTENT_CONTRACT |
| Current products/automation = current state, not permanent ceiling | V2 |
| Capability may exist internally without public offering | V2 Amendment 1 |
| Commercial score ≠ evidence level or claim strength | V2 Amendment 2 |
| LE-1 tests qualified conversations, not vanity clicks | V2 Amendment 3 |
| No new npm dependencies | Phase 1 spec |
| Preserve design identity | DESIGN_SYSTEM |
| No new primary routes | ROUTE_CONTRACT |
| Allowlist-only query params; no reflected XSS | Phase 1 F5 |

---

## 3. Current-code audit (baseline)

| Area | Finding |
|------|---------|
| Stack | Next.js 14 App Router, TS, Tailwind; no backend |
| Content | `lib/content.ts` — products, automationCategories, projects, contactLinks |
| CTAs today | Mostly generic “Request a Demo” / “Contact us” / WhatsApp without structured intent context |
| Contact | Channel buttons only; no query-param context UI |
| WhatsApp | `https://wa.me/${raw}` — no `text` prefill today |
| Email | `mailto:` — no subject/body helpers today |
| Design | Candidate Deep Ink / Ivory / Signal Green; light/dark rhythm |

**Gap LE-1 closes:** intent + capability context on outbound channels, without inventing new offerings.

---

## 4. LE-1 scope (P0 only)

| ID | Deliverable |
|----|-------------|
| LE1-A | Intent model (minimum): `demo` \| `product` \| `automation` \| `assessment` \| `general` |
| LE1-B | URL builders in/near `lib/content.ts`: WhatsApp prefill, mailto subject/body, from allowlisted capability labels |
| LE1-C | Wire contextual CTAs on Home, Products, Solutions (automation block), Header demo CTA |
| LE1-D | `/contact` display-only context for allowlisted `intent` + `product` or `capability` query params |
| LE1-E | Contact page buttons respect context when present |
| LE1-F | Docs: measurement objective + manual logging guidance (no SDK) |

**P1 (only if owner explicitly includes in authorization):** Projects soft CTA; minor Solutions structural clarity without new categories.

**Not in LE-1:** F6 heavy redesign, tools, forms, analytics, detail routes, new capabilities.

---

## 5. Exact file / change map

| File | Change | Notes |
|------|--------|-------|
| `lib/content.ts` | **MODIFY** | Add intent type; allowlists (product slugs, automation names, intents); `buildWhatsAppUrl({ intent, label })`; `buildMailtoUrl({ intent, label })`; optional `parseContactContext(searchParams)` pure helpers. **No new fake products.** |
| `app/page.tsx` | **MODIFY** | Hero + CTA block: demo + WhatsApp with context; keep verified copy |
| `app/products/page.tsx` | **MODIFY** | Per-product discuss/demo links using builders |
| `app/solutions/page.tsx` | **MODIFY** | Automation CTAs with category context; software side may link products or demo |
| `app/contact/page.tsx` | **MODIFY** | Read `searchParams` (Server Component); allowlist; display “You’re asking about …”; contextual WA/email buttons |
| `components/Header.tsx` | **MODIFY** | Demo CTA → contact or WA with `demo`/`general` context as designed |
| `components/Footer.tsx` | **UNCHANGED** or minimal (prefer unchanged) | Avoid prefill spam on every footer click unless owner asks |
| `components/Button.tsx` | **UNCHANGED** preferred | Pass computed `href` from pages |
| `app/projects/page.tsx` | **UNCHANGED** unless P1 authorized | |
| `app/about/page.tsx` | **UNCHANGED** | |
| Legal pages | **UNCHANGED** | |
| `package.json` | **UNCHANGED** | |
| `DEVELOPMENT_CONTROL/CHANGE_LOG.md` | **UPDATE after ship** | |
| `DEVELOPMENT_CONTROL/DECISIONS.md` | **UPDATE after ship** | |
| `DEVELOPMENT_CONTROL/PHASE_STATUS.md` | **UPDATE after ship** | |

---

## 6. Context encoding (specification)

### WhatsApp
- Base: existing `contactLinks.whatsappHref` / raw number from content.ts  
- Prefill (editable), example shape:

```
Hello HandzJ Tech,

I'm interested in [Label from allowlist].

I'd like to discuss [Intent label].
```

- Use `encodeURIComponent` on the text parameter only.

### Email
- To: existing `contact.email`  
- Subject: e.g. `[Intent] — [Label]`  
- Body: short plain interest line; no feature claims.

### Contact query
- Allowed `intent`: demo | product | automation | assessment | general  
- Allowed `product`: slugs from `products[].slug` only  
- Allowed `capability`: exact names from `automationCategories[].name` only (or a stable slug field if added without changing public meaning)  
- Unknown keys/values: ignore; page behaves as plain `/contact`

**Security:** Never `dangerouslySetInnerHTML` from query; render only mapped labels from allowlists.

---

## 7. Measurement (no SDK)

**Objective:** Which intents/capabilities generate **qualified** conversations.

**LE-1 operational practice (manual):**
- Sales/owner tags inbound WA/email by intent + capability when recognizable from prefill  
- Weekly tally: conversations started, qualified (human judgment), demos booked  
- **Do not** treat raw link clicks as success  

Document event names for a **future** authorized analytics increment (CTA click, WA click, email click, contact context view)—implement tracking only when authorized.

---

## 8. Validation plan

**Automated (stable non-FUSE environment):**

```
npm install
npm run lint
npm run typecheck
npm run build
```

**Manual:** Execute matrix in `PHASE1_FEATURE_DEFINITION_AND_TEST_SPEC.md` §7 (home, solutions, products, contact params, a11y, regression).

**PASS requires:** all automated green + manual matrix signed off + no content-contract violations.

---

## 9. Acceptance criteria (LE-1)

- [ ] Contextual WA opens correct number with editable prefill for each P0 CTA  
- [ ] Contextual mailto uses correct recipient and meaningful subject/body  
- [ ] `/contact` allowlisted context displays; invalid params ignored  
- [ ] No new dependencies, backend, or routes  
- [ ] No new public capabilities invented  
- [ ] Design identity preserved  
- [ ] Lint, typecheck, build pass on stable FS  
- [ ] Manual regression on all existing routes  
- [ ] Control docs updated after ship  

---

## 10. Risk reminders

- Prefill must not assert unverified features  
- Query allowlists must be strict  
- Do not expand into form/CRM “while we’re here”  
- Capability vs public offering: do not add pages for internal-only work  

---

## 11. Stop conditions

After any future authorized implementation:

1. Complete validation + manual acceptance  
2. Update CHANGE_LOG, DECISIONS, PHASE_STATUS  
3. **Stop**  
4. Run LE-1 **live test** (real conversations)  
5. **Evidence review** (qualified conversation quality by intent/capability)  
6. Only then: **LE-2 decision**

---

## 12. Authorization state

| Step | State |
|------|--------|
| V2 Spec | Accepted with 3 amendments |
| Phase 1 feature definition | Produced |
| LE-1 implementation handoff | **This document** |
| Implementation authorization | **NOT GRANTED** |
| Coding | **NOT STARTED** |

**Next owner action:** Explicitly authorize LE-1 implementation (or amend this handoff), then implementation may begin under MASTER workflow stop-gates.


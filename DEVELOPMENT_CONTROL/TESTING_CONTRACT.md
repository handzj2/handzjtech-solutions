# TESTING CONTRACT

## End of Every Increment
Run, where configured:
```
npm install
npm run typecheck
npm run build
npm run lint
```

## Also Verify
- Routes resolve as expected.
- Navigation (desktop + mobile) works.
- Mobile behavior (responsive layout, mobile nav disclosure).
- Accessibility (keyboard nav, focus states, skip link).
- CTA links (WhatsApp, phone, email, /contact) point to verified values.
- Content accuracy (no invented facts).
- Contract compliance (routes/components match ROUTE_CONTRACT.md / COMPONENT_CONTRACT.md).

## Environment Note
Validation results must reflect what was actually run in the implementation environment, including any environment limitation (e.g. no package-registry network access) — never claimed as passing without having actually executed the command.

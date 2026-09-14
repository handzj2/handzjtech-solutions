// Single source of verified site content.
// See DEVELOPMENT_CONTROL/CONTENT_CONTRACT.md — do not add unverified
// claims, statistics, testimonials, or contact details here.
//
// LE-1: contextual contact helpers and allowlists live here so pages
// cannot invent product/capability labels outside verified inventory.

export const company = {
  name: "HandzJ Tech Solutions",
  tagline: "We Build Brands. We Power Systems. We Drive Growth.",
  serviceModel: "Phone, WhatsApp, email, remote, or arranged on-site.",
  market: "Serving Uganda, with services able to extend beyond it.",
};

export const contact = {
  phone: { raw: "+256781909507", display: "0781 909 507" },
  whatsapp: { raw: "256757632884", display: "0757 632 884" },
  email: "handzj2@gmail.com",
};

export const contactLinks = {
  phoneHref: `tel:${contact.phone.raw}`,
  whatsappHref: `https://wa.me/${contact.whatsapp.raw}`,
  emailHref: `mailto:${contact.email}`,
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const demoCta: NavItem = { label: "Request a Demo", href: "/contact?intent=demo" };

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Accessibility", href: "/accessibility" },
];

export type Product = {
  name: string;
  slug: string;
  summary: string;
  // Presentational grouping only — not a verified feature claim.
  category: string;
};

// Names only — no feature claims until verified from source projects.
// Current verified inventory — not a permanent ceiling (Lead Engine V2).
export const products: Product[] = [
  {
    name: "Bingo Vintage",
    slug: "bingo-vintage",
    summary: "Motorcycle/asset and cash lending platform.",
    category: "Lending",
  },
  {
    name: "HZ SENTE",
    slug: "hz-sente",
    summary: "Cloud-ready cash lending platform.",
    category: "Lending",
  },
  {
    name: "HZ Finance",
    slug: "hz-finance",
    summary: "Loan management software.",
    category: "Loan management",
  },
  {
    name: "HZ POS",
    slug: "hz-pos",
    summary: "POS and business management software.",
    category: "Business management",
  },
];

export type AutomationCategory = {
  name: string;
  // Stable key for allowlists / query params (derived from name; not a new claim).
  slug: string;
  // Generic, dictionary-level description of the term itself — not a
  // specific claim about how HandzJ Tech implements it.
  description: string;
};

export const automationCategories: AutomationCategory[] = [
  {
    name: "Excel and data automation",
    slug: "excel-data",
    description: "Turning repetitive spreadsheet work into automated steps.",
  },
  {
    name: "Collections automation",
    slug: "collections",
    description: "Automating the tracking and follow-up work behind recovering payments.",
  },
  {
    name: "Reconciliation",
    slug: "reconciliation",
    description: "Automating the matching of records across systems or statements.",
  },
  {
    name: "Browser tools and extensions",
    slug: "browser-tools",
    description: "Small tools that automate tasks inside the browser.",
  },
  {
    name: "Custom business automation",
    slug: "custom-automation",
    description: "Automation scoped to a specific business process on request.",
  },
];

export type Project = { name: string; slug: string; note: string };

export const projects: Project[] = [
  {
    name: "Busia Agro",
    slug: "busia-agro",
    note: "Client project.",
  },
];

// ---------------------------------------------------------------------------
// LE-1 contextual contact (allowlists + URL builders)
// ---------------------------------------------------------------------------

/** Approved CTA intents — owner-locked for LE-1. */
export type ContactIntent =
  | "demo"
  | "product"
  | "automation"
  | "assessment"
  | "project"
  | "general";

export const contactIntents: Record<
  ContactIntent,
  { id: ContactIntent; label: string }
> = {
  demo: { id: "demo", label: "Request a Demo" },
  product: { id: "product", label: "Discuss a Product" },
  automation: { id: "automation", label: "Automate a Process" },
  assessment: { id: "assessment", label: "Request an Automation Assessment" },
  project: { id: "project", label: "Discuss a Project" },
  general: { id: "general", label: "General Enquiry" },
};

const INTENT_IDS = new Set<string>(Object.keys(contactIntents));
const PRODUCT_SLUGS = new Set(products.map((p) => p.slug));
const AUTOMATION_SLUGS = new Set(automationCategories.map((a) => a.slug));
const PROJECT_SLUGS = new Set(projects.map((p) => p.slug));

export function isContactIntent(value: string): value is ContactIntent {
  return INTENT_IDS.has(value);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAutomationBySlug(slug: string): AutomationCategory | undefined {
  return automationCategories.find((a) => a.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export type ContactContextInput = {
  intent?: string | string[] | undefined;
  product?: string | string[] | undefined;
  capability?: string | string[] | undefined;
  project?: string | string[] | undefined;
};

export type ResolvedContactContext = {
  intent: ContactIntent | null;
  intentLabel: string | null;
  /** Display label for the subject of interest (product, automation, or project name). */
  subjectLabel: string | null;
  productSlug: string | null;
  capabilitySlug: string | null;
  projectSlug: string | null;
};

function firstString(value: string | string[] | undefined): string | null {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && typeof value[0] === "string") return value[0];
  return null;
}

/**
 * Resolve display-only contact context from query params.
 * Unknown values are ignored (safe default = plain contact).
 * Never returns raw user strings for rendering — only allowlisted labels.
 */
export function resolveContactContext(
  input: ContactContextInput
): ResolvedContactContext {
  const intentRaw = firstString(input.intent);
  const productRaw = firstString(input.product);
  const capabilityRaw = firstString(input.capability);
  const projectRaw = firstString(input.project);

  const intent =
    intentRaw && isContactIntent(intentRaw) ? intentRaw : null;
  const intentLabel = intent ? contactIntents[intent].label : null;

  let subjectLabel: string | null = null;
  let productSlug: string | null = null;
  let capabilitySlug: string | null = null;
  let projectSlug: string | null = null;

  if (productRaw && PRODUCT_SLUGS.has(productRaw)) {
    productSlug = productRaw;
    subjectLabel = getProductBySlug(productRaw)?.name ?? null;
  } else if (capabilityRaw && AUTOMATION_SLUGS.has(capabilityRaw)) {
    capabilitySlug = capabilityRaw;
    subjectLabel = getAutomationBySlug(capabilityRaw)?.name ?? null;
  } else if (projectRaw && PROJECT_SLUGS.has(projectRaw)) {
    projectSlug = projectRaw;
    subjectLabel = getProjectBySlug(projectRaw)?.name ?? null;
  }

  return {
    intent,
    intentLabel,
    subjectLabel,
    productSlug,
    capabilitySlug,
    projectSlug,
  };
}

export type BuildContactOptions = {
  intent: ContactIntent;
  /** Verified display label only (product name, automation name, project name). */
  subjectLabel?: string;
};

function prefillBody(intent: ContactIntent, subjectLabel?: string): string {
  const intentLabel = contactIntents[intent].label;
  const interest = subjectLabel?.trim() || "HandzJ Tech Solutions";
  return [
    "Hello HandzJ Tech,",
    "",
    `I'm interested in ${interest}.`,
    "",
    `I'd like to discuss: ${intentLabel}.`,
    "",
  ].join("\n");
}

/** WhatsApp deep link with editable prefill. Uses existing number only. */
export function buildWhatsAppUrl(options: BuildContactOptions): string {
  const text = prefillBody(options.intent, options.subjectLabel);
  return `https://wa.me/${contact.whatsapp.raw}?text=${encodeURIComponent(text)}`;
}

/** mailto with subject/body context. Uses existing email only. */
export function buildMailtoUrl(options: BuildContactOptions): string {
  const intentLabel = contactIntents[options.intent].label;
  const subject = options.subjectLabel
    ? `${intentLabel} — ${options.subjectLabel}`
    : intentLabel;
  const body = prefillBody(options.intent, options.subjectLabel);
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Internal contact page link preserving allowlisted context. */
export function buildContactPageHref(options: {
  intent: ContactIntent;
  productSlug?: string;
  capabilitySlug?: string;
  projectSlug?: string;
}): string {
  const params = new URLSearchParams();
  params.set("intent", options.intent);
  if (options.productSlug && PRODUCT_SLUGS.has(options.productSlug)) {
    params.set("product", options.productSlug);
  }
  if (options.capabilitySlug && AUTOMATION_SLUGS.has(options.capabilitySlug)) {
    params.set("capability", options.capabilitySlug);
  }
  if (options.projectSlug && PROJECT_SLUGS.has(options.projectSlug)) {
    params.set("project", options.projectSlug);
  }
  return `/contact?${params.toString()}`;
}

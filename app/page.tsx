import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import {
  company,
  products,
  automationCategories,
  buildWhatsAppUrl,
  buildContactPageHref,
} from "@/lib/content";

export default function HomePage() {
  const demoContactHref = buildContactPageHref({ intent: "demo" });
  const demoWhatsApp = buildWhatsAppUrl({ intent: "demo" });

  return (
    <>
      {/* LIGHT hero — capability-oriented entry */}
      <section className="relative border-b border-mist bg-ivory">
        <Container className="py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="system-line mb-6 max-w-[12rem] text-brand" aria-hidden="true">
              <span className="system-line-bar" />
            </div>
            <p className="text-sm font-medium text-brand">HandzJ Tech Solutions</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {company.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              HandzJ Tech Solutions builds lending and business-management
              software, and automates the manual work behind it — reachable
              by phone, WhatsApp, or email, with remote and arranged on-site
              support in Uganda.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={demoContactHref}>Request a Demo</Button>
              <Button href={demoWhatsApp} external variant="secondary">
                Chat on WhatsApp
              </Button>
            </div>
            <p className="mt-6 text-sm text-ink/55">
              Explore{" "}
              <Link
                href="/products"
                className="font-medium text-brand hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                products
              </Link>
              {" "}or{" "}
              <Link
                href="/solutions"
                className="font-medium text-brand hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                solutions and automation
              </Link>
              {" "}to find a relevant path, then start a conversation with context.
            </p>
          </div>
        </Container>
      </section>

      {/* DARK — Software we build */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <SectionHeading
            as="h2"
            tone="dark"
            title="Software we build"
            description="Lending and business-management systems, named here without unverified feature claims."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col rounded border border-white/10 bg-ink-soft p-6 transition-colors hover:border-brand/40"
              >
                <p className="text-xs font-medium text-brand">{product.category}</p>
                <p className="mt-2 text-base font-semibold text-white">{product.name}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                  {product.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={buildContactPageHref({
                      intent: "product",
                      productSlug: product.slug,
                    })}
                    className="text-sm font-medium text-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    Discuss this product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LIGHT — Automation */}
      <section className="border-t border-mist bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading
            as="h2"
            title="Automation we deliver"
            description="High-level categories only; specifics are scoped per engagement. Current inventory — not a permanent ceiling."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {automationCategories.map((category) => (
              <li
                key={category.slug}
                className="flex flex-col rounded border border-mist bg-white px-5 py-4"
              >
                <p className="text-sm font-medium text-ink">{category.name}</p>
                <Link
                  href={buildContactPageHref({
                    intent: "automation",
                    capabilitySlug: category.slug,
                  })}
                  className="mt-3 text-sm font-medium text-brand hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Automate this process
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button
              href={buildContactPageHref({ intent: "assessment" })}
              variant="secondary"
            >
              Request an Automation Assessment
            </Button>
          </div>
        </Container>
      </section>

      {/* DARK CTA */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start gap-8 rounded border border-white/10 bg-ink-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <SectionHeading
              as="h2"
              tone="dark"
              title="Talk to HandzJ Tech"
              description="Reach us by phone, WhatsApp, or email — tell us which product or process you care about."
            />
            <div className="flex flex-shrink-0 flex-wrap gap-4">
              <Button href={buildContactPageHref({ intent: "general" })}>
                Contact us
              </Button>
              <Button
                href={buildWhatsAppUrl({ intent: "general" })}
                external
                variant="secondary"
              >
                WhatsApp
              </Button>
              <Link
                href="/solutions"
                className="inline-flex min-h-[44px] items-center text-sm font-medium text-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                See our solutions
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

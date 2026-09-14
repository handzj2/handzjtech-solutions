import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import {
  company,
  products,
  automationCategories,
  buildContactPageHref,
  buildWhatsAppUrl,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Software and automation solutions from HandzJ Tech Solutions: lending platforms, business-management software, and process automation.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-mist bg-ivory">
        <Container className="py-16 sm:py-20">
          <div className="system-line mb-6 max-w-[10rem] text-brand" aria-hidden="true">
            <span className="system-line-bar" />
          </div>
          <SectionHeading
            as="h1"
            title="Solutions"
            description={`${company.tagline} We work across two areas: software we build, and automation we deliver on top of the systems you already use.`}
          />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/65">
            Path: identify a problem or capability → see what HandzJ publishes
            today → start a conversation with context. New verified capabilities
            can be added later without redesigning this structure.
          </p>
        </Container>
      </section>

      {/* Software */}
      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <p className="text-sm font-medium text-brand">Software</p>
          </div>
          <SectionHeading
            as="h2"
            tone="dark"
            title="Software solutions"
            description="Lending and business-management platforms. Full feature detail is published once verified from each product."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col rounded border border-white/10 bg-ink-soft p-6"
              >
                <p className="text-xs font-medium text-brand">{product.category}</p>
                <p className="mt-2 text-base font-semibold text-white">{product.name}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                  {product.summary}
                </p>
                <Link
                  href={buildContactPageHref({
                    intent: "product",
                    productSlug: product.slug,
                  })}
                  className="mt-4 text-sm font-medium text-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Discuss this product
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/products"
              className="text-sm font-medium text-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              See all products →
            </Link>
          </div>
        </Container>
      </section>

      {/* Automation — problem → capability → conversation */}
      <section className="border-t border-mist bg-ivory py-16 sm:py-20">
        <Container>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <p className="text-sm font-medium text-brand">Automation</p>
          </div>
          <SectionHeading
            as="h2"
            title="Automation solutions"
            description="We automate the manual, repetitive work behind day-to-day operations. Each engagement is scoped to the specific process — the categories below describe the kind of work, not a fixed package."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {automationCategories.map((category) => (
              <div
                key={category.slug}
                className="flex flex-col rounded border border-mist bg-white p-6"
              >
                <p className="text-xs font-medium text-brand">Capability</p>
                <p className="mt-2 text-base font-semibold text-ink">{category.name}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={buildContactPageHref({
                      intent: "automation",
                      capabilitySlug: category.slug,
                    })}
                    className="text-sm font-medium text-brand hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    Automate this process
                  </Link>
                  <Link
                    href={buildWhatsAppUrl({
                      intent: "automation",
                      subjectLabel: category.name,
                    })}
                    className="text-sm font-medium text-ink/70 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start gap-4 rounded border border-mist bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-ink">
                Not sure which process to start with?
              </p>
              <p className="mt-1 text-sm text-ink/65">
                Request an automation assessment — we&apos;ll help you narrow the scope.
              </p>
            </div>
            <Button href={buildContactPageHref({ intent: "assessment" })}>
              Request an Automation Assessment
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 rounded border border-white/10 bg-ink-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <SectionHeading
              as="h2"
              tone="dark"
              title="Not sure which fits?"
              description="Tell us what you're trying to solve and we'll point you to the right product or automation approach."
            />
            <Button href={buildContactPageHref({ intent: "general" })}>
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import {
  products,
  buildContactPageHref,
  buildWhatsAppUrl,
  buildMailtoUrl,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description: "Lending and business-management software from HandzJ Tech Solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-mist bg-ivory">
        <Container className="py-16 sm:py-20">
          <div className="system-line mb-6 max-w-[10rem] text-brand" aria-hidden="true">
            <span className="system-line-bar" />
          </div>
          <SectionHeading
            as="h1"
            title="Products"
            description="Four systems, covering lending, loan management, and point-of-sale/business management. Detailed feature pages are published once each product's content is verified — for now, here's what each one is. Current inventory is not a permanent ceiling."
          />
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col justify-between rounded border border-white/10 bg-ink-soft p-6 sm:p-8"
              >
                <div>
                  <p className="text-xs font-medium text-brand">{product.category}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{product.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {product.summary}
                  </p>
                </div>
                <div className="mt-8 space-y-4 border-t border-white/10 pt-4">
                  <p className="text-xs text-white/40">
                    Detailed page pending verified content.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      href={buildContactPageHref({
                        intent: "demo",
                        productSlug: product.slug,
                      })}
                    >
                      Request a Demo
                    </Button>
                    <Button
                      href={buildWhatsAppUrl({
                        intent: "product",
                        subjectLabel: product.name,
                      })}
                      external
                      variant="secondary"
                    >
                      Discuss on WhatsApp
                    </Button>
                    <Link
                      href={buildMailtoUrl({
                        intent: "product",
                        subjectLabel: product.name,
                      })}
                      className="inline-flex min-h-[44px] items-center text-sm font-medium text-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      Email about this product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-mist bg-ivory py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 rounded border border-mist bg-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <SectionHeading
              as="h2"
              title="Want a walkthrough?"
              description="Ask us for a demo of any of these systems, over a call or WhatsApp — with the product name included so we know where to start."
            />
            <div className="flex flex-shrink-0 flex-wrap gap-4">
              <Button href={buildContactPageHref({ intent: "demo" })}>
                Request a Demo
              </Button>
              <Button
                href={buildWhatsAppUrl({ intent: "demo" })}
                external
                variant="secondary"
              >
                WhatsApp us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

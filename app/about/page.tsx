import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { company, contact, contactLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${company.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-mist bg-ivory">
        <Container className="py-16 sm:py-20">
          <div className="system-line mb-6 max-w-[10rem] text-brand" aria-hidden="true">
            <span className="system-line-bar" />
          </div>
          <SectionHeading
            as="h1"
            title="About HandzJ Tech"
            description={company.tagline}
          />
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded border border-white/10 bg-ink-soft p-6">
              <p className="text-sm font-semibold text-white">What we build</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Lending and business-management software, plus automation for
                the manual work behind those systems.
              </p>
            </div>
            <div className="rounded border border-white/10 bg-ink-soft p-6">
              <p className="text-sm font-semibold text-white">Where we work</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {company.market}
              </p>
            </div>
            <div className="rounded border border-white/10 bg-ink-soft p-6">
              <p className="text-sm font-semibold text-white">How we work</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {company.serviceModel}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-mist bg-ivory py-16 sm:py-20">
        <Container>
          <SectionHeading
            as="h2"
            title="A note on what's on this site"
            description="We publish what we can verify, and mark the rest as pending rather than guess."
          />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/70">
            We don&apos;t yet publish a company history, team bios, an office
            address, or client statistics on this site — that content is
            pending and will be added once it&apos;s confirmed. If you&apos;d like to
            know more about us directly, reach out by phone, WhatsApp, or
            email.
          </p>
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 rounded border border-white/10 bg-ink-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <SectionHeading
              as="h2"
              tone="dark"
              title="Get in touch"
              description={contact.email}
            />
            <div className="flex flex-shrink-0 flex-wrap gap-4">
              <Button href="/contact">Contact us</Button>
              <Button href={contactLinks.whatsappHref} external variant="secondary">
                WhatsApp us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

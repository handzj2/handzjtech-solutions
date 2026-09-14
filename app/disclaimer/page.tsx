import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { contact, contactLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "General disclaimer for the HandzJ Tech Solutions website.",
};

export default function DisclaimerPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Disclaimer"
        description="Important limits on how information on this website should be read."
      />
      <div className="mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-ink/80">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">1. General information only</h2>
          <p>
            Content on this website is for general business information. It is
            not legal, financial, investment, tax, or regulated professional
            advice. You should obtain advice appropriate to your situation
            before making decisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">2. Software and automation descriptions</h2>
          <p>
            Product names and short summaries describe systems at a high level.
            They are not a complete feature list, performance guarantee, or
            promise of fitness for a particular lending, collections, or
            operational process. Suitability is confirmed only through direct
            discussion and any written agreement that follows.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">3. Projects</h2>
          <p>
            Project names published on this site identify client work at a high
            level. Unless a verified case study is published, project entries do
            not claim outcomes, savings, timelines, or endorsements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">4. Demos and conversations</h2>
          <p>
            Requesting a demo or starting a WhatsApp or email conversation does
            not create a binding commercial contract, pricing commitment, or
            service-level agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">5. External links and channels</h2>
          <p>
            Phone, email, and WhatsApp open tools we do not operate. We are not
            responsible for their availability or their handling of your data
            beyond our own use of messages you choose to send us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">6. Contact</h2>
          <p>
            Questions:{" "}
            <a className="text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" href={contactLinks.emailHref}>
              {contact.email}
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-ink/50">Last updated: September 2026</p>
      </div>
    </Container>
  );
}

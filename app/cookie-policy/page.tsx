import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { contact, contactLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the HandzJ Tech Solutions website uses cookies.",
};

export default function CookiePolicyPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Cookie Policy"
        description="What this website does with cookies and similar technologies."
      />
      <div className="mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-ink/80">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">1. Current practice</h2>
          <p>
            HandzJ Tech Solutions does not intentionally set analytics,
            advertising, or marketing cookies on this website. We do not
            currently run an analytics SDK, advertising pixel, or cookie-consent
            banner because non-essential tracking is not active.
          </p>
          <p>
            Hosting and delivery infrastructure may use technical mechanisms
            required to operate the site securely (for example standard server
            logs). Those are operational, not advertising tools we configure for
            marketing measurement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">2. Local storage and similar</h2>
          <p>
            Our application code does not use browser local storage or session
            storage to track you for marketing. Contact-page context from URL
            parameters is shown in the page for that visit only and is not
            written by us into long-term browser storage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">3. Third-party apps</h2>
          <p>
            If you open WhatsApp, your email client, or a phone dialler, those
            applications may use their own cookies or identifiers under their
            policies. That is outside this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">4. If this changes</h2>
          <p>
            If we introduce non-essential cookies or analytics, we will update
            this policy and provide any notice or control required before those
            technologies are switched on.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">5. Contact</h2>
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

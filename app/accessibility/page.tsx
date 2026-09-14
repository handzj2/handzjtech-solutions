import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { contact, contactLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility approach for the HandzJ Tech Solutions website.",
};

export default function AccessibilityPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Accessibility"
        description="How we approach usability of this website."
      />
      <div className="mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-ink/80">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">1. Our aim</h2>
          <p>
            We aim for this site to be usable with a keyboard, with visible
            focus states, clear structure, readable contrast, and respect for
            reduced-motion preferences. Touch targets are sized for practical
            use on mobile devices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">2. Known scope</h2>
          <p>
            The site is a static marketing and information experience with
            navigation, content pages, and contact links. There is no complex
            interactive application or account area on this site at present.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">3. Feedback</h2>
          <p>
            If you encounter a barrier, please email{" "}
            <a className="text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" href={contactLinks.emailHref}>
              {contact.email}
            </a>{" "}
            with the page URL and a short description of the problem. We will
            review accessibility reports in the ordinary course of business. A
            formal maximum response timeframe has not been published yet; we
            still welcome reports.
          </p>
        </section>

        <p className="text-xs text-ink/50">Last updated: September 2026</p>
      </div>
    </Container>
  );
}

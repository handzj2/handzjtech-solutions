import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { contact, contactLinks, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the HandzJ Tech Solutions website.",
};

export default function TermsOfServicePage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Terms of Service"
        description={`Terms for using the ${company.name} public website.`}
      />
      <div className="mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-ink/80">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">1. About these terms</h2>
          <p>
            These terms apply to your use of this website only. They do not
            automatically create a contract for software development, automation
            work, consulting, licensing, support, or other paid services. Any
            such engagement is governed by a separate agreement between you and
            HandzJ Tech Solutions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">2. The website</h2>
          <p>
            This site is a public information and marketing website. It describes
            products, automation categories, and contact channels based on
            verified information we choose to publish. Content may be incomplete
            or updated as more detail is verified.
          </p>
          <p>
            Product names and short summaries are not a full specification. Demo
            or discussion requests are invitations to talk, not guarantees of
            outcome, pricing, or availability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">3. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Use the site in a way that is unlawful or harms the site or other users</li>
            <li>Attempt to disrupt, probe, or overload the site</li>
            <li>Misrepresent your identity when contacting us</li>
            <li>Scrape or copy content for competing commercial reuse without permission</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">4. Intellectual property</h2>
          <p>
            Text, branding, and layout on this site belong to HandzJ Tech
            Solutions or its licensors unless otherwise stated. You may view and
            share links for legitimate business enquiry. You may not copy the
            site as a template for another commercial product without permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">5. No warranties on website content</h2>
          <p>
            Information is provided in good faith for general business
            information. We do not warrant that the site is uninterrupted,
            error-free, or that published descriptions match a future product
            release. Nothing on the site is professional legal, financial, or
            investment advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">6. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by applicable law, HandzJ Tech
            Solutions is not liable for indirect or consequential loss arising
            solely from your use of this website or reliance on general
            information published here. This does not limit liability that cannot
            be limited under applicable law, or liability under a separate signed
            service agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">7. Third-party services</h2>
          <p>
            Links to phone, email, or WhatsApp open third-party applications or
            services. Their terms and privacy practices apply once you leave this
            site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">8. Governing law</h2>
          <p>
            These website terms are intended to be governed by the laws of the
            Republic of Uganda, without prejudice to mandatory protections that
            may apply to you in your place of residence. Courts in Uganda may
            have jurisdiction over disputes arising from use of this website,
            subject to any rights you have under mandatory local law.
          </p>
          <p>
            This choice of law statement should be reviewed by qualified legal
            counsel for your situation; it is not legal advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">9. Contact</h2>
          <p>
            Questions about these terms:{" "}
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

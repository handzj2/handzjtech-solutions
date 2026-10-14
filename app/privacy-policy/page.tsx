import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { contact, contactLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How HandzJ Tech Solutions handles information in connection with this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Privacy Policy"
        description="This policy describes how HandzJ Tech Solutions (“HandzJ”, “we”, “us”) handles information in connection with this public website."
      />
      <div className="prose-legal mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-ink/80">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">1. Who we are</h2>
          <p>
            HandzJ Tech Solutions operates this website as a public information
            and marketing site about software and automation capabilities.
            Primary market: Uganda, with services able to extend beyond Uganda.
          </p>
          <p>
            Contact for privacy questions:{" "}
            <a className="text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" href={contactLinks.emailHref}>
              {contact.email}
            </a>
            . Phone:{" "}
            <a className="text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" href={contactLinks.phoneHref}>
              {contact.phone.display}
            </a>
            . WhatsApp:{" "}
            <a className="text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" href={contactLinks.whatsappHref} target="_blank" rel="noopener noreferrer">
              {contact.whatsapp.display}
            </a>
            .
          </p>
          <p>
            We do not publish a physical office address on this site at this time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">2. What this website does — and does not do</h2>
          <p>This website currently:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Displays public information about HandzJ products, solutions, projects, and contact channels</li>
            <li>Provides links to call, email, or message us on WhatsApp</li>
            <li>
              May show display-only context on the contact page when you open a
              link that includes approved query parameters (for example intent
              or product name), so you and we can see what you were looking at
            </li>
          </ul>
          <p>This website does <strong>not</strong> currently operate:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>User accounts or logins</li>
            <li>A customer database or CRM on this site</li>
            <li>A contact-form backend that stores enquiries on our servers</li>
            <li>A newsletter signup</li>
            <li>Analytics or advertising tracking software installed by us</li>
            <li>Payment processing or a customer portal</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">3. Information you may share with us</h2>
          <p>
            If you contact us by phone, email, or WhatsApp, you choose what to
            send. That may include your name, phone number, email address, and
            the content of your message. Prefill text we generate for WhatsApp
            or email is only a starting draft; you can edit or delete it before
            sending.
          </p>
          <p>
            Messages sent through WhatsApp or email are processed by those
            providers under their own terms and privacy policies. We do not
            control how WhatsApp or your email provider stores data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">4. Contact-page query parameters</h2>
          <p>
            Some links on this site open{" "}
            <code className="text-xs">/contact</code> with optional parameters
            such as intent, product, capability, or project. Those values are
            used only to display short context on the page (for example “You’re
            asking about…”) and to prepare optional WhatsApp or email drafts.
          </p>
          <p>
            They are <strong>not</strong> stored by this website in a database,
            are not used as advertising tracking, and unknown or invalid values
            are ignored. Closing the page ends the display of that context.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">5. Technical data and cookies</h2>
          <p>
            Like most websites, our hosting provider may process standard
            technical request data (such as IP address, browser type, and pages
            requested) in server logs needed to operate and secure the service.
            We do not run a separate analytics product on this site at present.
          </p>
          <p>
            We do not intentionally set advertising or analytics cookies. See
            the Cookie Policy for more detail. If that changes, we will update
            this policy and the Cookie Policy before introducing non-essential
            tracking.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">6. How we use information</h2>
          <p>When you contact us, we use the information you send to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Respond to your enquiry</li>
            <li>Understand which product, capability, or project you asked about (if you included that context)</li>
            <li>Carry on a business conversation you initiated</li>
          </ul>
          <p>We do not sell personal information.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">7. Retention</h2>
          <p>
            This website does not operate an enquiry database. Messages you send
            by email or WhatsApp remain in those channels according to how you
            and we use them. We do not publish a fixed multi-year retention
            schedule for website enquiries because we do not run a separate
            website-side store of those messages.
          </p>
          <p>
            If we later introduce a form processor or similar system, we will
            update this policy with retention details before it goes live.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">8. Your rights and applicable law</h2>
          <p>
            HandzJ Tech Solutions is based in Uganda. Uganda’s Data Protection
            and Privacy Act, 2019 sets out principles for fair and lawful
            handling of personal data, purpose limitation, minimality, quality,
            transparency, and security, and provides data-subject rights such as
            access and correction in defined circumstances.
          </p>
          <p>
            To ask about personal information you have sent us, or to request
            access or correction where applicable, contact{" "}
            <a className="text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" href={contactLinks.emailHref}>
              {contact.email}
            </a>
            .
          </p>
          <p>
            This policy is informational and is not a substitute for professional
            legal advice. Registration with Uganda’s Personal Data Protection
            Office (PDPO), appointment of a data protection officer, and related
            compliance steps are operational matters for HandzJ as a business;
            their current status is not asserted on this page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-ink">9. Changes</h2>
          <p>
            We may update this policy when the website’s behaviour changes (for
            example if analytics or a contact form is introduced). The updated
            text will be posted on this page.
          </p>
        </section>

        <p className="text-xs text-ink/50">Last updated: September 2026</p>
      </div>
    </Container>
  );
}

import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import {
  contact,
  contactLinks,
  resolveContactContext,
  buildWhatsAppUrl,
  buildMailtoUrl,
  type ContactIntent,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach HandzJ Tech Solutions by phone, WhatsApp, or email.",
};

type ContactPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function ContactPage({ searchParams = {} }: ContactPageProps) {
  const ctx = resolveContactContext({
    intent: searchParams.intent,
    product: searchParams.product,
    capability: searchParams.capability,
    project: searchParams.project,
  });

  const intent: ContactIntent = ctx.intent ?? "general";
  const subjectLabel = ctx.subjectLabel ?? undefined;

  const whatsappHref = buildWhatsAppUrl({ intent, subjectLabel });
  const emailHref = buildMailtoUrl({ intent, subjectLabel });

  const contextSummary =
    ctx.subjectLabel || ctx.intentLabel
      ? [ctx.intentLabel, ctx.subjectLabel].filter(Boolean).join(" · ")
      : null;

  return (
    <>
      <section className="border-b border-mist bg-ivory">
        <Container className="py-16 sm:py-20">
          <div className="system-line mb-6 max-w-[10rem] text-brand" aria-hidden="true">
            <span className="system-line-bar" />
          </div>
          <SectionHeading
            as="h1"
            title="Contact"
            description="Reach us directly — a contact form will be added once a processor is confirmed."
          />
          {contextSummary ? (
            <p className="mt-6 max-w-2xl rounded border border-mist bg-white px-4 py-3 text-sm text-ink">
              <span className="font-medium text-brand">You&apos;re asking about:</span>{" "}
              {contextSummary}
            </p>
          ) : null}
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={contactLinks.phoneHref}>
              Call {contact.phone.display}
            </Button>
            <Button href={whatsappHref} external variant="secondary">
              WhatsApp {contact.whatsapp.display}
            </Button>
            <Button href={emailHref} variant="secondary">
              Email {contact.email}
            </Button>
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/55">
            We currently work by phone, WhatsApp, email, remotely, or by arranged
            on-site visit. No physical office address is published at this time.
          </p>
        </Container>
      </section>
    </>
  );
}

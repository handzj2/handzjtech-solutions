import Container from "@/components/Container";
import Button from "@/components/Button";
import { company } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
        <div className="system-line mb-6 max-w-[8rem] text-brand" aria-hidden="true">
          <span className="system-line-bar" />
        </div>
        <p className="text-sm font-medium text-brand">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Head back to the {company.name} homepage, or get in touch and we&apos;ll
          point you the right way.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}

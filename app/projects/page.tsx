import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import {
  projects,
  automationCategories,
  buildContactPageHref,
  buildWhatsAppUrl,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Client work from HandzJ Tech Solutions.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-mist bg-ivory">
        <Container className="py-16 sm:py-20">
          <div className="system-line mb-6 max-w-[10rem] text-brand" aria-hidden="true">
            <span className="system-line-bar" />
          </div>
          <SectionHeading
            as="h1"
            title="Projects"
            description="Client engagements, separate from our own products. Case-study detail is added once it's verified with the client."
          />
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="relative overflow-hidden rounded border border-white/10 bg-ink-soft p-6 sm:p-8"
              >
                <div
                  className="absolute inset-y-0 left-0 w-1 bg-brand"
                  aria-hidden="true"
                />
                <div className="pl-4">
                  <p className="text-xs font-medium text-brand">{project.note}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{project.name}</p>
                  <p className="mt-6 border-t border-white/10 pt-4 text-xs text-white/40">
                    Full write-up pending verified content.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button
                      href={buildContactPageHref({
                        intent: "project",
                        projectSlug: project.slug,
                      })}
                    >
                      Discuss a similar project
                    </Button>
                    <Button
                      href={buildWhatsAppUrl({
                        intent: "project",
                        subjectLabel: project.name,
                      })}
                      external
                      variant="secondary"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-mist bg-ivory py-16 sm:py-20">
        <Container>
          <SectionHeading
            as="h2"
            title="The kind of work client projects involve"
            description="Client engagements typically draw on the same automation categories we offer directly — scoped to that client's systems and process."
          />
          <ul className="mt-10 flex flex-wrap gap-3">
            {automationCategories.map((category) => (
              <li
                key={category.slug}
                className="rounded border border-mist bg-white px-4 py-2 text-sm text-ink"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 rounded border border-white/10 bg-ink-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <SectionHeading
              as="h2"
              tone="dark"
              title="Have a project in mind?"
              description="Tell us what you're working on and we'll let you know if it's a fit."
            />
            <Button href={buildContactPageHref({ intent: "project" })}>
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

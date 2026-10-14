import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ProjectPreview from "@/components/ProjectPreview";
import {
  projects,
  automationCategories,
  buildContactPageHref,
  buildWhatsAppUrl,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live client websites and HandzJ product deployments — Runda Technologies, Busia Farmers Supplies, Bingo Vintage, Digital Receipts, HZ SENTE, and HZ Finance.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — HandzJ Tech Solutions",
    description:
      "Live client websites and HandzJ product deployments — Runda Technologies, Busia Farmers Supplies, Bingo Vintage, Digital Receipts, HZ SENTE, and HZ Finance.",
    url: "/projects",
    type: "website",
  },
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
            description="Client websites and HandzJ product deployments. Load a live preview where the site allows embedding, or open the full site to evaluate the work."
          />
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <ul className="grid gap-10 lg:gap-14">
            {projects.map((project, index) => (
              <li
                key={project.slug}
                className="relative overflow-hidden rounded border border-white/10 bg-ink-soft"
              >
                <div
                  className="absolute inset-y-0 left-0 w-1 bg-brand"
                  aria-hidden="true"
                />
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:border-white/10">
                    <ProjectPreview
                      name={project.name}
                      liveUrl={project.liveUrl}
                      image={project.image}
                      imageAlt={project.imageAlt}
                      embeddable={project.embeddable}
                      priority={index === 0}
                      tone="dark"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 pl-7 sm:p-8 sm:pl-9">
                    <p className="text-xs font-medium text-brand">{project.note}</p>
                    <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      {project.name}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                      {project.description}
                    </p>
                    {project.embeddable ? (
                      <p className="mt-3 text-xs text-white/45">
                        Interactive live preview available — load it from the
                        panel, or open the full site in a new tab.
                      </p>
                    ) : project.liveUrl ? (
                      <p className="mt-3 text-xs text-white/45">
                        This site does not allow embedding. Use the screenshot
                        and open the full site to review the work.
                      </p>
                    ) : (
                      <p className="mt-3 text-xs text-white/45">
                        Desktop application — no public web URL. Screenshot from
                        the installed product UI.
                      </p>
                    )}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.liveUrl ? (
                        <Button href={project.liveUrl} external>
                          Visit live site
                        </Button>
                      ) : null}
                      <Button
                        href={buildContactPageHref({
                          intent: "project",
                          projectSlug: project.slug,
                        })}
                        variant="secondary"
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
              </li>
            ))}
          </ul>
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

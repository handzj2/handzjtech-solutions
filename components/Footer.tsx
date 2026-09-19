import Link from "next/link";
import Container from "@/components/Container";
import { company, contact, contactLinks, legalNav } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">{company.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {company.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              <li>
                <a
                  className="transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  href={contactLinks.phoneHref}
                >
                  {contact.phone.display}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  href={contactLinks.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {contact.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  href={contactLinks.emailHref}
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/45">
            © {year} {company.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

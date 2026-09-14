import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import MobileNav from "@/components/MobileNav";
import { company, primaryNav, demoCta } from "@/lib/content";

export default function Header() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-ink/20 bg-ink text-white">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {company.name}
        </Link>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-7">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden sm:block">
          <Button href={demoCta.href}>{demoCta.label}</Button>
        </div>

        <MobileNav items={[...primaryNav]} cta={demoCta} />
      </Container>
    </header>
  );
}

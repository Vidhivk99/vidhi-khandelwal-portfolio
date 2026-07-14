import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Vidhi Khandelwal home">
        Vidhi Khandelwal
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#projects">Projects</Link>
        <Link href="/#experience">Experience</Link>
        <a className="header-github" href="https://github.com/Vidhivk99" target="_blank" rel="noreferrer">
          <Github aria-hidden="true" size={17} />
          GitHub
        </a>
      </nav>
    </header>
  );
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}

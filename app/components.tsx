import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Vidhi Khandelwal home">
        VK
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#projects">Projects</Link>
        <Link href="/#experience">Work</Link>
        <Link href="/#contact">Contact</Link>
        <a
          className="header-social"
          href="https://github.com/Vidhivk99"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <Github aria-hidden="true" size={16} />
        </a>
        <a
          className="header-social"
          href="https://www.linkedin.com/in/vidhivk"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <Linkedin aria-hidden="true" size={16} />
        </a>
      </nav>
    </header>
  );
}

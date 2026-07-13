import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Linkedin } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Vidhi Khandelwal home">
        VK<span>/26</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#writing">Writing</Link>
        <Link href="/#experience">Experience</Link>
        <a href="https://github.com/Vidhivk99" target="_blank" rel="noreferrer">
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

export function ArticleHeader({
  kicker,
  title,
  dek,
  meta,
}: {
  kicker: string;
  title: string;
  dek: string;
  meta: string;
}) {
  return (
    <>
      <SiteHeader />
      <header className="article-hero">
        <Link className="back-link" href="/#writing">
          <ArrowLeft aria-hidden="true" size={17} />
          Writing
        </Link>
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="article-dek">{dek}</p>
        <p className="article-meta">{meta}</p>
      </header>
    </>
  );
}

export function ArticleFooter() {
  return (
    <footer className="article-footer">
      <div>
        <p className="kicker">Continue the conversation</p>
        <h2>Engineering evidence should be inspectable.</h2>
      </div>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/vidhivk" target="_blank" rel="noreferrer">
          <Linkedin aria-hidden="true" size={18} />
          LinkedIn
        </a>
        <a href="https://github.com/Vidhivk99" target="_blank" rel="noreferrer">
          <Github aria-hidden="true" size={18} />
          GitHub
        </a>
      </div>
    </footer>
  );
}

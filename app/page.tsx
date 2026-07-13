import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { ExternalLink, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: "Vidhi Khandelwal | AI and Software Engineer",
  description:
    "AI and software engineer building data-intensive products, agent workflows, and dependable execution systems.",
};

const projects = [
  {
    number: "01",
    status: "Live",
    statusClass: "status-live",
    title: "From prompt to inspectable data work",
    repo: "Data-Visualization-Agent",
    summary:
      "A major redesign of an existing Streamlit prototype into a multi-page analytics workspace with constrained code generation, E2B execution, normalized outputs, session isolation, deterministic public demo mode, tests, and CI.",
    evidence: ["Public demo", "10 tests", "Python 3.11 + 3.12 CI", "4 owner-attributed contributions"],
    image: "https://opengraph.githubassets.com/1/Vidhivk99/Data-Visualization-Agent",
    links: [
      ["Open live demo", "https://vidhi-data-visualization-agent.streamlit.app"],
      ["Read the repository", "https://github.com/Vidhivk99/Data-Visualization-Agent"],
    ],
  },
  {
    number: "02",
    status: "Merged",
    statusClass: "status-merged",
    title: "Hardening a PPO submission boundary",
    repo: "DIAMBRA PPO",
    summary:
      "A merged contribution that repaired checkpoint handoff, validated configuration and model paths, bounded evaluation, added deterministic inference, and introduced a 15-test suite with a two-version CI matrix.",
    evidence: ["657 additions", "126 deletions", "15 tests", "Python 3.10 + 3.11 checks passed"],
    image: "https://opengraph.githubassets.com/1/Ketan-Kapse/diambra_ppo",
    links: [
      ["Inspect merged PR #2", "https://github.com/Ketan-Kapse/diambra_ppo/pull/2"],
      ["View passing CI", "https://github.com/Ketan-Kapse/diambra_ppo/actions/runs/29271330024"],
    ],
  },
  {
    number: "03",
    status: "Open PR",
    statusClass: "status-open",
    title: "Sanitizing deep links before a PTY",
    repo: "Hermes Agent",
    summary:
      "An upstream security proposal that sanitizes the /chat?learn= path before browser-controlled input reaches an embedded terminal. The initial control-character fix is Vidhi's; a later collaborator refinement adds ANSI-sequence handling.",
    evidence: ["Open upstream proposal", "56 additions", "4 deletions", "3 files"],
    image: "https://opengraph.githubassets.com/1/NousResearch/hermes-agent",
    links: [
      ["Review open PR #63855", "https://github.com/NousResearch/hermes-agent/pull/63855"],
      ["See Vidhi's initial fix", "https://github.com/Vidhivk99/hermes-agent/commit/f727447c3ab6f09b516192c413504bb9b96ebe31"],
    ],
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-field" aria-hidden="true">
          <span className="field-line field-line-a" />
          <span className="field-line field-line-b" />
          <span className="field-node node-a">CSV</span>
          <span className="field-node node-b">MODEL</span>
          <span className="field-node node-c">SANDBOX</span>
          <span className="field-node node-d">RESULT</span>
        </div>
        <div className="hero-copy">
          <p className="kicker">AI + SOFTWARE ENGINEERING / WASHINGTON, DC</p>
          <h1 id="hero-title">Vidhi Khandelwal</h1>
          <p className="hero-lede">
            Building data-intensive products, agent workflows, and dependable execution systems.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="https://vidhi-data-visualization-agent.streamlit.app" target="_blank" rel="noreferrer">
              Open live project
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a className="icon-action" href="https://github.com/Vidhivk99" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github aria-hidden="true" size={20} />
            </a>
            <a className="icon-action" href="https://www.linkedin.com/in/vidhivk" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin aria-hidden="true" size={20} />
            </a>
          </div>
        </div>
        <div className="hero-proof">
          <span>01 live demo</span>
          <span>01 merged OSS PR</span>
          <span>01 upstream proposal in review</span>
        </div>
        <a className="scroll-cue" href="#work" aria-label="Jump to selected work">
          <ArrowDown aria-hidden="true" size={18} />
        </a>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="kicker">Selected work</p>
          <h2>Systems with visible evidence.</h2>
          <p>Each project links to the code, review state, or running product behind the claim.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={`${project.repo} GitHub repository preview`} />
                <span className={`status ${project.statusClass}`}>{project.status}</span>
              </div>
              <div className="project-copy">
                <div className="project-index">
                  <span>{project.number}</span>
                  <span>{project.repo}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="evidence-list" aria-label={`${project.repo} evidence`}>
                  {project.evidence.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-links">
                  {project.links.map(([label, href]) => (
                    <ExternalLink href={href} key={href}>{label}</ExternalLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="writing-section" id="writing">
        <div className="section-heading">
          <p className="kicker">Technical writing</p>
          <h2>How the boundaries were made explicit.</h2>
        </div>
        <div className="writing-list">
          <Link href="/writing/inspectable-analytics-workspace" className="writing-row">
            <span className="writing-number">01</span>
            <span>
              <strong>From Demo to Inspectable Analytics Workspace</strong>
              <small>Prompts, generated Python, sandbox execution, output normalization, and a safer public release boundary.</small>
            </span>
            <ArrowUpRight aria-hidden="true" size={21} />
          </Link>
          <Link href="/writing/agent-boundaries" className="writing-row">
            <span className="writing-number">02</span>
            <span>
              <strong>Hardening Agent Boundaries</strong>
              <small>Two integration failures: PPO checkpoints and browser-controlled input entering an embedded PTY.</small>
            </span>
            <ArrowUpRight aria-hidden="true" size={21} />
          </Link>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading compact-heading">
          <p className="kicker">Experience + education</p>
          <h2>Across AI, data, and software systems.</h2>
        </div>
        <div className="timeline">
          <div><span>Current</span><strong>Optimoz</strong><p>AI engineering and data-intensive product work.</p></div>
          <div><span>Prior</span><strong>Wipro</strong><p>Data and machine-learning engineering.</p></div>
          <div><span>Prior</span><strong>Zensar</strong><p>Software engineering foundations.</p></div>
          <div><span>Graduate</span><strong>George Washington University</strong><p>Advanced study in the United States.</p></div>
          <div><span>Undergraduate</span><strong>D. Y. Patil</strong><p>Engineering education in India.</p></div>
        </div>
      </section>

      <footer className="home-footer">
        <div>
          <p className="kicker">Contact</p>
          <h2>Let the work do the introduction.</h2>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/vidhivk" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={18} /> LinkedIn</a>
          <a href="https://github.com/Vidhivk99" target="_blank" rel="noreferrer"><Github aria-hidden="true" size={18} /> GitHub</a>
        </div>
      </footer>
    </main>
  );
}

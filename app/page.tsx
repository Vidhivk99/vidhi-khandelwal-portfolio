import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SiteHeader } from "./components";

export const metadata: Metadata = {
  title: "Vidhi Khandelwal | AI and Software Engineer",
  description:
    "Portfolio of Vidhi Khandelwal, an AI and software engineer building useful, well-engineered data products.",
};

const projects = [
  {
    title: "AI Data Visualization Agent",
    tag: "GEN AI",
    description:
      "Ask questions in plain English and explore the answer through generated Python, charts, tables, and a reviewable execution trail.",
    stack: "Python · Streamlit · E2B",
    href: "https://github.com/Vidhivk99/Data-Visualization-Agent",
    action: "View source",
    featured: true,
  },
  {
    title: "RL Agent for DIAMBRA.ai",
    tag: "REINFORCEMENT LEARNING",
    description:
      "A PPO-based gameplay agent for Dead or Alive++, built to learn from visual observations and structured game state.",
    stack: "Python · PPO · SheepRL · VPT",
    href: "https://docs.diambra.ai/envs/games/doapp/",
    action: "Explore project",
  },
  {
    title: "COVID-19 Mortality Prediction",
    tag: "DATA APPLICATION",
    description:
      "An interactive R and Shiny application for exploring pandemic signals, country-level trends, and interpretable mortality models.",
    stack: "R · Shiny · ggplot2 · dplyr",
    href: "https://github.com/Vidhivk99/Covid-19-Mortality-Prediction",
    action: "View source",
  },
  {
    title: "Tile Placement Solver",
    tag: "ALGORITHMS",
    description:
      "A backtracking search project for structured tile puzzles, with validation, undo support, and a practical command-line workflow.",
    stack: "Python · Search · Algorithms",
    href: "https://github.com/Vidhivk99/Tile-Placement",
    action: "View source",
  },
];

const experience = [
  {
    dates: "2025 - now",
    location: "Rockville, MD",
    title: "Software Engineer",
    company: "Optimoz Inc.",
    description:
      "Working on customer-facing AI features, data workflows, multi-tenant product infrastructure, search, and full-stack delivery.",
  },
  {
    dates: "2021 - 2023",
    location: "Pune, India",
    title: "Data Scientist 2, R&E",
    company: "Wipro Technologies",
    description:
      "Built machine-learning services and data pipelines across Spark, Hadoop, Airflow, Snowflake, and cloud-based ML tooling.",
  },
  {
    dates: "2020 - 2021",
    location: "Pune, India",
    title: "Technical Data Scientist",
    company: "Zensar Technologies",
    description:
      "Worked on NLP pipelines, model evaluation, forecasting, and data products that supported day-to-day decision making.",
  },
];

const skills = [
  "Python",
  "TypeScript",
  "React / Next.js",
  "LLM applications",
  "RAG & search",
  "PyTorch",
  "Data visualization",
  "Spark / Airflow",
  "AWS / Docker",
  "SQL / MongoDB",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />
        <div className="hero-content">
          <p className="availability"><span /> Open to new opportunities</p>
          <p className="hero-kicker">AI &amp; SOFTWARE ENGINEER</p>
          <h1 id="hero-title">Building thoughtful tools for <span>AI and data.</span></h1>
          <p className="hero-intro">
            Hi! I&apos;m Vidhi. I design and build tools that bring AI and data workflows closer to the people who use them. From intelligent applications to interactive analytics, I care about useful systems with strong engineering underneath.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects <ArrowDown aria-hidden="true" size={16} />
            </a>
            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-label">SELECTED WORK</p>
          <h2 id="projects-title">Projects</h2>
          <p>Some things I&apos;ve enjoyed building across AI, data, and software.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a
              className={`project-card${project.featured ? " project-card-featured" : ""}`}
              href={project.href}
              key={project.title}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-card-topline">
                <p>{project.tag}</p>
                <ArrowUpRight aria-hidden="true" size={19} />
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-card-footer">
                <span>{project.stack}</span>
                <strong>{project.action} <span aria-hidden="true">→</span></strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <p className="section-label">CAREER</p>
          <h2 id="experience-title">Experience</h2>
          <p>Engineering experience across product, data, and applied AI.</p>
        </div>
        <div className="experience-list">
          {experience.map((role) => (
            <article className="experience-card" key={`${role.company}-${role.dates}`}>
              <div className="experience-meta">
                <time>{role.dates}</time>
                <span>{role.location}</span>
              </div>
              <div>
                <h3>{role.title} <span>·</span> {role.company}</h3>
                <p>{role.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="skill-list" aria-label="Technical skills">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-content">
          <p className="section-label">LET&apos;S TALK</p>
          <h2 id="contact-title">Let&apos;s build something useful.</h2>
          <p>
            I&apos;m always happy to connect about AI engineering, data products, or an interesting problem worth working through.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:vidhivk99@gmail.com">
              <Mail aria-hidden="true" size={16} /> Email me
            </a>
            <a className="button button-secondary" href="https://github.com/Vidhivk99" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={16} /> GitHub
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/vidhivk" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

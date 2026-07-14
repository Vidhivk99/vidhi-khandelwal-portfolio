import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { ExternalLink, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: "Vidhi Khandelwal | AI and Software Engineer",
  description:
    "Selected AI, data, and software projects by Vidhi Khandelwal.",
};

const additionalProjects = [
  {
    title: "Tile Placement Solver",
    description:
      "A backtracking search engine with in-place placement, undo, validation, and a command-line workflow for structured tile puzzles.",
    stack: "Python / Search",
    href: "https://github.com/Vidhivk99/Tile-Placement",
  },
  {
    title: "Transformer Anomaly Detection",
    description:
      "Sequence-modeling experiments for identifying anomalous behavior in time-dependent data.",
    stack: "PyTorch / Transformers",
    href: "https://github.com/Vidhivk99/Anomaly-Detection-using-a-Transformer-Model",
  },
  {
    title: "N-Puzzle Solver",
    description:
      "A compact search project exploring state representation and pathfinding for the sliding-tile problem.",
    stack: "Python / Algorithms",
    href: "https://github.com/Vidhivk99/N-Puzzle",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="portfolio-hero" aria-labelledby="hero-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-product"
          src="/projects/data-visualization-agent.png"
          alt="AI Data Visualization Agent workspace"
        />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">AI systems / data products / software engineering</p>
          <h1 id="hero-title">Vidhi Khandelwal</h1>
          <p className="hero-intro">
            I build software that turns complex data and model behavior into products people can inspect, operate, and trust.
          </p>
          <div className="hero-actions">
            <a className="solid-button" href="#projects">
              View projects
              <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a className="round-button" href="https://github.com/Vidhivk99" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github aria-hidden="true" size={20} />
            </a>
            <a className="round-button" href="https://www.linkedin.com/in/vidhivk" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin aria-hidden="true" size={20} />
            </a>
          </div>
        </div>
        <div className="hero-location">
          <MapPin aria-hidden="true" size={15} />
          Washington, DC
        </div>
      </section>

      <section className="project-intro" id="projects">
        <p className="eyebrow">Selected projects</p>
        <h2>Three systems, each built around a different kind of uncertainty.</h2>
      </section>

      <article className="flagship-project">
        <div className="project-heading">
          <div>
            <span className="project-number">01</span>
            <p className="project-type">AI product / live application</p>
          </div>
          <div>
            <h2>AI Data Visualization Agent</h2>
            <p className="project-summary">
              A natural-language analytics workspace that profiles CSV data, generates Python, runs it in an isolated sandbox, and returns the code, chart, table, explanation, and runtime output for review.
            </p>
          </div>
        </div>

        <a className="project-screenshot" href="https://vidhi-data-visualization-agent.streamlit.app" target="_blank" rel="noreferrer" aria-label="Open the live AI Data Visualization Agent">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projects/data-visualization-agent.png" alt="Live AI Data Visualization Agent workspace with bundled retail data" />
          <span>Open live workspace <ArrowUpRight aria-hidden="true" size={18} /></span>
        </a>

        <div className="case-study-grid">
          <section>
            <p className="case-label">The problem</p>
            <h3>Generated analysis is only useful when the work stays visible.</h3>
            <p>Users needed more than a final chart. They needed to understand which file was active, what code ran, where it ran, and how to inspect the output.</p>
          </section>
          <section>
            <p className="case-label">The system</p>
            <h3>A controlled path from question to execution.</h3>
            <p>Dataset profiling and conversation context shape the prompt. Generated Python runs in E2B, while normalized results keep charts, tables, logs, and explanations together.</p>
          </section>
          <section>
            <p className="case-label">The release</p>
            <h3>A safe public mode with a real product surface.</h3>
            <p>The public deployment uses synthetic retail data and deterministic local analysis, so the complete workflow is explorable without credentials or external model calls.</p>
          </section>
        </div>

        <div className="project-footer-row">
          <ul className="stack-list" aria-label="Data Visualization Agent technologies">
            <li>Python</li><li>Streamlit</li><li>Ollama</li><li>E2B</li><li>Pandas</li><li>CI</li>
          </ul>
          <div className="project-links">
            <ExternalLink href="https://vidhi-data-visualization-agent.streamlit.app">Live application</ExternalLink>
            <ExternalLink href="https://github.com/Vidhivk99/Data-Visualization-Agent">Source code</ExternalLink>
          </div>
        </div>
      </article>

      <article className="project-band project-band-rl">
        <div className="project-visual project-visual-dark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projects/diambra-observation.png" alt="Dead Or Alive++ environment observation with health, character, wins, and side state annotations" />
          <p>Environment image: DIAMBRA Arena / Dead Or Alive++</p>
        </div>
        <div className="project-detail">
          <span className="project-number">02</span>
          <p className="project-type">Reinforcement learning / competition agent</p>
          <h2>DIAMBRA Fighting-Game Agent</h2>
          <p className="project-summary">
            A PPO-based autonomous gameplay agent for Dead Or Alive++, built with SheepRL and a video-pretraining representation to learn from visual observations and structured game state.
          </p>
          <dl className="project-facts">
            <div><dt>Result</dt><dd>5th globally</dd></div>
            <div><dt>Policy</dt><dd>Proximal Policy Optimization</dd></div>
            <div><dt>Inputs</dt><dd>Frames + RAM state</dd></div>
          </dl>
          <ul className="stack-list" aria-label="DIAMBRA agent technologies">
            <li>Python</li><li>PPO</li><li>SheepRL</li><li>OpenAI VPT</li>
          </ul>
          <ExternalLink href="https://docs.diambra.ai/envs/games/doapp/">Explore the environment</ExternalLink>
        </div>
      </article>

      <article className="project-band project-band-covid">
        <div className="project-detail">
          <span className="project-number">03</span>
          <p className="project-type">Statistical modeling / interactive dashboard</p>
          <h2>COVID-19 Mortality Prediction</h2>
          <p className="project-summary">
            An R and Shiny application for comparing country-level pandemic signals, inspecting correlations, and fitting an interpretable per-country mortality model from Our World in Data records.
          </p>
          <div className="feature-lines">
            <p>Country and metric comparison over time</p>
            <p>Correlation heatmaps across health signals</p>
            <p>Linear-model predictions with diagnostics</p>
          </div>
          <ul className="stack-list" aria-label="Mortality dashboard technologies">
            <li>R</li><li>Shiny</li><li>ggplot2</li><li>dplyr</li><li>OWID</li>
          </ul>
          <ExternalLink href="https://github.com/Vidhivk99/Covid-19-Mortality-Prediction">View project repository</ExternalLink>
        </div>
        <div className="project-visual project-visual-dashboard">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projects/covid-mortality-dashboard.png" alt="COVID-19 Mortality Prediction Shiny dashboard overview" />
        </div>
      </article>

      <section className="more-projects" aria-labelledby="more-projects-title">
        <div className="more-projects-heading">
          <p className="eyebrow">Additional work</p>
          <h2 id="more-projects-title">Algorithms and model experiments</h2>
        </div>
        <div className="project-index-list">
          {additionalProjects.map((project, index) => (
            <a href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <span>{String(index + 4).padStart(2, "0")}</span>
              <div><h3>{project.title}</h3><p>{project.description}</p></div>
              <small>{project.stack}</small>
              <ArrowUpRight aria-hidden="true" size={20} />
            </a>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-heading">
          <p className="eyebrow">Experience</p>
          <h2>Building across product, data, and applied AI.</h2>
        </div>
        <div className="experience-list">
          <div><span>2025 - now</span><strong>Software Engineer, Optimoz</strong><p>AI platform infrastructure, multi-tenant products, semantic search, and full-stack delivery.</p></div>
          <div><span>2021 - 2023</span><strong>Data Scientist 2, Wipro</strong><p>Machine-learning services and large-scale Spark, Hadoop, Airflow, and Snowflake pipelines.</p></div>
          <div><span>2020 - 2021</span><strong>Technical Data Scientist, Zensar</strong><p>NLP pipelines, model evaluation, and operational forecasting.</p></div>
        </div>
      </section>

      <footer className="home-footer">
        <div>
          <p className="eyebrow">Let&apos;s talk</p>
          <h2>AI products are better when their behavior is visible.</h2>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/vidhivk" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={18} /> LinkedIn</a>
          <a href="https://github.com/Vidhivk99" target="_blank" rel="noreferrer"><Github aria-hidden="true" size={18} /> GitHub</a>
        </div>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import { ArticleFooter, ArticleHeader, ExternalLink } from "@/app/components";

export const metadata: Metadata = {
  title: "From Demo to Inspectable Analytics Workspace | Vidhi Khandelwal",
  description: "A technical case study on turning a natural-language visualization prototype into an inspectable, testable analytics workflow.",
};

export default function InspectableAnalyticsWorkspace() {
  return (
    <main>
      <ArticleHeader
        kicker="Case study / data + agents"
        title="From Demo to Inspectable Analytics Workspace"
        dek="The hard part was not asking a model for a chart. It was making every transition - data, prompt, code, execution, and result - visible enough to inspect."
        meta="Vidhi Khandelwal / 8 minute read / Updated July 2026"
      />
      <article className="article-body">
        <aside className="article-toc">
          <span>In this article</span>
          <a href="#starting-point">Starting point</a>
          <a href="#contract">Prompt contract</a>
          <a href="#execution">Execution boundary</a>
          <a href="#release">Public release</a>
        </aside>
        <div className="article-content">
          <section id="starting-point">
            <p className="dropcap">Natural-language chart demos often compress a long chain of decisions into one apparently magical step. A CSV goes in, a chart comes out, and the user cannot see what happened in between. That is useful for a demo and weak for engineering.</p>
            <p>This project began from Gurpreet Kaur&apos;s AI Data Visualization Agent. My work substantially redesigned and extended that foundation into a multi-page Streamlit workspace. The contribution is visible in the repository history: dataset profiling, prompt construction, result normalization, workspace navigation, session behavior, release tests, and deployment hardening all evolved after the original prototype.</p>
            <div className="article-callout">
              <strong>Design principle</strong>
              <p>Every boundary should leave evidence: the input profile, the generated code, the sandbox logs, the normalized result, or the release check that protects it.</p>
            </div>
          </section>

          <section id="contract">
            <h2>Turn the prompt into a contract</h2>
            <p>The model does not receive an unbounded request. The system prompt names the exact CSV path, allowed libraries, chart expectations, and output shape. Dataset context includes column names, types, quality signals, and a small row sample. The user can then inspect the generated Python before trusting the result.</p>
            <pre><code>{`CSV + profile
    -> constrained model prompt
    -> explanation + one Python block
    -> code parsing and chart checks`}</code></pre>
            <p>This contract does not prove that generated code is correct. It does make failure modes legible. A missing Python block becomes a specific state. A chart request that returns no chart becomes a warning. Provider authentication and rate-limit failures become targeted messages rather than a generic crash.</p>
          </section>

          <section id="execution">
            <h2>Keep generated code outside the host</h2>
            <p>In live mode, the complete CSV and generated Python move into an E2B sandbox. The Streamlit host never executes model-generated code directly. Results return as heterogeneous payloads - charts, images, tables, JSON, stdout, stderr, or errors - and the application serializes them into a stable history model before rendering.</p>
            <p>The boundary is still a data transfer. The model receives dataset context and recent conversation messages; E2B receives the full CSV for execution. The README now states that plainly. Isolation is an engineering property, not a privacy slogan.</p>
            <h3>Why session state mattered</h3>
            <p>An earlier version wrote API keys, uploaded bytes, chat, and results to one process-global directory. That can look convenient locally and becomes unsafe on a multi-user host. The public-release work removed global persistence, kept user state inside the Streamlit session, and added tests that assert uploads do not create local files.</p>
          </section>

          <section id="release">
            <h2>Separate the public demo from paid execution</h2>
            <p>The deployed site runs a deterministic demo mode with bundled synthetic retail data. It accepts no uploads, requests no API keys, and calls neither Ollama nor E2B. Supported prompts run local Pandas analyses and return real charts and tables through the same result renderer used by the live workspace.</p>
            <div className="evidence-table" role="table" aria-label="Release evidence">
              <div role="row"><span role="cell">Tests</span><strong role="cell">10 passing</strong></div>
              <div role="row"><span role="cell">CI</span><strong role="cell">Python 3.11 and 3.12</strong></div>
              <div role="row"><span role="cell">Public services</span><strong role="cell">No Ollama or E2B calls</strong></div>
              <div role="row"><span role="cell">State</span><strong role="cell">Session-only</strong></div>
            </div>
            <p>The result is less theatrical and more useful: recruiters can run the product without credentials, engineers can inspect the implementation, and the repository documents exactly where the demo ends and live execution begins.</p>
            <div className="article-links">
              <ExternalLink href="https://vidhi-data-visualization-agent.streamlit.app">Run the public demo</ExternalLink>
              <ExternalLink href="https://github.com/Vidhivk99/Data-Visualization-Agent">Inspect the source and CI</ExternalLink>
            </div>
          </section>
        </div>
      </article>
      <ArticleFooter />
    </main>
  );
}

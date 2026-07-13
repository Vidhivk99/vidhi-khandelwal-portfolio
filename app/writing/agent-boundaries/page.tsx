import type { Metadata } from "next";
import { ArticleFooter, ArticleHeader, ExternalLink } from "@/app/components";

export const metadata: Metadata = {
  title: "Hardening Agent Boundaries | Vidhi Khandelwal",
  description: "Two technical case studies on checkpoint handoff in a PPO pipeline and sanitizing browser-controlled input before an embedded terminal.",
};

export default function AgentBoundaries() {
  return (
    <main>
      <ArticleHeader
        kicker="Case study / reliability + security"
        title="Hardening Agent Boundaries"
        dek="Agent failures often happen around the model: in configuration, artifact handoff, generated code, or terminal input. Two contributions show how to make those boundaries explicit and testable."
        meta="Vidhi Khandelwal / 9 minute read / Updated July 2026"
      />
      <article className="article-body">
        <aside className="article-toc">
          <span>In this article</span>
          <a href="#boundary">Boundary failures</a>
          <a href="#diambra">DIAMBRA PPO</a>
          <a href="#hermes">Hermes PTY input</a>
          <a href="#checklist">Reusable checks</a>
        </aside>
        <div className="article-content">
          <section id="boundary">
            <p className="dropcap">A model can be behaving exactly as designed while the surrounding system is still wrong. The configuration can point to the wrong artifact. Evaluation can run forever. A browser query parameter can become terminal input without a trust boundary.</p>
            <p>That is why I treat agent engineering as boundary engineering. The useful question is not only &quot;What did the model predict?&quot; It is also &quot;Which artifact did we load, which assumptions did we validate, and what untrusted bytes crossed into an execution surface?&quot;</p>
          </section>

          <section id="diambra">
            <h2>Case 1: checkpoint handoff in DIAMBRA PPO</h2>
            <p>The submission pipeline had two related failures: a command-line flag mismatch and evaluation code that ignored the configured model path. A successful training run could therefore produce a checkpoint that the next stage did not load.</p>
            <p>The merged fix made the handoff explicit. YAML loading validates required fields. Checkpoint resolution is deterministic. Evaluation accepts bounded episode counts, uses deterministic inference, and closes environments reliably. Runtime-heavy dependencies are isolated behind testable functions so the submission contract can be checked without rendering a full game.</p>
            <div className="evidence-table" role="table" aria-label="DIAMBRA contribution evidence">
              <div role="row"><span role="cell">Pull request</span><strong role="cell">Merged</strong></div>
              <div role="row"><span role="cell">Change</span><strong role="cell">657 additions / 126 deletions</strong></div>
              <div role="row"><span role="cell">Tests</span><strong role="cell">15 added</strong></div>
              <div role="row"><span role="cell">CI</span><strong role="cell">Python 3.10 and 3.11 passed</strong></div>
            </div>
            <p>A complete rendered DIAMBRA match was not run locally. That limitation is part of the evidence, too: the tests verify configuration, checkpoint selection, evaluation control, and cleanup without pretending to validate the full game runtime.</p>
          </section>

          <section id="hermes">
            <h2>Case 2: deep-link input entering an embedded PTY</h2>
            <p>Hermes Agent supports a <code>/chat?learn=</code> deep link. The browser reads that query value and sends it into an embedded pseudo-terminal. Without sanitization, control characters can change how the terminal interprets the string.</p>
            <pre><code>{`browser query value
    -> collapse control and separator bytes
    -> trim and reject empty input
    -> send one bounded command to the PTY
    -> clear the URL parameter`}</code></pre>
            <p>My initial contribution introduced the sanitizer and regression coverage for control-character input. A later collaborator refinement added ANSI-sequence handling. The upstream pull request remains open, with no GitHub checks or reviews currently reported, so this work is presented as a security proposal in review rather than an accepted contribution.</p>
            <div className="article-callout coral-callout">
              <strong>Status is part of the claim</strong>
              <p>DIAMBRA is merged with passing CI. Hermes is open and unmerged. The portfolio keeps those evidence levels visibly different.</p>
            </div>
          </section>

          <section id="checklist">
            <h2>A reusable boundary checklist</h2>
            <ol className="checklist">
              <li><strong>Name the boundary.</strong><span>Configuration, model artifact, generated code, deep link, terminal, or external provider.</span></li>
              <li><strong>Validate before crossing it.</strong><span>Reject missing paths, malformed config, empty commands, and unsupported states early.</span></li>
              <li><strong>Bound the work.</strong><span>Limit episodes, requests, file sizes, command length, time, and external spend.</span></li>
              <li><strong>Make cleanup deterministic.</strong><span>Close environments, clear one-shot URL state, and isolate session data.</span></li>
              <li><strong>Leave inspectable evidence.</strong><span>Tests, CI, logs, code review state, and honest limitations.</span></li>
            </ol>
            <div className="article-links">
              <ExternalLink href="https://github.com/Ketan-Kapse/diambra_ppo/pull/2">Inspect merged DIAMBRA PR #2</ExternalLink>
              <ExternalLink href="https://github.com/NousResearch/hermes-agent/pull/63855">Review open Hermes PR #63855</ExternalLink>
            </div>
          </section>
        </div>
      </article>
      <ArticleFooter />
    </main>
  );
}

import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the evidence-led portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Vidhi Khandelwal/);
  assert.match(html, /Systems with visible evidence/);
  assert.match(html, /Data-Visualization-Agent/);
  assert.match(html, /DIAMBRA PPO/);
  assert.match(html, /Hermes Agent/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("renders both technical articles", async () => {
  const [analytics, boundaries] = await Promise.all([
    render("/writing/inspectable-analytics-workspace"),
    render("/writing/agent-boundaries"),
  ]);
  assert.equal(analytics.status, 200);
  assert.equal(boundaries.status, 200);
  assert.match(await analytics.text(), /From Demo to Inspectable Analytics Workspace/);
  assert.match(await boundaries.text(), /Hardening Agent Boundaries/);
});

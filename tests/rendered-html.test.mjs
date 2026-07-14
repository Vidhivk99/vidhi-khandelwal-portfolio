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

test("renders the project-led portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Vidhi Khandelwal/);
  assert.match(html, /AI Data Visualization Agent/);
  assert.match(html, /DIAMBRA Fighting-Game Agent/);
  assert.match(html, /COVID-19 Mortality Prediction/);
  assert.match(html, /Algorithms and model experiments/);
  assert.doesNotMatch(html, /Pull request|PR #|commit count|Hermes Agent|Writing/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

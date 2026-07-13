# Vidhi Khandelwal Portfolio

Evidence-led public portfolio for Vidhi Khandelwal, an AI and software engineer. The site presents
verified project status, links to live or reviewable work, and two technical case studies.

## Routes

- `/` - selected work, writing, experience, and contact
- `/writing/inspectable-analytics-workspace` - Data Visualization Agent case study
- `/writing/agent-boundaries` - DIAMBRA PPO and Hermes Agent case study

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm test
npm audit --omit=dev
```

`npm test` builds the Cloudflare-compatible vinext output and verifies the server-rendered homepage
and both article routes.

## Evidence policy

- Data Visualization Agent is described as a substantial redesign of an existing foundation and
  links to the preserved contributor history.
- DIAMBRA PPO PR #2 is labeled merged and links to passing CI.
- Hermes Agent PR #63855 is labeled open and is not presented as an accepted contribution.
- Employer and education summaries are intentionally concise; uncorroborated performance metrics
  are not published on the site.

## Deployment

The site is prepared for OpenAI Sites using the project binding in `.openai/hosting.json`.

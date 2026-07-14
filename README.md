# Vidhi Khandelwal Portfolio

Project-led public portfolio for Vidhi Khandelwal, an AI and software engineer. The homepage is built around three substantial projects, with a smaller index of algorithm and model experiments.

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

`npm test` builds the Cloudflare-compatible vinext output and checks that the server-rendered homepage contains the featured projects without PR, commit, or blog framing.

## Content policy

- Projects are presented as products, systems, and technical work.
- Pull requests and commit activity are not treated as standalone portfolio entries.
- Links lead to live applications, source repositories, or relevant project environments.
- Employer and education summaries remain concise so projects stay central.

## Deployment

The site is prepared for OpenAI Sites using the project binding in `.openai/hosting.json`.

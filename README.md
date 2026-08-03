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
npm run build
```

## Content policy

- Projects are presented as products, systems, and technical work.
- Pull requests and commit activity are not treated as standalone portfolio entries.
- Links lead to live applications, source repositories, or relevant project environments.
- Employer and education summaries remain concise so projects stay central.

## GitHub Pages

This repo can also deploy to GitHub Pages as a static export.

- If you keep the repository name as `vidhi-khandelwal-portfolio`, the site will publish at `https://vidhivk99.github.io/vidhi-khandelwal-portfolio/`.
- If you rename the repository to `Vidhivk99.github.io`, update the workflow environment variable `NEXT_PUBLIC_BASE_PATH` to an empty string so the site publishes at `https://vidhivk99.github.io/`.

The included GitHub Actions workflow builds the static site with:

```bash
npm ci
npm run build
```

and deploys the generated `out/` directory to GitHub Pages.

# itsjwags

Personal site for Jonathan Wagoner — frontend engineer.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Biome](https://biomejs.dev) — linting and formatting

## Getting started

Requires Node.js 24+.

```bash
yarn install
yarn dev   # http://localhost:4321
```

## Commands

| Command | Description |
|---|---|
| `yarn dev` | Start local dev server at `localhost:4321` |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Check for lint and formatting issues |
| `yarn fix` | Auto-fix lint and formatting issues |

## Deployment

Pushes to `main` deploy automatically via Netlify. Pull requests get deploy previews.

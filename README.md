# Ibrahim Alqassass | Portfolio

Personal portfolio site: **[alqassass.me](https://alqassass.me)**

Built with Next.js and TypeScript, exported as a static site and deployed on Vercel.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) with static export
- React and TypeScript
- Plain CSS with custom properties (no UI library)
- ESLint and Prettier
- GitHub Actions for CI, Vercel for hosting

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command                | What it does                               |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start the development server               |
| `npm run build`        | Build the static site into `/out`          |
| `npm run typecheck`    | Run the TypeScript compiler without output |
| `npm run lint`         | Lint with ESLint                           |
| `npm run format`       | Format all files with Prettier             |
| `npm run format:check` | Check formatting without changing files    |

## Project structure

```
app/          Pages, layout, global styles, favicon and social preview image
data/site.ts  All content: name, links, about text, skills and projects
public/       Static files, including the resume PDF
```

## Editing content

All text on the site lives in `data/site.ts`, so most changes never touch the page code.
The resume is `public/Ibrahim_Alqassass_General.pdf`. Replace the file and keep the name.
The social preview image (`app/opengraph-image.png`) has the headline baked in, so
regenerate it if the headline changes.

## Continuous integration

Every push and pull request runs lint, format check, typecheck and build
(`.github/workflows/ci.yml`).

## Deployment

The repo is connected to Vercel. Pushing to `main` deploys to production
automatically, and pull requests get preview deployments. The custom domain
(`alqassass.me`) is configured in the Vercel project settings.
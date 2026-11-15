# Portfolio

Personal portfolio built with Next.js (static export).

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs static site to /out
```

## Edit content
Everything lives in `data/site.js`: your name, links, about text, skills, and projects.
Put your resume at `public/resume.pdf`.

## Deploy
Connect this repo to Vercel or Cloudflare Pages (build command `npm run build`, output directory `out`), then add your custom domain.

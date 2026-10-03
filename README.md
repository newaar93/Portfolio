# Anush Pradhan — Frontend Developer Portfolio

My personal portfolio website, designed and built from scratch.

🌍 **Live:** [anushpradhan.vercel.app](https://anushpradhan.vercel.app)

## Built with

- **React** — components, props, conditional rendering
- **JavaScript (ES2023)**
- **Tailwind CSS** — utility-first styling, responsive design
- **Vite** — dev server + production builds
- **Vercel** — hosting with CI/CD (every `git push` auto-deploys)

## Features

- One-page layout: Hero, Projects, Skills, About, Contact
- Project cards with real screenshots, live demo + code links
- Tech logos via the Simple Icons CDN
- Single source of truth: all content lives in `src/data/content.js`
- Dark theme, fully responsive

## Run locally

npm install
npm run dev

## What I learned building this

- Structuring an app as small, focused components
- Keeping content separate from components (data-driven UI)
- The full git workflow: commit → push → automatic deployment
- Debugging real build issues (like pinning the Node version for Vercel)
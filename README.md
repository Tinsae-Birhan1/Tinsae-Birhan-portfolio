# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Dark theme with violet/cyan gradient accents
- Smooth scroll animations with Framer Motion
- Fully responsive (mobile, tablet, desktop)
- Glass morphism UI elements
- Sections: Hero, About, Skills, Projects, Experience, Contact
- Easy to customize via `src/data/site.ts`

## Getting Started

This project requires **Node.js 20+**. If you use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use        # reads .nvmrc and switches to Node 20
npm install
npm run dev
```

To make Node 20 your default shell version:

```bash
nvm alias default 20
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### If you see `routes-manifest.json` or 500 errors

This usually means a corrupted `.next` cache (often from running `build` while `dev` is still running). Fix it with:

```bash
cd /Users/tinsu/Documents/me/portfolio
nvm use 20
npm run dev:clean
```

Or use the helper script:

```bash
bash scripts/dev-clean.sh
```

**Important:** The project folder was renamed from `portifolio ` (with a trailing space) to `portfolio`. Re-open the correct folder in Cursor:

`/Users/tinsu/Documents/me/portfolio`

## Customization

Edit `src/data/site.ts` to update your name, bio, skills, projects, experience, and social links.

## Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework
- [Tailwind CSS 4](https://tailwindcss.com/) — Styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Lucide React](https://lucide.dev/) — Icons
- [TypeScript](https://www.typescriptlang.org/) — Type safety

## Deploy

Deploy easily on [Vercel](https://vercel.com):

```bash
npm run build
```

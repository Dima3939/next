# ENDORPHIN — Creative Digital Design & Motion Studio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?logo=framer)](https://www.framer.com/motion/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-22c55e?logo=github)](https://dima3939.github.io/next/)

> **High-octane digital dopamine for visionary brands.**  
> A premium dark UI showcase landing page for the Endorphin design studio built with clean **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**, optimized for 60 FPS performance and GitHub Pages static hosting.

---

## 🌟 Key Features & Aesthetics

- **Architectural Purity**: Real Next.js 14 App Router (`app/layout.tsx`, `app/page.tsx`, modular client components with `'use client'`). Produces real static builds with `_next` chunks.
- **Awwwards-Grade Dark Aesthetic**: Obsidian black `#07070a`, glowing mesh gradients, ambient light orbs, custom glassmorphism borders, and neon accents.
- **Fluid Motion Design (Framer Motion)**:
  - Ambient glowing background mesh with animated multi-layer gradient orbs.
  - Staggered entrance in the Hero section (`staggerChildren`).
  - Staggered project showcase grid with interactive category filtering.
  - Micro-interactions: Mouse hover 3D tilt, case preview modal dialogs, and glowing borders.
  - Viewport-triggered scroll animations (`whileInView`).
- **Interactive Elements**:
  - Live Zurich Studio Clock.
  - Project inquiry budget selector and quick email copy pill.
  - Interactive service capability deep-dive tabs.
  - High-impact verified metrics & client testimonials.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Export)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Static HTML/CSS/JS export (`output: 'export'`) configured for [GitHub Pages](https://pages.github.com/).

---

## 🛠 Local Development

```bash
# Clone the repository
git clone https://github.com/Dima3939/next.git
cd next

# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm run dev
```

---

## 📦 Static Export & Deployment

### 1. Build Static Output
```bash
npm run build
```
This generates the `out/` folder containing `index.html`, `_next/`, and `.nojekyll` configured with `basePath: '/next'`.

### 2. Automatic GitHub Pages Deployment (Recommended)
This repository contains a pre-configured GitHub Actions workflow: `.github/workflows/deploy.yml`.

1. Push this repository to GitHub:
   ```bash
   git push -u origin main
   ```
2. In your GitHub repository settings:
   - Go to **Settings** -> **Pages**
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
   - Your site will automatically build and publish at `https://dima3939.github.io/next/`.

### 3. Alternative: Deploy via `gh-pages` branch
```bash
npm run deploy
```
This builds the site and pushes the contents of `out/` to the `gh-pages` branch. Then set your GitHub Pages source to deploy from the `gh-pages` branch.

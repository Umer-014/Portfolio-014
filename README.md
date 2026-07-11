# Umer Riaz — Portfolio

A production-ready portfolio site built with React, Vite, Tailwind CSS v4, Framer Motion, and React Router.

## Design direction
Dark theme with glassmorphism panels, framed around a "deployed systems" motif: every panel reads like a monitored service (terminal window chrome, live status pills, uptime-style stat counters) because that's what the underlying work actually is - shipped, running systems rather than static mockups.

- Palette: near-black void background, violet -> cyan signature gradient, amber for highlights/certifications, mint for "live/deployed" status.
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (status pills, code-style details).

## Getting started

npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build

## Structure

src/components/layout    Navbar, Footer
src/components/ui        GlassPanel, WindowChrome, StatusPill, SectionHeading, SkillBar, StatCounter, ProjectCard
src/components/sections  Hero, About, Experience, FeaturedProjects, Skills, Certifications, TestimonialsAndBlog, Contact
src/data/profile.js       Bio, experience, education, skills, certifications, testimonials, blog placeholders
src/data/projects.js      Full case-study content for all 8 projects
src/pages/Home.jsx        assembles all sections
src/pages/ProjectDetail.jsx  per-project deep dive at /projects/:slug
src/pages/NotFound.jsx

## Before you deploy - things to fill in

1. public/resume.pdf - add your actual CV; the Resume buttons already link to /resume.pdf.
2. LinkedIn URL - src/data/profile.js has a placeholder linkedin field; update with your real profile URL.
3. Testimonials - src/data/profile.js testimonials are placeholders as requested; swap in real quotes when available.
4. Screenshots - each project page has a labelled placeholder frame; drop real screenshots into src/assets and swap in an img tag when ready.
5. Double check the specifics written into projects.js (challenges/results/future improvements) - expanded on your brief with plausible detail; edit anything that doesn't match reality.

## Deploying
Any static host works after npm run build (Vercel, Netlify, Amplify, GitHub Pages with a base path set in vite.config.js).

## Node version
This project targets Node 18+ (downgraded from the Node 20+ toolchain so it runs on Node 18.20.4). Dependency pins: Vite 5, Tailwind CSS 3, React Router 6, React 18. `npm audit` will flag a moderate esbuild dev-server advisory from the Vite 5 line - it only affects the local dev server accepting cross-origin requests during `npm run dev`, not your production build, so it's safe to ignore for this project.

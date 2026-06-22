---
title: "How Astro Helped Me Hit 100 Lighthouse Scores"
description: "A deep dive into the architecture decisions behind this portfolio — zero-JS by default, content collections, and edge deployment on Netlify."
pubDate: 2024-07-01
tags: ["Astro", "Performance", "Web Dev", "Netlify"]
draft: false
---

## The Problem with Modern Frontend Frameworks

Every major JavaScript framework ships a runtime to the browser. React needs ReactDOM. Vue needs its reactivity core. Even stripped-down alternatives carry overhead that's invisible during development but painfully visible on a slow mobile connection in a rural area.

For a portfolio site — content that barely changes — shipping a 200 kB JavaScript bundle is architectural malpractice.

## Astro's Island Architecture

Astro inverts the default. Everything is static HTML unless you explicitly opt a component into hydration with a `client:*` directive. My entire portfolio ships **0 kB of JavaScript** to the browser except for the 120-byte theme-toggle inline script.

```astro
<!-- This ships zero JS -->
<MyComponent />

<!-- This hydrates only when visible in the viewport -->
<MyComponent client:visible />
```

## Content Collections Are a Superpower

Astro's content collections give you Zod-validated frontmatter with full TypeScript inference. No more `(post.data as any).title` — the types flow all the way to your templates.

## The Result

| Metric | Score |
|--------|-------|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---
title: "Scrollar"
description: "A scroll-driven storytelling library for the web. Animate any element in sync with the user's scroll position using a declarative, zero-dependency API."
pubDate: 2024-06-10
tags: ["JavaScript", "CSS", "Web Animation", "Open Source", "TypeScript"]
image: "/images/project-scrollar.jpg"
repositoryUrl: "https://github.com/yourusername/scrollar"
liveUrl: "https://scrollar.example.com"
featured: true
order: 2
---

## Overview

Scrollar is a lightweight, dependency-free JavaScript library that makes scroll-driven animations trivial to implement. Define animation keyframes in plain JavaScript and Scrollar handles the interpolation, RAF scheduling, and IntersectionObserver lifecycle for you.

## Motivation

Every scroll-animation library I found either shipped 40 kB of runtime or required a specific framework. I wanted something that felt like writing CSS keyframes but for scroll position.

## API Design

```js
import { animate } from 'scrollar';

animate('#hero-title', {
  from: { opacity: 0, y: 32 },
  to:   { opacity: 1, y: 0  },
  scrub: true,
});
```

## Architecture

- **Zero dependencies** — 2.4 kB gzipped
- **Intersection-aware** — animations only run when the element is in the viewport, preventing wasted rAF calls
- **WAAPI under the hood** — delegates to the native Web Animations API when available, falling back to `requestAnimationFrame`
- **Tree-shakeable ESM** build alongside a UMD bundle for CDN use

## Performance

Benchmarked at <0.3 ms per frame on a 2021 MacBook Pro, even with 40 simultaneous animated elements. Paint is completely off the main thread for transform and opacity properties.

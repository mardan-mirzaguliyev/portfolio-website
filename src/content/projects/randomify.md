---
title: "Randomify"
description: "A full-stack MERN application that generates curated random content — quotes, colors, music, and images — powered by a custom recommendation engine that learns from user preferences."
pubDate: 2023-11-20
tags: ["MongoDB", "Express", "React", "Node.js", "MERN", "REST API"]
repositoryUrl: "https://github.com/yourusername/randomify"
liveUrl: "https://randomify.example.com"
featured: true
order: 3
---

## Overview

Randomify started as a weekend project — a simple random quote generator. It grew into a full-stack content discovery platform with a lightweight collaborative-filtering recommendation engine that surfaces content you didn't know you'd love.

## Stack

| Layer    | Technology |
|----------|------------|
| Database | MongoDB Atlas with Change Streams |
| API      | Express 4 + REST, JWT auth |
| Frontend | React 18 + Zustand for state |
| Hosting  | Render (API) + Netlify (SPA) |

## Key Features

- **Multi-content type** — quotes, color palettes, lo-fi tracks, abstract art
- **Preference learning** — thumbs up/down signals feed a cosine-similarity model stored per user
- **Real-time updates** — MongoDB Change Streams push new content to connected clients via SSE
- **Shareable links** — each random result gets a deterministic short URL

## Challenges

The hardest part was building the recommendation engine without a data science background. I read papers on item-based collaborative filtering and implemented a simplified version in Node.js that runs in under 10 ms per request on the free-tier Atlas cluster.

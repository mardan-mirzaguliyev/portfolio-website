---
title: "The Narratives in Graphs"
description: "An interactive data visualization platform that transforms complex datasets into compelling visual narratives, enabling non-technical stakeholders to explore insights through storytelling."
pubDate: 2024-03-15
tags: ["R", "ggplot2", "Shiny", "Data Science", "Visualization"]
image: "/images/project-graphs.jpg"
repositoryUrl: "https://github.com/yourusername/the_narratives_in_graphs"
liveUrl: "https://narratives.example.com"
featured: true
order: 1
---

## Overview

The Narratives in Graphs project bridges the gap between raw data and human understanding. Built with R and Shiny, it provides an interactive dashboard that guides users through a curated data story rather than leaving them to explore a static chart.

## Problem

Data analysts often produce technically accurate charts that stakeholders struggle to interpret. The insight gets lost in the noise of unlabeled axes, unexplained outliers, and raw scales.

## Solution

I designed a guided narrative flow where each panel reveals a new layer of the story:

1. **Context** — establish the baseline and timeframe
2. **Anomaly detection** — highlight statistically significant events
3. **Causal annotation** — overlay external events that explain the anomalies
4. **Takeaway** — surface the single most actionable conclusion

## Technical Details

- **R + ggplot2** for all chart rendering with a custom theme layer
- **Shiny** reactive framework for real-time user interaction
- **Plotly** for hover-state details and mobile-friendly touch events
- **CSS Grid** layout exported from R Markdown for embed-ready output

## Results

- 3× increase in stakeholder engagement during quarterly reviews
- Reduced "what does this mean?" follow-up questions by ~60%
